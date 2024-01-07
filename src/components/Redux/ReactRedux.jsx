import { Provider } from "react-redux"
import store from "./redux/store"
import CakeContainer from "./components/CakeContainer"
import MilkContainer from "./components/MilkContainer"
import UserList from "./components/UserList"

function ReactRedux() {
    return (
        <Provider store={store}>
            <CakeContainer />
            <MilkContainer />
            <UserList />
        </Provider>
    )
}

export default ReactRedux