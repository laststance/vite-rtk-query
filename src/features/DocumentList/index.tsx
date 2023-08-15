import React from 'react'

import Spinner from '../../compoments/Spinner'
import { useGetDocsListQuery } from '../../services/docs'

interface Props {}

const DocumentList: React.FC<Props> = () => {
  const { data, error, isLoading } = useGetDocsListQuery()
  console.log(data, error, isLoading)
  if (isLoading) return <Spinner size="xl" />

  return null
}

export default DocumentList
