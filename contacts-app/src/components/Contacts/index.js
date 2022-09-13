import React from 'react'
import { useState,useEffect } from 'react'

import List from './List'
import Form2 from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullName: 'John Doe',
            phoneNumber: '123-456-7890',
        },
        {
            fullName: 'ayşe Doe2',
            phoneNumber: '12gfg3-456-7890',
        },
        {
            fullName: 'derya Doe3',
            phoneNumber: '12gfg3-456-7890',
        },
        {
            fullName: 'didem Doe3',
            phoneNumber: '12gfg3-456-7890',
        },
        {
            fullName: 'aslı Doe3',
            phoneNumber: '12gfg3-456-7890',
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    },[contacts])

  return (
    <div>
        Contacts
        <List contacts={contacts} />
        <Form2 addContact={setContacts} contacts={contacts} />
    </div>
    
  )
}

export default Contacts