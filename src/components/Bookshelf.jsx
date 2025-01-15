import { useState } from 'react';

export default function Bookshelf() {

const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

const [newBook, setNewBook] = useState({
    title: "",
    author: "",
});

const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value})
    checkErrors(event)
}

const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook])
    setNewBook({
        title: "",
        author: "",
    })
};

const [errors, setErrors] = useState({
    title: "",
    author: "",
});

const checkErrors = ({target}) => {
    if(target.name === "author") {
        setErrors({
            ...errors,
            author: target.value.toLowerCase() === newBook.title.toLowerCase() ? `Author cannot be the same as title` : "",
        });
    }};

const formIsInvalid = Object.values(errors).some(Boolean);
const formHasMissingData = !newBook.title.trim() || !newBook.author.trim()
  

return(
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <div className="title">
        <label htmlFor="title">Title: </label>
        <input id="title" name="title" value={newBook.title} onChange={handleInputChange}/>
        </div>
        <div className="author">
        <label htmlFor="author">Author: </label>
        <input id="author" name="author" value={newBook.author} onChange={handleInputChange}/>
        {errors.author && <p className="error">{errors.author}</p>}
        </div>
        <button type="submit" disabled={formIsInvalid || formHasMissingData}>Add Book</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    {books.map((book) => (
        <div className="bookCard" key={book.title}>
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
        </div>
    ))}
  </div>
</div>
)}