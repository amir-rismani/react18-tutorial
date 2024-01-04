import { Provider } from "react-redux"
import store from "./redux/store"
import CakeContainer from "./components/CakeContainer"

function ReactRedux() {
    return (
        <Provider store={store}>
            <CakeContainer />
        </Provider>
    )
}

export default ReactRedux