import React, { useEffect, useState } from 'react'
import CreatenewissuePage from './CreatenewissuePage'
// import HomedetailPage from './HomedetailPage'

const HomePage = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchData();
      },[])

    const fetchData = () => {

      return fetch("http://localhost:8080/tasks")
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }

    const Edit = () => {
          
    }

    const Delete = () => {

    }

    return (
        <div>

            <h3>homepage</h3>
            <div className="Divtodo">
                { todos.map((e) => (
                    <div className='mapDiv'>
                        <span>Title: {e.title}</span>,
                        <span> desccription: {e.desccription}</span>
                        <button onClick={Edit} >edit</button>
                        <button onClick={Delete}>delete</button> 
                    </div>
                    
                ))}
            </div>
           
        </div>
    )
}

export default HomePage
