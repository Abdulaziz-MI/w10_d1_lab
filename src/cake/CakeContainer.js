import { useState } from "react";
import Cake from "./Cake.js";
import cakes from "../cakes.js";
import CakeList from "./CakeList.js"
import CakeForm from "./CakeForm.js";
const CakeContainer = () => {

const [listOfCakes, setListOfCakes] = useState(cakes)
console.log(listOfCakes);
  return (<>
    <div className="cakes-container">
        <CakeList />
    </div>

	<CakeForm listOfCakes={listOfCakes} setListOfCakes={setListOfCakes} />
	</>)
}

export default CakeContainer;