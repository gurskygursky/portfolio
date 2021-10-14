import './App.css';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Projects} from "./components/projects/Projects";
import {Skills} from "./components/skills/Skills";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";


export const App = () => {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    );
}
