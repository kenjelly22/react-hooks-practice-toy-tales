import React, {useEffect} from "react"
import ToyCard from "./ToyCard"

function ToyContainer({toys, setToys, onDelete}) {
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toys) => setToys(toys))
  }, [])

  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default ToyContainer
