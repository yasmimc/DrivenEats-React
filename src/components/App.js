import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import "../css/reset.css";
import "../css/style.css";

import TopBar from "./TopBar";
import Content from "./Content";
import BottomBar from "./BottomBar";
import ConfirmationScreen from "./ConfirmationScreen";


export default function App() {
    const [order, setOrder] = React.useState([]);

    const mainCourseOrder = order.filter((item) => (item.type === "mainCourse"));
	const drinkOrder = order.filter((item) => (item.type === "drink"));
	const dessertOrder = order.filter((item) => (item.type === "dessert"));

    return (
        <Router>
            <TopBar />
            <Switch>
                <Route path = "/" exact>
                    <Content order = {order} setOrder = {setOrder}/>
                    <BottomBar 
                        order = {order}
                        mainCourseOrder = {mainCourseOrder}
                        drinkOrder = {drinkOrder}
                        dessertOrder = {dessertOrder}
                    />
                </Route>
				<Route path="/revisar" exact>
					<ConfirmationScreen
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