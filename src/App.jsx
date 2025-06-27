import BookCard from "./pages/BookCard";
import UserCard from "./pages/UserCard"
import InputCard from "./pages/InputCard";
import BookList from "./pages/BookCard";
import UserList from "./pages/UserList";
import ContactManager from "./pages/ContactManager";

function App() {
  const appStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={appStyle}>
      <div>
        {/* <h1>React Prop Example</h1> */}
        {/* <h1>Handling Input Change</h1> */}
        {/* <UserCard name = 'Irtaza Ahmad' age={22} city = 'Lahore'/> */}
        {/* <BookCard title='The Great Gatsby' author='F. Scott Fitzgerald' year={1925} /> */}
        {/* <InputCard/> */}
        {/* <h1>Rendering Data</h1>
        <BookList /> */}
        {/* <h1>Fetching User Data</h1>
        <UserList /> */}
        <ContactManager/>
      </div>
    </div>    
  );
}

export default App;
