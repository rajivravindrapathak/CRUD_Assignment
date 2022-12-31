import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

const CreatenewissuePage = ({ handleAdd }) => {

    const [text, setText] = useState([])

    return (
        <div className='container'>
            <input type='text' placeholder='title' /><br />
            <textarea placeholder='description' onChange={(e) => {
                setText(e.target.value)
            }} /><br />
            <button className='saveButton' 
            onClick={() => {
                handleAdd(text)
                fetch("http://localhost:8080/tasks", {
                    method: "POST",
                    body: JSON.stringify({ title: text, purchased: false }),
                    headers: {
                        "content-type": "application/json"
                    },
                })
             }} 
            >save</button>
        </div>
    )
}

export default CreatenewissuePage
