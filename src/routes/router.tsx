import { AuthenticatedLayout } from '@/components/layouts'
import { Loading } from '@/components/ui'
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

const Dashboard = lazy(() => import('@/pages/dashboard'))
const SignIn = lazy(() => import('@/pages/sign-in'))
const CollectionItemcreate = lazy(() => import('@/pages/collection-item-create'))
const CollectionItemUpdate = lazy(() => import('@/pages/collection-item-update'))
const CollectionItemCreateMulti = lazy(() => import('@/pages/collection-item-create-multi'))
const Collection = lazy(() => import('@/pages/collection'))
const Collections = lazy(() => import('@/pages/collections'))

const PathnameRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    const search = new URLSearchParams(location.search)
    const redirectPath = search.get('/')
    if (redirectPath) {
      window.history.replaceState({}, '', redirectPath)
    }
  }, [location])

  return null
}

export default function Router() {
  return (
    <BrowserRouter>
      <PathnameRedirect />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route element={<AuthenticatedLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/collection" element={<Collections />} />
            <Route path="/collection/:uuid" element={<Collection />} />
            <Route path="/collection/:uuid/item/create" element={<CollectionItemcreate />} />
            <Route
              path="/collection/:uuid/item/create/multi"
              element={<CollectionItemCreateMulti />}
            />
            <Route path="/collection/:uuid/item/:uuidItem" element={<CollectionItemUpdate />} />
            <Route path="*" element={<h1>Página não existe!</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
