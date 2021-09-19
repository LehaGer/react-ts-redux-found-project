import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ActionTypes, userAction} from "./types/user";
import UserComponent from "./components/UserComponent";
import TaskComponent from "./components/taskComponent";


function App() {

  return (
    <div className="App">
        <UserComponent/>
        <hr/>
        <TaskComponent/>
    </div>
  );
}

export default App;
