import React, {useState, useEffect} from "react"

import Header from "./Header"
import ToyForm from "./ToyForm"
import ToyContainer from "./ToyContainer"

function App() {
  const [showForm, setShowForm] = useState(false)
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm)
  }

  const handleSubmit = (newToy) => {
    setToys([...toys, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? (
        <ToyForm toys={toys} setToys={setToys} onSubmit={handleSubmit} />
      ) : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} />
    </>
  )
}

export default App
