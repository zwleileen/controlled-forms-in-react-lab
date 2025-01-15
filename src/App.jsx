// src/App.jsx

const App = () => {
  
  return(
    <>
  <div className="bookshelfDiv">
    <h1>My Bookshelf</h1>

    <form className="formDiv">
      <h2>Add a Book</h2>
      <p>Title: </p>
      <p>Author: </p>
      <button>Add Book</button>
    </form>
  </div>

  <div className="bookCardsDiv">
      <ul className="bookCard">
      <h2>Fourth Wing</h2>
      <p>by Rebecca Yarros</p>
      </ul>
  </div>
  </>
)};

export default App;
