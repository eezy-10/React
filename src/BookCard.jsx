import { useState } from "react";

export default function BookCard({ title, author, year }) {
    const [count, setcount] = useState(0);
    const [likes, setlikes] = useState(0);
    return(
        <div>
            <button onClick={()=>setcount(count+1)}>Increase</button>
            <button onClick={()=>setcount(count-1)}>Decrease</button>
            <button onClick={()=>setlikes(likes+1)}>Likes {likes}</button>
            <h3>Counter is {count}</h3>
            <h2>Book Title: {title}</h2>
            <h3>Author: {author}</h3>
            <h3>Published Year: {year}</h3>
        </div>
    )
}
