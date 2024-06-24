'use client'
import { useMemo, useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import BootstrapTable from 'react-bootstrap/Table'
import { Variable } from '../types/variable'

type Props = {
  variables: Variable[]
}

// arbitrary page size for client side pagination example
const PAGE_SIZE = 5

export default function Table({ variables }: Props) {
  const [activePage, setActivePage] = useState(0)

  const paginatedList = useMemo(() => {
    if (activePage === 0) return variables.slice(0, PAGE_SIZE)
    const start = activePage * PAGE_SIZE
    return variables.slice(start, start + PAGE_SIZE)
  }, [activePage])

  const handlePageChange = (page: number) => () => setActivePage(page)

  return (
    <>
      <BootstrapTable responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>datatype</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedList.map((variable) => (
            <tr key={variable.id}>
              <td>{variable.id}</td>
              <td>{variable.name}</td>
              <td>{variable.dataType.name}</td>
              <td>{variable.status.name}</td>
            </tr>
          ))}
        </tbody>
      </BootstrapTable>
      <Pagination>
        {Array.from({ length: Math.ceil(variables.length / PAGE_SIZE) }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={activePage === index}
            onClick={handlePageChange(index)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  )
}
