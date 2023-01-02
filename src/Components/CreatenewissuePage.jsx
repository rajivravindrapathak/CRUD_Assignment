import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CreatenewissuePage = () => {

    const [data, setData] = useState([])
    const [text, setText] = useState([])
    // console.log(data)
    // console.log(text)

    return (
        <div className='container'>
            <h3>create issue page</h3>
            <input type='text' placeholder='title' onChange={(e) => {
                setData(e.target.value)
            }}  /><br />
            <textarea placeholder='description' onChange={(e) => {
                setText(e.target.value)
            }} /><br />
            <button className='saveButton' 
            onClick={() => {
                fetch("http://localhost:8080/tasks", {
                    method: "POST",
                    body: JSON.stringify({ title: data, desccription: text }),
                    headers: {
                        "content-type": "application/json"
                    },
                })
                // alert('hi')
            }} 
            > <Link to="/homepage" id='sav'>save</Link></button> 
        </div>
    )
}

export default CreatenewissuePage
