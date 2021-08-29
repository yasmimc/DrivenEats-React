import React from "react";

import TopBar from "./TopBar";
import Content from "./Content";
import BottomBar from "./BottomBar";

import "../css/reset.css";
import "../css/style.css";

export default function App() {
    const [order, setOrder] = React.useState([])

    return (
        <div>
            <TopBar />
            <Content order = {order} setOrder = {setOrder}/>
            <BottomBar order = {order}/>
            <div className="confirmation-screen disabled"></div>
        </div>
    );
}