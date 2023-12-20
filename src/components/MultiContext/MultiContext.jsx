import Welcome from "./Panel/Welcome/Welcome";
import Providers from "./Providers/Providers";
import SwitchMode from "./SwitchMode/SwitchMode";

const MultiContext = () => {
    return (
        <Providers> 
            <div className="theme-mode">
                <Welcome />
                <SwitchMode />
            </div>
        </Providers>
    );
}

export default MultiContext;