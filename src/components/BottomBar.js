import React from "react";
import {
	Link
} from "react-router-dom";

export default function BottomBar(props) {
	const [btnState, setBtnState] = React.useState("");
	const [btnText, setBtnText] = React.useState("Selecione os 3 itens para fechar o pedido");

	const {mainCourseOrder, drinkOrder, dessertOrder} = props;

	const theresMainCourseOrder = mainCourseOrder.length;
	const theresDrinkOrder = drinkOrder.length;
	const theresDessertOrder = dessertOrder.length;

	if (theresMainCourseOrder && theresDrinkOrder && theresDessertOrder) enableBtn();
	else disableBtn();

	function enableBtn() {
		if (btnState === "") {
			setBtnState("enabled");
			setBtnText("Finalizar pedido");
		}
	}

	function disableBtn() {
		if (btnState === "enabled") {
			setBtnState("");
			setBtnText("Selecione os 3 itens para fechar o pedido");
		}
	}

	function changeBtnState (event){
		if (btnState === "") {
			event.preventDefault();
		}
	}

	return (	
		<div className="bottom-bar">
			<Link to="/revisar" onClick={(event)=>(changeBtnState(event))}>
				<button className={`order-buttom ${btnState}`}>
					{btnText}
				</button>
			</Link>
		</div>		
	);
}

