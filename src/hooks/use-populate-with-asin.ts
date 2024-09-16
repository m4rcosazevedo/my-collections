import { CollectionItemValues } from '@/pages/collection-item-create'
import { useEffect } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Maybe } from 'yup'

interface UsePopulateWithAsinProps {
  watchASIN: Maybe<string | undefined>
  watchName: Maybe<string | undefined>
  setValue: UseFormSetValue<CollectionItemValues>
}

const usePopulateWithAsin = ({ watchASIN, watchName, setValue }: UsePopulateWithAsinProps) => {
  useEffect(() => {
    if (watchASIN && watchName === '') {
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(
            `https://cors-anywhere.herokuapp.com/https://www.amazon.com/dp/${watchASIN}`,
            {
              headers: {
                'X-Requested-With': 'XMLHttpRequest'
              }
            }
          )
          const data = await response.text()
          const parser = new DOMParser()
          const doc = parser.parseFromString(data, 'text/html')
          const title = doc.querySelector('#productTitle')?.textContent?.trim()
          const image = doc.querySelector('#imgTagWrapperId img')?.getAttribute('data-old-hires')

          setValue('name', title || '')
          setValue('imageUrl', image || '')
        } catch (error) {
          toast.error('Ocorreu um erro ao buscar pelo ASIN')
        }
      }

      fetchProductDetails()
    }
  }, [watchASIN, watchName, setValue])
}

export { usePopulateWithAsin }
