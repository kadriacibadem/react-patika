import {useState} from 'react'
import Form from 'react-bootstrap/Form';

function List({contacts}) {

    const [filterText, setFilterText] = useState("");

    const filtedContacts = contacts.filter(contact => {
        return (contact.fullName.toLowerCase().includes(filterText.toLowerCase()) || contact.phoneNumber.toLowerCase().includes(filterText.toLowerCase()))
    });
    
  return (
    <div>

        <input name="filter" placeholder="Filter Contact" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>

        <Form.Control type="password" placeholder="Password" />


        <ul>
            {filtedContacts.map((contact,index) => (
                <li key={index}>{contact.fullName} ({contact.phoneNumber})</li> 
                ))}

        </ul>
    </div>
  )
}

export default List