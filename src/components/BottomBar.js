import React from "react";

import ConfirmationScreen from "./ConfirmationScreen";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

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
			setBtnText("Finalizar pedido");
		}
	}

	function disableBtn() {
		if (btnState === "enabled") {
			setBtnState("");
			setBtnText("Selecione os 3 itens para fechar o pedido");
		}
	}

	return (
		<Router>
			<div className="bottom-bar">
				<Link to="/revisar">
					<button className={`order-buttom ${btnState}`}>
						{btnText}
					</button>
				</Link>
			</div>
			<Switch>
				<Route path="/revisar">
					<ConfirmationScreen
						btnState = {btnState}
						order={order}
						mainCourseOrder = {mainCourseOrder}
						drinkOrder = {drinkOrder}
						dessertOrder = {dessertOrder}
					/>
				</Route>
			</Switch>
		</Router>
	);
}

