import { useEffect, useState } from 'react'

type FilterKeys = 'name' | 'type' | 'platform' | 'status'

export const useProductsFiltered = (products: ProductCollection[]) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductCollection[]>(products)

  const [searchName, setSearchName] = useState<string>('')
  const [searchType, setSearchType] = useState<string>('')
  const [searchPlatform, setSearchPlatform] = useState<string>('')
  const [searchStatus, setSearchStatus] = useState<string>('')

  useEffect(() => {
    let filtered = products

    if (searchName) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchName.toLowerCase())
      )
    }
    if (searchType) {
      filtered = filtered.filter(product => product.type === searchType)
    }
    if (searchPlatform) {
      filtered = filtered.filter(product => product.platform === searchPlatform)
    }
    if (searchStatus) {
      filtered = filtered.filter(product => product.status === searchStatus)
    }

    setFilteredProducts(filtered)
  }, [searchName, searchType, searchPlatform, searchStatus, products])

  const handleFilter = (name: FilterKeys, value: string) => {
    switch (name) {
      case 'name':
        setSearchName(value)
        break
      case 'type':
        setSearchType(value)
        break
      case 'platform':
        setSearchPlatform(value)
        break
      case 'status':
        setSearchStatus(value)
        break
    }
  }

  return {
    filteredProducts,
    handleFilter,
    filters: {
      name: searchName,
      type: searchType,
      platform: searchPlatform,
      status: searchStatus
    }
  }
}
