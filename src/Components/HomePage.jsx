import React, { useState } from 'react'
import CreatenewissuePage from './CreatenewissuePage'
import HomedetailPage from './HomedetailPage'

const HomePage = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (data) => {
        const t = {
            id: 1,
            title: data,
            status: false
        }
        setTodos([...todos, t])
    }

    return (
        <div>
            <p>homepage</p>
            <div className="Divtodo">
                { todos.map((e) => (
                    <HomedetailPage todo={e} key={e.id}  />
                   
                ))}
            </div>
            <CreatenewissuePage handleAdd={ addTodo } />
        </div>
    )
}

export default HomePage
