import React from 'react'
import {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


function Form2({addContact,contacts}) {

    const [form, setForm] = useState({fullName: "", phoneNumber:""});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullName.trim() && form.phoneNumber.trim()) {
            addContact([...contacts, form]);
            
        }
    }

    useEffect(() => {
        setForm({fullName: "", phoneNumber:""});
    },[contacts])


  return (
   /*  <form onSubmit={onSubmit}>
        <div>
            <input name="fullName" placeholder="Fullname" onChange={onChangeInput} value={form.fullName} />
        </div>

        <div>
            <input name="phoneNumber" placeholder="Phone Number" onChange={onChangeInput} value={form.phoneNumber}/>
        </div>


        <div>
            <Button as="a" variant="primary">Add</Button>
        </div>

    </form> */

    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Fullname" name="fullName" onChange={onChangeInput} value={form.fullName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Password" 
            name="phoneNumber" onChange={onChangeInput} value={form.phoneNumber}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ekle
      </Button>
    </Form>
  )
}

export default Form2