import React from "react";

export default function BottomBar(props){
    const [btnState, setBtnState] = React.useState("");
    const [btnText, setBtnText] = React.useState("Selecione os 3 itens para fechar o pedido");
    const order = props.order;

    const theresMainCourseOrder = (order.filter((item)=>(item.type === "mainCourse")).length);
    const theresDrinkOrder = (order.filter((item)=>(item.type === "drink")).length);
    const theresDessertOrder = (order.filter((item)=>(item.type === "dessert")).length);
    
    if(theresMainCourseOrder && theresDrinkOrder && theresDessertOrder) enableBtn();
    else disableBtn();    
    
    function enableBtn(){
        if(btnState === "") {
            setBtnState("enabled");
            setBtnText("Fechar pedido")
        }
    }    

    function disableBtn(){
        if(btnState === "enabled") {
            setBtnState("");
            setBtnText("Selecione os 3 itens para fechar o pedido")
        }
    }    

    return(
        <div className="bottom-bar">
            <button className={`order-buttom ${btnState}`}>{btnText}</button>
        </div>
    );
}