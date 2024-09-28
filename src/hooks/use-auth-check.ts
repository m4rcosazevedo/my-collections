import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { useEffect, useState } from 'react'

const useAuthCheck = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth()

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { user, loading }
}

export { useAuthCheck }
