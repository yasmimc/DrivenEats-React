import React from "react";

export default function BottomBar(props) {
	const [btnState, setBtnState] = React.useState("");
	const [btnText, setBtnText] = React.useState("Selecione os 3 itens para fechar o pedido");

	const order = props.order;

	const theresMainCourseOrder = (order.filter((item) => (item.type === "mainCourse")).length);
	const theresDrinkOrder = (order.filter((item) => (item.type === "drink")).length);
	const theresDessertOrder = (order.filter((item) => (item.type === "dessert")).length);

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
			executeOrder();
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

function executeOrder() {

	const whatsappNumber = "553184146801";
	const whatsappMsg = `
	Olá, gostaria de fazer o pedido:\n
	- Prato: \n
	- Bebida: \n
	- Sobremesa: \n
	Total: ;
	`;
	window.open("https://wa.me/"+ whatsappNumber+"?text="+whatsappMsg);    
}