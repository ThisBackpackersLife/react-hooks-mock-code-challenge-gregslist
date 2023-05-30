import React from "react";

function ListingCard({ listing, isFavorited, toggleFavorite, deleteListing }) {

  let { id } = listing
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ listing.image } alt={ listing.name } />
      </div>
      <div className="details">
        { isFavorited ? (
          <button className="emoji-button favorite active" onClick={ () => toggleFavorite( id )}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={ () => toggleFavorite( id )}>☆</button>
        )}
        <strong>{ listing.description }</strong>
        <span> · { listing.location }</span>
        <button className="emoji-button delete" onClick={ () => deleteListing( id )}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;






























// import React, { useState } from "react";

// function ListingCard({ listing, deleteListing }) {

//   const [ isFavorited, setIsFavorited ] = useState(false)

//   const { id, description, image, location } = listing

//   function toggleFavorite() {
//     setIsFavorited( !isFavorited )
//   }

//   return (
//     <li className="card">
//       <div className="image">
//         <span className="price">$0</span>
//         <img src={ image } alt={ description } />
//       </div>
//       <div className="details">
//         {isFavorited ? (
//           <button onClick={ toggleFavorite } className="emoji-button favorite active">★</button>
//         ) : (
//           <button 
//             onClick={ toggleFavorite }
//             className="emoji-button favorite"
//           >☆</button>
//         )}
//         <strong>{ description }</strong>
//         <span> · {location}</span>
//         <button
//           onClick={ () => deleteListing( id ) }
//           className="emoji-button delete"
//         >🗑</button>
//       </div>
//     </li>
//   );
// }

// export default ListingCard;








// import React from "react";

// function ListingCard() {
//   return (
//     <li className="card">
//       <div className="image">
//         <span className="price">$0</span>
//         <img src={"https://via.placeholder.com/300x300"} alt={"description"} />
//       </div>
//       <div className="details">
//         {true ? (
//           <button className="emoji-button favorite active">★</button>
//         ) : (
//           <button className="emoji-button favorite">☆</button>
//         )}
//         <strong>{"description"}</strong>
//         <span> · {"location"}</span>
//         <button className="emoji-button delete">🗑</button>
//       </div>
//     </li>
//   );
// }

// export default ListingCard;