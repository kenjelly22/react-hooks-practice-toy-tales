import React, {useState} from "react"

function ToyForm({toys, setToys, onSubmit}) {
  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
    likes: 0,
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const updatedToy = {
      ...newToy,
      [name]: value,
    }
    setNewToy(updatedToy)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((r) => r.json())
      .then((newToy) => onSubmit(newToy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={newToy.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={newToy.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  )
}

export default ToyForm
