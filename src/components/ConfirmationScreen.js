import { Link } from "react-router-dom";
import { whatsappNumber } from "../data";

export default function ConfirmationScreen(props){
    const {order, mainCourseOrder, drinkOrder, dessertOrder} = props;

    function sendOrder() {                
        sendWppMsg(mainCourseOrder, drinkOrder, dessertOrder, calcTotalPrice(order));        
    } 

    return(
        <div className="confirmation-screen">
            <h1 className="section-title">Revise seu pedido</h1>
            <div className="confirmation-box"> 
                {order.map((item, index)=>(
                    <div key={index} className='item'> 
                    <p>  {item.name}{` ${item.amount > 1 ? `(${item.amount}x)` : ""}`}  </p> 
                    <p>  {calcTotalPricePerItem(item)}  </p> 
                </div> 
                ))}

                <div className='total'> 
                    <p>TOTAL</p> 
                    <p>  {calcTotalPrice(order)}  </p> 
                </div> 
                
            </div>
            <div className='buttons-container'> 
                    <button onClick={sendOrder} className='order' >Tudo certo, pode pedir!</button> 
                    <Link to = "/">
                        <button className='cancel' >Cancelar</button> 
                    </Link>
                </div>
        </div>
    );
}

function sendWppMsg(mainCourseOrder, drinkOrder, dessertOrder, totalPrice) {

	let whatsappMsg = `
	Olá, gostaria de fazer o pedido:
	- Prato: ${
		mainCourseOrder.map(item => ` ${item.name}${item.amount > 1 ? `(${item.amount}x)` : ""}`)
	}
	- Bebida: ${
		drinkOrder.map(item => ` ${item.name}${item.amount > 1 ? `(${item.amount}x)` : ""}`)
	}
	- Sobremesa: ${
		dessertOrder.map(item => ` ${item.name}${item.amount > 1 ? `(${item.amount}x)` : ""}`)
	}
	Total: ${totalPrice};
	`;

    whatsappMsg = whatsappMsg.replaceAll('	', '');
	
	whatsappMsg = encodeURIComponent(whatsappMsg);
	
	window.open("https://wa.me/"+ whatsappNumber+"?text="+whatsappMsg);    
}

function calcTotalPrice(order){
	let total = 0;
	order.map((item)=>{		
		const price = (Number(item.price.substring(3).replace(',', '.')));
		total = Number(total) + Number(price)*Number(item.amount);	
	})
	total = Number(total).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
	return total;
}

function calcTotalPricePerItem(item){
    const price = item.price.substring(3).replace(',', '.');
    let totalPrice = (Number(price)*item.amount);
    totalPrice = totalPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    return totalPrice;
}