import { Provider } from "react-redux"
import store from "./redux/store"
import CakeContainer from "./components/CakeContainer"
import MilkContainer from "./components/MilkContainer"

function ReactRedux() {
    return (
        <Provider store={store}>
            <CakeContainer />
            <MilkContainer />
        </Provider>
    )
}

export default ReactRedux