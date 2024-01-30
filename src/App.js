import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div 
    className={`w-full h-full min-h-[100vh] 
  bg-white ${darkMode && "dark"}`}>
    <div
    className='dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]'
    >
      Home 
    </div>
    </div>
  );
}

export default App;
