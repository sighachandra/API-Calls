import React, { useState, useEffect } from 'react';
export default function SantaMonica(){
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              // componentThisref.setState({ todos: this.responseText });
              const parsedResponseObj = JSON.parse(this.responseText);
              const todosTitlesArray = parsedResponseObj.map((item) => item.title);
              setTodos( todosTitlesArray);
               console.log('parsedResponseObj:', parsedResponseObj);
              console.log(todosTitlesArray);
            }
          };
          xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
          xhttp.send();
        
      }, []);
    return( <div>
        <h2>SANTA MONICA</h2>
        <div>
            <ul>
                {todos.map((newtodos) =><li>{newtodos}</li>)}
            </ul>
        </div>
    </div>);
   
}