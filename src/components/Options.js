import { func } from 'prop-types';
import React from 'react';
import fetchOptions from '../data';

export default function Options(props){

    const options = fetchOptions(props);

    return(
        <div className="options">
            {options.map((option, index)=>(
                <Option 
                    key = {index} 
                    img = {option.img} 
                    name={option.name} d
                    escription = {option.description} 
                    price ={option.price}
                />
            ))}
        </div>
    );
}

function Option(props){

    const [selectedOption, setSelectedOption] = React.useState("");

    function ItemCounter(){
        const [valor, setValor] = React.useState(1);  
        if (valor === 0){
            setSelectedOption("")
        }  
        return(
            <p className="item-counter"><spam onClick={() => setValor(valor <= 0 ? 0 : valor - 1)} style={{color:'red'}}>-</spam> {valor} <spam onClick={() => setValor(valor + 1)} style={{color:'green'}}>+</spam></p>
        )
    }

    return (
        <button className={`option ${selectedOption}`} onClick={() => setSelectedOption("selectedOption")}>
            <img src={props.img}></img>
            <h1 className="product-name">{props.name}</h1>
            <p className="product-description">{props.description}</p>
            <p className="product-price">{props.price}</p>
            <ItemCounter/>
        </button>
    );
}

