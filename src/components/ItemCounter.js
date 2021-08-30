export default function ItemCounter(props){ 
    const {amount, setAmount, setSelectedOption, order, setOrder} = props;

    const indexSelectedItem = order.indexOf(order.find((item)=> item.name === props.item.name));

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
    );
}