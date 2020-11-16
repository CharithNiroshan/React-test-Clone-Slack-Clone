import React from "react";
import "./App.css";
import Header from "./Components/MainPage/Header/Header";
import Sidebar from "./Components/MainPage/Sidebar/Sidebar";
import Chat from "./Components/MainPage/ChatField/Chat";
import Login from "./Components/Login Page/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./Datalayerfiles/stateprovider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
