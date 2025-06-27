import { useState } from "react";


export default function AddContact({ addcontact }){
    const [Name, setName] = useState('');
    const [Number, setNumber] = useState('');

    const setValue = (e) => {
        e.preventDefault();
        addcontact(Name, Number);
        setName('');
        setNumber('');
    }

    return(
        <div>
            <h2>Add Contact</h2>
            <form onSubmit={setValue}>
                <input type="text" 
                placeholder="Enter Name"
                value={Name}
                onChange={(e)=> setName(e.target.value)}/>
                <input type="text" 
                placeholder="03XX-XXXXXXX"
                value={Number}
                onChange={(e)=> setNumber(e.target.value)}/>
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
}