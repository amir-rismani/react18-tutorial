import { useUser } from "../../Context/UserContext";
import Greeting from "../Greeting/Greeting";
import LoginForm from "../LoginForm/LoginForm";
import Panel from "../Panel";

const Welcome = () => {
    const { user } = useUser();
    return (
        <Panel title="Welcome">
            {user ? <Greeting /> : <LoginForm />}
        </Panel>
    );
}

export default Welcome;