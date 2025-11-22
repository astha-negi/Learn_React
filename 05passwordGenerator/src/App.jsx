import { useState, useCallback, useEffect, useRef} from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(7)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerate = useCallback(()=>{
    let pass= "";
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    } 
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length, numberAllow, charAllow, setPassword])  

  const copyPasswordtoClipboard = useCallback( ()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);

    },[passwordRef, password])

  useEffect( ()=>{
    passwordGenerate();
  },[length, numberAllow, charAllow, passwordGenerate])

  return (
  <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
        <input 
          type="text"
          value={password}
          readOnly
          className="w-full py-2 px-3 outline-none text-black"
          placeholder="Password"
          ref={passwordRef}
        />
        <button onClick={copyPasswordtoClipboard}
        className="bg-orange-500 text-white py-2 px-4 hover:bg-orange-600">
          Copy
        </button>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center'>
          <input type="range"
            min="7"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="length" className="text-orange">Length: {length}</label>
        </div>
        <div>
          <input 
            type="checkbox"
            id="number"
            checked={numberAllow}
            onChange={(e) => setNumberAllow(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="number" className="text-orange">Include Numbers</label>
        </div>
        <div className='flex items-center'>
          <input 
            type="checkbox"
            id="special"
            checked={charAllow}
            onChange={(e) => setCharAllow(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="special" className="text-orange">Include Special Characters</label>
        </div>
      </div>
    </div>
  </>
);

}

export default App
