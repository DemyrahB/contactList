import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import App from "../App"
import ContactRow from "./ContactRow"

function SelectedContact({selectedContactId, setSelectedContactId}) {
   const [contact, setContact] = useState(selectedContactId)
   useEffect(()=>{
    async function selectedContacts() {
        try{
            const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const result = await response.json()
            console.log(result)
            return setContact(result)
        } catch (error) {
            console.error(error);
        }
    }
    selectedContacts()
}, [])
    return  (
        <>
        <table>
            <thead>
                <tr onClick={()=>{
            setSelectedContactId(contact.id);
        }}>
                    <th>Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr> 
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                </tr>
                
            </tbody>
        </table>
        </>
    )
}
    

export default SelectedContact