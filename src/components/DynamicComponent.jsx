import Tabs from './Tabs/Tabs';
import CourseList from './CourseList/CourseList';
import NoteContainer from './NoteContainer/NoteContainer';
import Accordion from './Accordion/Accordion';
import AccordionDepends from './AccordionDepends/AccordionDepends';
import ThemeMode from './ThemeMode/ThemeMode';
import MultiContext from './MultiContext/MultiContext';
import NoteCR from './NoteCR/NoteCR';
import ReactRouter from './ReactRouter/ReactRouter';
import ReactRedux from './Redux/ReactRedux';

const components = {
    tabs: Tabs,
    courses: CourseList,
    notes: NoteContainer,
    accordion: Accordion,
    accordion2: AccordionDepends,
    theme: ThemeMode,
    greeting: MultiContext,
    notecr: NoteCR,
    router: ReactRouter,
    redux: ReactRedux
}
const DynamicComponent = (props) => {
    const SelectedComponent = components[props.component.id]
    return (
        <>
            <h1>{props.component.title} Component</h1>
            <SelectedComponent />
        </>
    );
}

export default DynamicComponent;