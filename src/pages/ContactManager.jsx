import { useState } from "react";
import AddContact from "./AddContact";
import DisplayContact from "./DisplayContact";


export default function ContactManager(){
    const [Contact, setContact] = useState('');

    const addContact = (name, number) => {
        if(name && number) {
            setContact([...Contact, {name, number}]);
        }
        else alert("Fill all Values");
    }

    return(
        <div>
            <DisplayContact contacts={Contact}/>
            <AddContact addcontact={addContact} />
        </div>
    )
}