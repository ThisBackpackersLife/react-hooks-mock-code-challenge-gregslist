import React from "react";

function Search({ searchListings, changeSearchListings }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={ (e) => handleSubmit( e )}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={ searchListings }
        onChange={ changeSearchListings }
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;





























// import React from "react";

// function Search({ changeListingSearch, listingSearch }) {
  
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("submitted");
//   }

//   return (
//     <form className="searchbar" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         id="search"
//         placeholder="search free stuff"
//         value={ listingSearch }
//         onChange={ changeListingSearch }
//       />
//       <button type="submit">🔍</button>
//     </form>
//   );
// }

// export default Search;








// import React from "react";

// function Search() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("submitted");
//   }

//   return (
//     <form className="searchbar" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         id="search"
//         placeholder="search free stuff"
//         value={""}
//         onChange={(e) => console.log(e.target.value)}
//       />
//       <button type="submit">🔍</button>
//     </form>
//   );
// }

// export default Search;