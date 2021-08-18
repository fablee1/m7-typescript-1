import { InputGroup, FormControl, Button } from "react-bootstrap"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const Search = () => {
  const [name, setName] = useState<string>("")

  const history = useHistory()

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
          <Button
            variant="outline-secondary"
            onClick={() => history.push("/search?q=" + name)}>
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  )
}

export default Search
