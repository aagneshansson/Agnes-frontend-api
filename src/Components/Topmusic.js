import React, { useState, useEffect } from 'react'

export const Top = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch('https://agnes-tracks.herokuapp.com/topmusic/')
      .then((response) => response.json())
      .then((json) => {
        setTracks(json)
      })
  }, []);

  return (
    <div>
      <section className="top-music">
        {tracks.map((track) => (
          <div>
          <h3>{track.trackName}</h3>
          <p>{track.artistName}</p>
          <p className="italic">{track.genre}</p>
          </div>
        ))}
      </section>
    </div>
  )
}