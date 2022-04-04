import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.scss';

// import Header from './components/Header.jsx';
// import MainPanel from './components/MainPanel.jsx';
import Footer from './components/Footer.jsx';

import NavBar from './components/NavBar.jsx';
import Home from './components/Pages/Home.jsx';
import People from './components/Pages/People.jsx';
import Clients from './components/Pages/Clients.jsx';
import Students from './components/Pages/Students.jsx';
import Contact from './components/Pages/Contact.jsx';
import NoPage from './components/Pages/NoPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route index element={<Home/>}/>
            <Route path='people' element={<People/>}/>
            <Route path='clients' element={<Clients/>}/>
            <Route path='students' element={<Students/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>)
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));