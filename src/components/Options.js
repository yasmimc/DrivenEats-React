import React from 'react';
import fetchOptions from '../data';

export default function Options(props){  

    const {order, setOrder, type} = props;

    const options = fetchOptions(type);

    return(
        <div className="options">
            {options.map((option, index)=>(
                <Option 
                    key = {index} 
                    img = {option.img} 
                    name={option.name} 
                    description = {option.description} 
                    price ={option.price}
                    order = {order}
                    setOrder = {setOrder}
                    type = {type}
                />
            ))}
        </div>
    );
}

function Option(props){   
    const {img, name, price, description, order, setOrder, type} = props;

    const [selectedOption, setSelectedOption] = React.useState("");   
    const [amount, setAmount]  = React.useState(0);  

    function reRenderOptions(order){
        const listItem = order.find((item)=>(item.name === name));
        if(listItem){
            if(selectedOption===""){
                setSelectedOption("selectedOption")
                setAmount(listItem.amount)
            }
        }
    }

    if(order.length !== 0){
        reRenderOptions(order);
    }

    function selectOption(){
        if(amount === 0){
            setAmount(1);
            setSelectedOption("selectedOption")   
            setOrder([...order, {
                type,
                name,
                price,
                amount: 1
            }]);
        }        
    }
    
    return (
        <button className={`option ${selectedOption}`} onClick={selectOption}>
            <img src={img}></img>
            <h1 className="product-name">{name}</h1>
            <p className="product-description">{description}</p>
            <p className="product-price">{price}</p>
            <ItemCounter
                amount = {amount}
                setAmount = {setAmount}
                setSelectedOption = {setSelectedOption}
                order = {order}
                setOrder = {setOrder}
                item = {props}
            />
        </button>
    );
}

function ItemCounter(props){ 
    const {amount, setAmount, setSelectedOption, order, setOrder} = props;

    const indexSelectedItem = order.indexOf(order.find((item)=> item.name === props.item.name))

    function decrease(amount){   

        if (amount === 1) {
            setSelectedOption("");
            order.splice(indexSelectedItem, 1);
        }
        
        setAmount(amount-1)
        order.map((item, index)=>{
            if(index === indexSelectedItem){
                item.amount = amount -1;
            }
            
        });
        setOrder([...order]);
    }

    function increase(amount){
        setAmount(amount + 1);
    
        order.map((item, index)=>{
            if(index === indexSelectedItem){
                item.amount = amount + 1;
            }
        });
        setOrder([...order]);   
    }

    return(
        <p className="item-counter">
            <span onClick={() => decrease(amount)} style={{color:'red'}}>-</span>
            {` ${amount} `}
            <span onClick={() => increase(amount)} style={{color:'green'}}>+</span>
        </p>
    )
}