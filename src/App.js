import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

    return (
       
        <Router>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Routes>
                    <Route path='/profile' element={<Profile store={props.store} />} />
                    <Route path='/dialogs/*' element={<DialogsContainer store={props.store}messagesData={props.state.messagesData}
                        dialogsData={props.state.dialogsData} dispatch={props.dispatch}/>} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
