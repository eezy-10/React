// import { useState } from "react";

// export default function inputExample(){
//     const [val, setVal] = useState("");

//     const 
//     return (
//         <div>
//             <h2>Input Example</h2>
//             <input type="text" placeholder="Type something..." />
//             <button onClick={() => setVal(e)}>Click Me</button>
//         </div>
//     );
// }
// import { useState } from "react";

// function InputExample() {
//   const [text, setText] = useState("");

//   const handleInputChange = (e) => {
//     setText(e.target.value); // get text from input box
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleInputChange} />
//       <p>You typed: {text}</p>
//     </div>
//   );
// }

// export default InputExample;
import { useState } from "react";

export default function InputCard() {
  const [message, setmessage] = useState("");
  const showMessage = () => {
    const inputValue = document.querySelector('#name').value;
    setmessage(inputValue ? `Hello ${inputValue}` : 'Hello Guest');
  };

  return (
    <div>
      <input id="name" type="text" placeholder="Your Name"/>
      <button onClick={showMessage}>Submit</button>
      <p>{message}</p>
    </div>
  );
}