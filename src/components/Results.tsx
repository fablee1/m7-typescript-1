import React from "react"
import { Card, Button, Row } from "react-bootstrap"
import Track from "../types/Track"

interface Props {
  tracks: Track[]
}

const Results = ({ tracks }: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50">
        {tracks.map((t) => (
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
          <Card.Text>{track.album.title}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{track.duration} seconds</Card.Footer>
      </Card>
    </div>
  )
}
