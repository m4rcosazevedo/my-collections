import { AuthenticatedLayout } from '@/components/layouts'
import { Loading } from '@/components/ui'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('@/pages/home'))
const SignIn = lazy(() => import('@/pages/sign-in'))
const CollectionItemcreate = lazy(() => import('@/pages/collection-item-create'))
const CollectionItemUpdate = lazy(() => import('@/pages/collection-item-update'))
const Collection = lazy(() => import('@/pages/collection'))

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<AuthenticatedLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/item/create" element={<CollectionItemcreate />} />
            <Route path="/collection/item/:uuid" element={<CollectionItemUpdate />} />
            <Route path="*" element={<h1>Página não existe!</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
