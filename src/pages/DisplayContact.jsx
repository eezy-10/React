
export default function DisplayContact({contacts}){
    return(<div>
        {contacts.length === 0 ? (
            <p>No Contacts Available</p>
        ): (
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>Name: {contact.name}, Contact:{contact.number}</li>
                ))}
            </ul>
        )}
    </div>);
}