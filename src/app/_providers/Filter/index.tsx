'use client'

import { ReactNode, useState } from 'react'

export const INITIAL_FILTER_DATA = {
  categoryFilters: () => [],
  sort: '',
  setSort: () => '',
}

const FilterContext = createContext(INITIAL_FILTER_DATA)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState([])
  const [sort, setSort] = useState('-createdAt')
  return <FilterContext.Provider>{children}</FilterContext.Provider>
}
