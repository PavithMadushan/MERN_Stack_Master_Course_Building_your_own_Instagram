import React from "react";
import NavBar from "./components/Navbar";
import "./App.css";
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./components/screens/Home";
import Signup from "./components/screens/Signup";
import Signin from "./components/screens/Login";
import Profile from "./components/screens/Profile";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>

    <Route exact path="/">
      <Home/>
    </Route>

    <Route path="/signin">
      <Signin/>
    </Route>

    <Route path="/signup">
      <Signup/>
    </Route>

    <Route path="/profile">
      <Profile/>
    </Route> 

{/* <Route>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<NoPage />} />
        </Route>
      </Route> */}
    
    </BrowserRouter>
  );
}

export default App;
