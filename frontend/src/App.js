import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import LoginAdmin from "./containers/Login";
import "./App.css";
import Home from "./containers/Home/Home";
import Cabs from "./containers/Cabs/Cabs";

import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cabs" element={<Cabs />} />

            {/* <Route path="/login" element={<LoginAdmin />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
