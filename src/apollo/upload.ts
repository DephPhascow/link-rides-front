import { ApolloLink, Observable } from 'apollo-link';
import { print } from 'graphql/language/printer';

const createFormData = (operation: any): FormData => {
    const { query, variables } = operation;
    const formData = new FormData();
    formData.append('operations', JSON.stringify({ query: print(query), variables }));

    const map: Record<string, string[]> = {};
    let i = 0;

    const appendFileToFormData = (file: File | Blob, path: string) => {
        map[i] = [path];
        formData.append(i.toString(), file);
        i++;
    };

    const processVariables = (vars: any, parentPath: string = 'variables') => {
        for (const key of Object.keys(vars)) {
            const value = vars[key];
            const currentPath = `${parentPath}.${key}`;

            if (value instanceof File || value instanceof Blob) {
                appendFileToFormData(value, currentPath);
            } else if (Array.isArray(value)) {
                value.forEach((file, index) => {
                    if (file instanceof File || file instanceof Blob) {
                        appendFileToFormData(file, `${currentPath}.${index}`);
                    }
                });
            } else if (typeof value === 'object' && value !== null) {
                processVariables(value, currentPath);
            }
        }
    };

    processVariables(variables);
    formData.append('map', JSON.stringify(map));
    return formData;
};


const createUploadLink = ({ uri }: { uri: string }): ApolloLink => {
    return new ApolloLink((operation: any) => {
        const context = operation.getContext();
        const { headers = {} } = context;
        const formData = createFormData(operation);

        return new Observable<any>((observer) => {
            fetch(uri, {
                method: 'POST',
                headers,
                body: formData,
            })
                .then((response) => response.json())
                .then((result) => {
                    observer.next(result);
                    observer.complete();
                })
                .catch((error) => {
                    observer.error(error);
                });
        });
    },);

};

export default createUploadLink;
