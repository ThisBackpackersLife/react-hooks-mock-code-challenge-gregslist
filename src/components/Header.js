import React from "react";
import Search from "./Search";

function  Header({ searchListings, changeSearchListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        searchListings={ searchListings }
        changeSearchListings={ changeSearchListings }
      />
    </header>
  );
}

export default Header;






























// import React from "react";
// import Search from "./Search";

// function Header({ changeListingSearch, listingSearch }) {
//   return (
//     <header>
//       <h1>
//         <span className="logo" role="img">
//           ☮
//         </span>
//         gregslist
//       </h1>
//       <Search 
//         changeListingSearch={ changeListingSearch } 
//         listingSearch={ listingSearch }
//       />
//     </header>
//   );
// }

// export default Header;







// import React from "react";
// import Search from "./Search";

// function Header() {
//   return (
//     <header>
//       <h1>
//         <span className="logo" role="img">
//           ☮
//         </span>
//         gregslist
//       </h1>
//       <Search />
//     </header>
//   );
// }

// export default Header;