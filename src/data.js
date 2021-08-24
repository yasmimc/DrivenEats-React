export default function fetchOptions(props) {

    if(props.type === "mainCourse") {
        return MainCourseOptions();
    }    
    if (props.type === "drink"){
        return DrinkOptions();
    }
    if (props.type === "dessert"){
        return DessertOptions();
    }
}

function MainCourseOptions() {
    return ([
        {
            img: "assets/feijaovegano.png",
            name: "Tropeiro Vegano",
            description: "Mais gostoso que o de carne, vem sem preconceito",
            price: "R$ 14,90"
        },
        {
            img: "assets/burritos.jpg",
            name: "Burrito",
            description: "Escolha seu sabor, carne, frango, queijo ou soja!",
            price: "R$ 8,90"
        },
        {
            img: "assets/batata.png",
            name: "Batatas fritas",
            description: "1kg de batata com cheddar e bacon",
            price: "R$ 25,90"
        },
        {
            img: "assets/carbonara.jpg",
            name: "Espaguete à Carbonara",
            description: "Um clássico!",
            price: "R$ 10,00"
        }
    ]);
}

function DrinkOptions(){
    return ([
        {
            img: "assets/guaraná.jpg",
            name: "Guaraná Antártica",
            description: "Naná do naná do ludovico",
            price: "R$ 4,90"
        },
        {
            img: "assets/natu.jpg",
            name: "Guaraná Natu",
            description: "Natu do naná do ludovido",
            price: "R$ 9,90"
        },
        {
            img: "assets/guaraná-light.png",
            name: "Guarná Zero",
            description: "Naná do naná do ludovico fitness",
            price: "R$ 5,90"
        },
        {
            img: "assets/caipirinha.png",
            name: "Caipirinha",
            description: "Porque caipirinha também é coisa nossa!",
            price: "R$ 12,90"
        }
    ]);
}

function DessertOptions(){
    return ([
        {
            img: "assets/petit-gateau.jpg",
            name: "Petit Gateau",
            description: "A melhor sobremesa do mundo",
            price: "R$ 13,90"
        },
        {
            img: "assets/tiramissu.png",
            name: "Tiramissu",
            description: "Gostoso demais",
            price: "R$ 14,90"
        },
        {
            img: "assets/esfirra-doce.jpg",
            name: "Esfirra doce",
            description: "Sabor brigadeiro, M&M, coco ralado e chocolate ao leite",
            price: "R$ 4,90"
        },
        {
            img: "assets/pudim.jpg",
            name: "Pudim",
            description: "Clássico",
            price: "R$ 5,90"
        }
    ]);
}