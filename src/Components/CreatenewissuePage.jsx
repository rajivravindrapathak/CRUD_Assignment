import React from 'react'
import { Link } from 'react-router-dom'

const CreatenewissuePage = () => {
    return (
        <div className='container'>
            <input placeholder='title' /><br />
            <textarea placeholder='description' /><br />
            <button className='saveButton'><Link>save</Link></button>
        </div>
    )
}

export default CreatenewissuePage
