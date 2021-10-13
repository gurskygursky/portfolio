import './App.css';
import {Header} from "./components/Header/Header";
import {About} from "./components/About/About";
import {Projects} from "./components/Projects/Projects";
import {Skills} from "./components/Skills/Skills";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";


function App() {
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

export default App;
