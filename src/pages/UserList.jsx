import { useEffect, useState } from "react";

export default function UserList() {
    const [loading, setloading] = useState(true);
    const [post, setpost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data)=>{
            setpost(data);
            setloading(false);
        })
        .catch((err)=>{setloading(false)});
    }, []);

    return(
        <div>
            <h2>User List</h2>
            {loading ? (
                <p>Loading Posts...</p>
            ):(
                <ul>
                    {post.map((p) => (
                        <li key={p.id}>Name: {p.name}, Email: {p.email}, City: {p.address.city}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}