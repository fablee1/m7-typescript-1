import { InputGroup, FormControl, Button } from "react-bootstrap"
import { useState } from "react"

interface Props {
  search: (query: string) => void
}

const Search = ({ search }: Props) => {
  const [name, setName] = useState<string>("")

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="search-holder">
        <h1>The Music Search Engine</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Eminem..."
            value={name}
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
          />
          <Button variant="outline-secondary" onClick={() => search(name)}>
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  )
}

export default Search
