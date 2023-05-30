import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const baseUrl = "http://localhost:6001"
const listingsUrl = baseUrl + "/listings"

function App() {

  const [ listings, setListings ] = useState( [] )
  const [ isFavorited, setIsFavorited ] = useState( true )
  const [ searchListings, setSearchListing ] = useState( "" )

  useEffect( fetchListings, [] )

  function fetchListings() {
    fetch( listingsUrl )
    .then( res => res.json())
    .then( listingsData => setListings( listingsData ))
  }

  function deleteListing( id ) {
    fetch( listingsUrl + "/" + id, {
      method: "DELETE"
    })
    .then( res => res.json())
    .then( fetchListings );
  }

  function submitNewItem( e, newItem ) {
    e.preventDefault()

    const postRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify( newItem )
    }
    fetch( listingsUrl, postRequest )
    .then( res => res.json())
    .then( newItemData => setListings( [...listings, newItemData ]))
  }

  function toggleFavorite( id ) {
    setIsFavorited( !isFavorited )
  }

  function changeSearchListings( e ) {
    setSearchListing( e.target.value )
  }

  const filterListings = listings.filter( listing =>
    listing.description.toLowerCase().includes( searchListings.toLowerCase()))

  return (
    <div className="app">
      <Header
        searchListings={ searchListings }
        changeSearchListings={ changeSearchListings }
        submitNewItem={ submitNewItem }
      />
      <ListingsContainer 
        listings={ filterListings }
        isFavorited={ isFavorited }
        toggleFavorite={ toggleFavorite }
        deleteListing={ deleteListing }
      />
    </div>
  );
}

export default App;






























// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import ListingsContainer from "./ListingsContainer";
// import ListingCard from "./ListingCard";
// // import { render } from "react-dom";

// const baseUrl = "http://localhost:6001"
// const listingsUrl = baseUrl + "/listings"

// function App() {

//   const [ listings, setListings ] = useState([])
  
//   const [ listingSearch, setListingSearch ] = useState( '' )

//   useEffect( fetchListings, [] )

//   function fetchListings() {
//     fetch( listingsUrl )
//     .then( resp => resp.json())
//     .then( setListings )
//   }

//   function deleteListing( id ) {
    
//     const deleteRequest = {
//       method: 'DELETE',
//     }
    
//     fetch( listingsUrl + id, deleteRequest )
//     .then( () => {
//       const updatedListing = listings.filter( listing => listing.id !== id )
//       setListings( updatedListing )
//     } )

//   }

//   function changeListingSearch( event ) {
//     setListingSearch( event.target.value )
//   }

//   function listingSearchSubmit() {
//     setFilteredListings( filterListings )
//   }
//   const filterListings = listings.filter( listing => listing.description.toLowerCase().includes(listingSearch.toLowerCase()))
  
//   return (
//     <div className="app">
//       <Header
//        changeListingSearch={ changeListingSearch }
//        listingSearch={ listingSearch }
//        />
//       <ListingsContainer 
//         listings={ listings }
//         deleteListing={ deleteListing } 
//       />
//     </div>
//   );
// }

// export default App;

// // renderListings={ renderListings }





// import React from "react";
// import Header from "./Header";
// import ListingsContainer from "./ListingsContainer";

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <ListingsContainer />
//     </div>
//   );
// }

// export default App;