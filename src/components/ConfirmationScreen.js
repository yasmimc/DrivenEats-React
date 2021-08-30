export default function ConfirmationScreen(props){
    const {btnState, order, mainCourseOrder, drinkOrder, dessertOrder} = props;

    function sendOrder() {
        if (btnState === "enabled") {            
            sendWppMsg(mainCourseOrder, drinkOrder, dessertOrder, calcTotalPrice(order));
        }
    }

    return(
        <div className="confirmation-screen">
            <div class="confirmation-box"> 
                <h1>Confirme seu pedido</h1>  
                {order.map(item=>(
                    <div class='item'> 
                    <p>  {item.name}  </p> 
                    <p>  {item.price}  </p> 
                </div> 
                ))}

                <div class='total'> 
                    <p>TOTAL</p> 
                    <p>  {calcTotalPrice(order)}  </p> 
                </div> 
                <div class='buttons-container'> 
                    <button onClick={sendOrder} class='order' >Tudo certo, pode pedir!</button> 
                    <button class='cancel' >Cancelar</button> 
                </div>
            </div>
        </div>
    );
}

function sendWppMsg(mainCourseOrder, drinkOrder, dessertOrder, totalPrice) {

	const whatsappNumber = "553184146801";
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
	Total: R$ ${totalPrice};
	`;
	
	whatsappMsg = encodeURIComponent(whatsappMsg);
	
	window.open("https://wa.me/"+ whatsappNumber+"?text="+whatsappMsg);    
}

function calcTotalPrice(order){
	let total = 0;
	order.map((item)=>{		
		const price = (Number(item.price.substring(3).replace(',', '.')))
		total = Number(total) + Number(price)		
	})
	total = Number(total).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
	return total;
}