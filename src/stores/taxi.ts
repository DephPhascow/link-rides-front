import { defineStore } from 'pinia'
import { apolloClient } from '@/apollo'
import { useStorage } from './storage'
import { createTaxiInfoData } from '@/apollo/mutates/taxi'
import { ref } from 'vue'

export const useTaxi = defineStore('taxi', () => {
  const tgId = ref<string | null>(null)
  const uStorage = useStorage()
  const runCreateTaxiInfoData = async (firstName: string, lastName: string, carBrand: string, carModel: string, carColor: string, carNumber: string, year: number, seriesLicense: string, countryLicense: string, dateGetLicense: string, licenseValidUntil: string,) => {
    const currentToken = await uStorage.getToken(tgId.value!.toString())
    const response = (await apolloClient.mutate(createTaxiInfoData(currentToken?.token!, {
      firstName,
      lastName,
      carBrand,
      carModel,
      carColor,
      carNumber,
      year,
      seriesLicense,
      countryLicense,
      dateGetLicense,
      licenseValidUntil,
      // photoLicense
    })))
    if (response.errors && response.errors.length > 0) {
      alert(`${(response.errors[0] as any).message || 'Произошла ошибка'}`)
    }
    return response.data.createTaxiInfoData;
  }

  return { runCreateTaxiInfoData, tgId }
})

