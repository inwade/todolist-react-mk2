import React from 'react';

import './AddingBlock.css';

function AddingBlock (props) {

    return (
        <div className="adding-block">
            <h3>Here you can add items to your list</h3>
            <textarea id="textarea-main"></textarea>
            <button onClick={props.handleAdd}>Add item</button>
        </div>
    )
}

export default AddingBlock