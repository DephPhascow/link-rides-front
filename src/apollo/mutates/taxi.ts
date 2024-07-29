import gql from "graphql-tag";
import type { TaxiInfoInput } from "../types";

export const createTaxiInfoData = (token: string, data: TaxiInfoInput) => ({
    mutation: gql`
        mutation ($data: TaxiInfoInput!){
            createTaxiInfoData(data: $data) {
                __typename
            }
        }
    `,
    variables: {
        data
    },
    context: {
        headers: {
            Authorization: `JWT ${token}`
        },
        hasUpload: true,
    }
});