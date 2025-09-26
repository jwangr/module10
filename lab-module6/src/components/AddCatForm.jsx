import { useState } from "react";

export default function AddCatForm({ addNewCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("garfield.jpg");

  const clearForm = () => {
    setName("");
    setLatinName("");
    setImage("garfield.jpg");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCat = {
        name,
        latinName,
        image,
    }
    addNewCat(newCat);
    clearForm();
  }
  return (
    <>
      <h3>Hard life being a cat. Let's add more</h3>
      <form className="mb-5" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            value={name}
            placeholder="Name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Latin Name</label>
          <input
            value={latinName}
            placeholder="Latin Name"
            className="form-control"
            onChange={(e) => setLatinName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            value={image}
            placeholder="Image URL"
            className="form-control"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type='submit' className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
