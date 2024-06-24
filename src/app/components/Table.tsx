'use client'
import { json2csv } from 'json-2-csv'
import { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
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
  const handleDownload = (id: number) => async () => {
    // would abstract api logic out of components next
    const res = await fetch(`https://metadata.kreftregisteret.no/rest/v1/variables/${id}`)
    const json = await res.json()
    const csvString = json2csv(json)
    const blob = new Blob([csvString], { type: 'text/csv' })
    const link = document.createElement('a')
    link.download = (json?.name && `${json.name}.csv`) || 'data.csv'
    link.href = URL.createObjectURL(blob)
    link.click()
  }

  return (
    <>
      <BootstrapTable responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>datatype</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedList.map((variable) => (
            <tr key={variable.id}>
              <td>{variable.id}</td>
              <td>{variable.name}</td>
              <td>{variable.dataType.name}</td>
              <td>{variable.status.name}</td>
              <td>
                <Button onClick={handleDownload(variable.id)}>Download 💾</Button>
              </td>
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
