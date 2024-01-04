import { useDispatch, useSelector } from "react-redux"
import { buyMilk } from "../redux/milk/milkActions";

function MilkContainer() {
    const { milk } = useSelector(state => state)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of Milks: {milk.numOfMilks}</h1>
            <button onClick={() => dispatch(buyMilk())}>Buy Milk</button>
        </div>
    )
}

export default MilkContainer