import { useUser } from "../../Context/UserContext";

const Greeting = () => {
    const { user } = useUser()
    return <p>You logged in as {user.name}.</p>;
}

export default Greeting;