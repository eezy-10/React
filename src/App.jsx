import BookCard from "./BookCard";
import UserCard from "./UserCard"
import InputCard from "./InputCard";

function App() {
  const appStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden'
  };

  return (
    <div style={appStyle}>
      <div>
        {/* <h1>React Prop Example</h1> */}
        <h1>Handling Input Change</h1>
        {/* <UserCard name = 'Irtaza Ahmad' age={22} city = 'Lahore'/> */}
        {/* <BookCard title='The Great Gatsby' author='F. Scott Fitzgerald' year={1925} /> */}
        <InputCard/>
      </div>
    </div>    
  );
}

export default App;
