import React from "react";
import Options from "./Options";

import fetchOptions from "../data";

export default function Content(){
    const [order, setOrder] = React.useState([])
    // console.log(order)

    const categories = [
        {
            name: "mainCourse",
            title: "Primeiro seu prato"
        },
        {
            name: "drink",
            title: "Agora, sua bebida",
        },
        {
            name: "dessert",
            title: "Por fim, sua sobremesa"
        }
    ];

    return(
        <div className="content">
            {categories.map((category, index)=> (
                <div key = {index}>
                    <h1 className="section-title">{category.title}</h1>
                    <Options 
                        order = {order} 
                        setOrder = {setOrder} 
                        type = {category.name} 
                    />
                </div>
            ))}
        </div>
    );
}