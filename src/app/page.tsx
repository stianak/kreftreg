import Container from 'react-bootstrap/Container'
import Table from './components/Table'
import { Variable } from './types/variable'

async function getVariables(): Promise<Variable[]> {
  // would abstract api logic out of components next
  const res = await fetch(
    'https://metadata.kreftregisteret.no/rest/v1/variables/:filtered?keyword=test'
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const { variableList: data } = (await res.json()) as {
    variableList: Variable[]
  }
  return data.sort((a, b) => a.informationLevel.sortering - b.informationLevel.sortering)
}

export default async function Home() {
  const variables = await getVariables()
  return (
    <main>
      <Container className="mt-5">
        <Table variables={variables} />
      </Container>
    </main>
  )
}
