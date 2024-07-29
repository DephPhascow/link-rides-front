import gql from "graphql-tag";

export const getPasswordOrCreate = (tgId: String) => ({
    mutation: gql`
        mutation getPasswordOrCreate($tgId: String!) {
            getPasswordOrCreate(tgId: $tgId)
        }
    `,
    variables: {
        tgId,
    }
});

export const mAuth = (tgId: String, password: String) => ({
    mutation: gql`
        mutation auth($tgId: String!, $password: String!) {
            tokenAuth(tgId: $tgId, password: $password) {
                success
                errors
                token {
                    token
                    payload {
                        exp
                    }
                }
                refreshToken {
                    token
                    expiresAt
                }
            }
        }
    `,
    variables: {
        tgId,
        password
    }
});

export const mRefreshToken = (refreshToken: String, revokeRefreshToken: Boolean = false) => ({
    mutation: gql`
        mutation refreshToken ($refreshToken: String!, $revokeRefreshToken: Boolean!) {
            refreshToken(refreshToken: $refreshToken, revokeRefreshToken: $revokeRefreshToken) {
                success
                errors
                token {
                token
                payload {
                    exp
                }
                }
                refreshToken {
                token
                expiresAt
                }
            }
        }
    `,
    variables: {
        refreshToken,
        revokeRefreshToken
    }
});
