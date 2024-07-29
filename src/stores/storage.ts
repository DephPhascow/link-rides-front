import { defineStore } from 'pinia'
import { apolloClient } from '@/apollo'
import { DateTime } from 'ts-luxon'
import { getPasswordOrCreate, mAuth } from "@/apollo/mutates/session"

export interface Tokenizer {
  token: string;
  tokenExp: DateTime;
  refreshToken: string;
  refreshTokenExp: DateTime;
}

export const useStorage = defineStore('storage', () => {

  async function getToken(tgId: string): Promise<Tokenizer | null> {
    const password = (await apolloClient.mutate(getPasswordOrCreate(tgId)))
    const data = (await apolloClient.mutate(mAuth(tgId, password.data.getPasswordOrCreate))).data.tokenAuth
    return {
      token: data.token.token,
      tokenExp: DateTime.fromISO(data.token.payload.exp),
      refreshToken: data.refreshToken.token,
      refreshTokenExp: DateTime.fromISO(data.refreshToken.expiresAt)
    } as Tokenizer
  }

  return { getToken }
})