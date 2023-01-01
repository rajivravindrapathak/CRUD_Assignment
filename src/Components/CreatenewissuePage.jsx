import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CreatenewissuePage = () => {

    const [text, setText] = useState([])
    console.log(text)

    return (
        <div className='container'>
        <h1>create issue page</h1>
            {/* <input type='text' placeholder='title'  /><br /> */}
            <textarea placeholder='description' onChange={(e) => {
                setText(e.target.value)
            }} /><br />
            <button className='saveButton' 
            onClick={() => {
                // handleAdd(text)
                fetch("http://localhost:8080/tasks", {
                    method: "POST",
                    body: JSON.stringify({ title: text, purchased: false }),
                    headers: {
                        "content-type": "application/json"
                    },
                })
                alert('hi')
             }} 
            > <Link to="/homepage" id='sav'>save</Link></button> 
        </div>
    )
}

export default CreatenewissuePage
