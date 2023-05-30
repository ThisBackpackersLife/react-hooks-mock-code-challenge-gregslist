import React, { useState } from "react";

function Form({ submitNewItem }) {

    const [ description, setDescription ] = useState( "" )
    const [ image, setImage ] = useState( "" )
    const [ location, setLocation ] = useState( "" )

    const changeDescription = e => setDescription( e.target.value )

    const changeImage = e => setImage( e.target.value )

    const changeLocation = e => setLocation( e.target.value )

    const newItem = {
        description: description,
        image: image,
        location: location
    }

    return(
        <form className="newItemForm" onSubmit={ e => submitNewItem( e, newItem ) }>
            <input
                type="text"
                id="description"
                placeholder="Add a description..."
                name="description"
                value={ description }
                onChange={ changeDescription }
            />
            <input
                type="text"
                id="image"
                placeholder="Add an image..."
                name="image"
                value={ image }
                onChange={ changeImage }
            />
            <input
                type="text"
                id="location"
                placeholder="Add a location..."
                name="location"
                value={ location }
                onChange={ changeLocation }
            />
            <button type="submit">🔍</button>
        </form>
    )
}

export default Form;