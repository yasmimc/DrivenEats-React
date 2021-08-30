import React from "react";
import Options from "./Options";

export default function Content(props){    
    const {order, setOrder} = props;

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