import React from 'react';
import fetchOptions from '../data';

export default function Options(props){

    const options = fetchOptions(props);

    return(
        <div className="options">
            {options.map(option=>(
                <Option img = {option.img} name={option.name} description = {option.description} price ={option.price}/>
            ))}
        </div>
    );
}

function Option(props){

    const [selectedOption, setSelectedOption] = React.useState("");

    return (
        <button className={`option ${selectedOption}`} onClick={() => setSelectedOption("selectedOption")}>
            <img src={props.img}></img>
            <h1 className="product-name">{props.name}</h1>
            <p className="product-description">{props.description}</p>
            <p className="product-price">{props.price}</p>
            <ion-icon className="icon" name="checkmark-circle"></ion-icon>
        </button>
    );
}

