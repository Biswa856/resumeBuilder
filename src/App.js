
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import{Provider}from 'react-redux'
import store from './store';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Workexp from './Pages/Workexp';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Summary from './Pages/Summary';
import Finalpage from './Pages/Finalpage';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Layout>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contactinfo" element={<Contact/>}/>
        <Route path= "/education" element={<Education/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/summary" element={<Summary/>}/>
        <Route path="/workexp" element ={<Workexp/>}/>
        <Route path="/finalpage" element={<Finalpage/>}/>
        </Routes>
      </Layout>
      </Provider>
    </Router>
  );
}

export default App;
