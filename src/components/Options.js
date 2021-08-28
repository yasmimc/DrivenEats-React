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
                    name={option.name} 
                    description = {option.description} 
                    price ={option.price}
                />
            ))}
        </div>
    );
}

function Option(props){

    const [selectedOption, setSelectedOption] = React.useState("");   
    const [amount, setAmount] = React.useState(0);  

    function selectOption(){
        if(amount === 0){
            setAmount(1);
            setSelectedOption("selectedOption")
        }
    }

    return (
        <button className={`option ${selectedOption}`} onClick={selectOption}>
            <img src={props.img}></img>
            <h1 className="product-name">{props.name}</h1>
            <p className="product-description">{props.description}</p>
            <p className="product-price">{props.price}</p>
            <ItemCounter
                amount = {amount}
                setAmount = {setAmount}
                selectedOption = {selectedOption}
                setSelectedOption = {setSelectedOption}
            />
        </button>
    );
}

function ItemCounter(props){ 

    function decrease(amount){

        if (amount === 1) {
            props.setSelectedOption("");
        }
        props.setAmount(amount-1)
    }

    function increase(amount){
        props.setAmount(amount + 1)
    }

    return(
        <p className="item-counter">
            <span onClick={() => decrease(props.amount)} style={{color:'red'}}>-</span>
            {` ${props.amount} `}
            <span onClick={() => increase(props.amount)} style={{color:'green'}}>+</span>
        </p>
    )
}