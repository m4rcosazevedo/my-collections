import { settings } from '@/config/settings'

const endpoint = 'https://www.googleapis.com/customsearch/v1'

export const searchImageOnApi = async (searchTerm: string): Promise<Array<string>> => {
  const params = new URLSearchParams({
    key: settings.GOOGLE_API_KEY,
    cx: settings.GOOGLE_SEARCH_ENGINE_ID,
    q: searchTerm,
    searchType: 'image'
  })

  const response = await fetch(endpoint + '?' + params)
  const data = await response.json()
  return data.items?.map((item: { link: string }) => item.link) ?? []
}
