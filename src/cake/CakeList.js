import Cake from "./Cake"
import cakes from "../cakes";

const CakeList = () => {
    const cakeComponent = cakes.map(( cake, index) => {
        return <Cake cake={cake} key={index} />
    });

    return(<div className=" cake-container"> {cakeComponent} </div>)
    
}

export default CakeList;