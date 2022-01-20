import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import getInvoices from "./Data";

export default function Invoices() {
  const[backItems, setBackItems] = useState([]);
  useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // componentThisref.setState({ todos: this.responseText });
          const parsedResponseObj = JSON.parse(this.responseText);
          const todosIdArray = parsedResponseObj.map((item) => item);
          setBackItems(todosIdArray);
           console.log('parsedResponseObj:', parsedResponseObj);
          console.log(todosIdArray);
        }
      };
      xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/", true);
      xhttp.send();
    
  }, []);
  let invoices = getInvoices();
  console.log('invoices:', invoices);
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {backItems.map(backItem => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/user/${backItem.id}`}
            key={backItem.id}
          >
            {backItem.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}