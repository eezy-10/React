// import { useState } from "react";

// export default function BookCard({ title, author, year }) {
//     const [count, setcount] = useState(0);
//     const [likes, setlikes] = useState(0);
//     return(
//         <div>
//             <button onClick={()=>setcount(count+1)}>Increase</button>
//             <button onClick={()=>setcount(count-1)}>Decrease</button>
//             <button onClick={()=>setlikes(likes+1)}>Likes {likes}</button>
//             <h3>Counter is {count}</h3>
//             <h2>Book Title: {title}</h2>
//             <h3>Author: {author}</h3>
//             <h3>Published Year: {year}</h3>
//         </div>
//     )
// }

export default function BookList(){
    let books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
        { title: "To Kill a Mockingbird", author: "Harper Lee"},
        { title: "1984", author: "George Orwell"},
        { title: "Pride and Prejudice", author: "Jane Austen"}
    ];

    return(
        books.length > 0 ? (
            <div>
                <h2>Books List</h2>
                <ul>
                    {books.map((book, index) => (
                        <li key={index}>Title: {book.title}, Author: {book.author}</li>
                    ))}
                </ul>
                <p>Total books: {books.length}</p>
            </div>
        ) : (
            <div>
                <p>No Books found.</p>
            </div>
        )
    );
}