import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ActionTypes, userAction} from "./types/user";
import UserComponent from "./components/UserComponent";


function App() {

  return (
    <div className="App">
        <UserComponent/>
    </div>
  );
}

export default App;
