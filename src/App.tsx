import "./App.css"
import Search from "./components/Search"
import { useState, useEffect } from "react"
import Track from "./types/Track"
import Results from "./components/Results"

function App() {
  const [tracks, setTracks] = useState<Track[]>([])

  const searchTracks = async (query: string) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      )
      const data = (await response.json())?.data as Track[]
      setTracks(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {tracks.length === 0 ? (
        <Search search={searchTracks} />
      ) : (
        <Results tracks={tracks} />
      )}
    </>
  )
}

export default App
