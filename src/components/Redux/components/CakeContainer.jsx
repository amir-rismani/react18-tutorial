import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer() {
    const [cakesNumber, setCakesNumber] = useState(0)
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of Cakes: {state.numOfCakes}</h1>
            <input type="number" value={cakesNumber} onChange={ev => setCakesNumber(ev.target.value)} />
            <button onClick={() => dispatch(buyCake(cakesNumber))}>Buy Cake</button>
        </div>
    )
}

export default CakeContainer