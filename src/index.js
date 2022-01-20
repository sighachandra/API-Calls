import { render } from "react-dom";
import App from "./AppWithRouter";
import Expenses from "./Expenses";
import Invoices from "./Invoices";
import SantaMonica from "./SantaMonica"
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
const rootElement = document.getElementById("root");


const User = (props) => {
  let { userId } = useParams();
  const[backItemsName, setBackItemsName] = useState([]);
  const[backItemsEmail, setBackItemsEmail] = useState([]);
  useEffect(()=>{
    console.log('userId updated', userId);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // componentThisref.setState({ todos: this.responseText });
          const parsedResponseObj = JSON.parse(this.responseText);
          // const todosIdArray = parsedResponseObj.map((item) => item.name);
          setBackItemsName(parsedResponseObj.name);
          setBackItemsEmail(parsedResponseObj.email);
           console.log('parsedResponseObj:', parsedResponseObj);
          console.log(parsedResponseObj.name);
        }
      };
      xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/"+userId, true);
      xhttp.send();
  },[userId])

  return <div>
    <ul>
      <li>{backItemsName}</li>
      <li>{backItemsEmail}</li>
    </ul>
  </div>

};


render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path="1" element={<SantaMonica />} />

        </Route>
        <Route path="user" element={<Invoices />}>
          <Route path=":userId" element={<User />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);


