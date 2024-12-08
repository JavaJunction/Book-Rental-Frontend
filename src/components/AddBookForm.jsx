import { useState } from "react";

function AddBookForm({ onAddBook }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(formData);
    setFormData({ title: "", author: "", description: "", genre: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
