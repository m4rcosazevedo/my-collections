import { storage } from '@/config/firebase'
import { settings } from '@/config/settings'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

interface UploadImageProps {
  imageUrl?: string
  imageFile?: FileList | null
}

export const uploadImage = async ({ imageUrl, imageFile }: UploadImageProps) => {
  let image = ''

  if (!imageUrl && !imageFile) {
    return
  }

  if (imageUrl) {
    image = (
      await (
        await fetch(settings.PROXY_UPLOAD_URI, {
          method: 'POST',
          body: JSON.stringify({ image: imageUrl }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      ).json()
    ).imageUrl
  } else if (imageFile) {
    const file = imageFile[0]
    const imageRef = ref(storage, `images/${file.name}`)
    await uploadBytes(imageRef, file)
    image = await getDownloadURL(imageRef)
  }

  return image
}
