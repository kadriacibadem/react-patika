import React from 'react'
import { useState } from 'react'

function InputExample() {
    const [form,setForm] = useState({name:"",surname:""})

    const changeName = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

  return (

    <div>
        Please enter a name <br />

        <input name='name' value={form.name} onChange={changeName} />
            <br></br>
        <input name='surname' value={form.surname} onChange={changeName} />

        <h2>{form.name} {form.surname}</h2>

    </div>
  )
}

export default InputExample