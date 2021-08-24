import Options from "./Options";

export default function Content(){
    return(
        <div className="content">
            <div className="main-course">
                <h1 className="section-title">Primeiro seu prato</h1>
                <Options type="mainCourse" />
            </div>

            <div className="drink">
                <h1 className="section-title">Agora, sua bebida</h1>
                <Options type="drink"/>
            </div>

            <div className="dessert">
                <h1 className="section-title">Por fim, sua sobremesa</h1>
                <Options type="dessert"/>
            </div>
        </div>
    );
}