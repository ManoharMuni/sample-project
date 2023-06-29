import React, { useState, useEffect} from 'react'
import './index.css'

function PasswordManager() {
    const [nameInput, setName] = useState("")
    const [mailInput, setMail] = useState("")
    const [passwordInput, setPassword] = useState("")
    const [listA, setList] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you added ${count} mails`
    })

    const updateName = event => {
            setName(event.target.value)
    }

    const updateMail = event => {
        setMail(event.target.value)
    }

    const updatePassword = event => {
        setPassword(event.target.value)
    }
    const addToList = event => {
            event.preventDefault()
            if (nameInput !== "" && mailInput !== "" && passwordInput !== "") {
                setList( [...listA, {
                    name:nameInput,
                    mail:mailInput,
                    password:passwordInput,
                    id:listA.length
                }])
                setCount(count+1)
            }
            console.log(listA)
    }

  return (
    <>
    <form className = "app-container">
        <div className='input-container'>
        <label htmlFor='name-input'>Name</label>
        <input type = "text" id = "name-input" value = {nameInput} onChange = {updateName}/>
        </div>
        <div className='input-container'>
        <label htmlFor='mail-input'>Mail</label>
        <input type = "text" id = "mail-input" value = {mailInput} onChange = {updateMail}/>
        </div>
        <div className='input-container'>
        <label htmlFor='password-input'>Password</label>
        <input type = "password" id = "password-input" value = {passwordInput} onChange = {updatePassword}/>
        </div>
        <button onClick={addToList} type = "button" class = "button">Add</button>
        <div>
        {listA.map(eachItem => (
            <div className = "card-container">
                <h1>{eachItem.name}</h1>
                <p>{eachItem.mail}</p>
                <p>{eachItem.password}</p>
            </div>
        ))}
    </div>
    </form>

    </>
  )
}

export default PasswordManager