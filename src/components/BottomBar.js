import React from "react";

export default function BottomBar(props) {
	const [btnState, setBtnState] = React.useState("");
	const [btnText, setBtnText] = React.useState("Selecione os 3 itens para fechar o pedido");

	const order = props.order;

	const mainCourseOrder = order.filter((item) => (item.type === "mainCourse"));
	const drinkOrder = order.filter((item) => (item.type === "drink"));
	const dessertOrder = order.filter((item) => (item.type === "dessert"));

	const theresMainCourseOrder = mainCourseOrder.length;
	const theresDrinkOrder = drinkOrder.length;
	const theresDessertOrder = dessertOrder.length;

	if (theresMainCourseOrder && theresDrinkOrder && theresDessertOrder) enableBtn();
	else disableBtn();

	function enableBtn() {
		if (btnState === "") {
			setBtnState("enabled");
			setBtnText("Fechar pedido");
		}
	}

	function disableBtn() {
		if (btnState === "enabled") {
			setBtnState("");
			setBtnText("Selecione os 3 itens para fechar o pedido");
		}
	}

	function sendOrder() {
		if (btnState === "enabled") {
			sendWppMsg(mainCourseOrder, drinkOrder, dessertOrder, calcTotalPrice(order));
		}
	}

	return (
		<div className="bottom-bar">
			<button onClick={sendOrder} className={`order-buttom ${btnState}`}>
				{btnText}
			</button>
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