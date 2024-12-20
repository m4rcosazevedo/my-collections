import { AuthenticatedLayout } from '@/components/layouts'
import { Loading } from '@/components/ui'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Dashboard = lazy(() => import('@/pages/dashboard'))
const SignIn = lazy(() => import('@/pages/sign-in'))
const CollectionItemcreate = lazy(() => import('@/pages/collection-item-create'))
const CollectionItemUpdate = lazy(() => import('@/pages/collection-item-update'))
const CollectionItemCreateMulti = lazy(() => import('@/pages/collection-item-create-multi'))
const Collection = lazy(() => import('@/pages/collection'))
const Collections = lazy(() => import('@/pages/collections'))

export default function Router() {
  return (
    <BrowserRouter>
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
