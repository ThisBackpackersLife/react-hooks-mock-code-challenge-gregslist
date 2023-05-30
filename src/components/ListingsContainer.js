import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, isFavorited, toggleFavorite, deleteListing }) {

  const renderListings = listings.map( listing => 
      <ListingCard 
        key={ listing.id }
        listing={ listing }
        isFavorited={ isFavorited }
        toggleFavorite={ toggleFavorite }
        deleteListing={ deleteListing }
      />
    )

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        { renderListings }
      </ul>
    </main>
  );
}

export default ListingsContainer;

































// import React from "react";
// import ListingCard from "./ListingCard";


// function ListingsContainer({ listings, deleteListing }) {

//   const renderListings = listings.map( listing => 
//       <ListingCard 
//         key={ listing.id }
//         listing={ listing }
//         deleteListing={ deleteListing }
//       />
//   )

//   return (
//     <main>
//       <ul className="cards">
//         {/* use the ListingCard component to display listings */}
//         { renderListings }
//       </ul>
//     </main>
//   );
// }

// export default ListingsContainer;







// import React from "react";
// // import ListingCard from "./ListingCard";

// function ListingsContainer() {
//   return (
//     <main>
//       <ul className="cards">
//         {/* use the ListingCard component to display listings */}
//       </ul>
//     </main>
//   );
// }

// export default ListingsContainer;