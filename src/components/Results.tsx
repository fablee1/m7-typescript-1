import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import Track from "../types/Track"

const Results = () => {
  const location = useLocation()
  const [tracks, setTracks] = useState<Track[]>([])

  useEffect(() => {
    const searchTracks = async () => {
      try {
        const query = new URLSearchParams(location.search).get("q")
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
        )
        if (response.ok) {
          const data = (await response.json())?.data as Track[]
          setTracks(data)
        } else {
          console.log("error")
        }
      } catch (error) {
        console.log(error)
      }
    }
    searchTracks()
  }, [])

  return (
    <div className="d-flex justify-content-center">
      <div className="w-50">
        {tracks?.map((t) => (
          <CardResult track={t} />
        ))}
      </div>
    </div>
  )
}

export default Results

interface CardProps {
  track: Track
}

const CardResult = ({ track }: CardProps) => {
  return (
    <div>
      <Card className="text-center mt-4">
        <Card.Header>{track.artist.name}</Card.Header>
        <Card.Body>
          <img src={track.album.cover_medium} alt="" />
          <Card.Title>{track.title}</Card.Title>
          <Card.Text>Album: {track.album.title}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{track.duration} seconds</Card.Footer>
      </Card>
    </div>
  )
}
