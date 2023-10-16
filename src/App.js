import logo from './logo.svg';
import './App.css';
import {useState, useCallback, useEffect, useRef} from 'react'


function App() {

  const [length, setLength] = useState(8);
  const [numerallow, setnumberAllow] = useState(false);
  const [charallow, setcharAllow] = useState(false);
  const [password, setPassword]= useState ();
   

  // useref
   const passwordref = useRef(null);

   const passwordGenerator =useCallback (()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy" 

     if (numerallow) str += "0123456789"
     if (charallow) str += "!@#$^&*-_+=[]{}~`"
     
     for (let i = 1; i  <=length;  i++){
      // const element = array [i];
      let char =Math.floor (Math.random() * str.length +1)
      pass += str.charAt(char)
      }
     
      setPassword(pass)
      
   },
    [length, numerallow, charallow, setPassword]) 

     const copypasseord = useCallback (()=>{
      passwordref.current?.select()
      // passwordref.current?.setSelectionRange(0, 10);
       window.navigator.clipboard.writeText(password)
     },[password])
  
     useEffect (()=>{
      passwordGenerator()
     }, [length, numerallow, charallow, passwordGenerator])
  return (
   <>
        <div className="container">
            <div className="row">
               <div className="col-12">
                 <h1 className='text-center my-5'>Password Generator</h1>

                  <div className="mainbox p-4">
                       <div className="formbox p-4">
                   <input type="text" value={password}  name="" className='form-control' placeholder='password' readOnly  ref={passwordref}/>
                      <button className='btn btn-dark' onClick={copypasseord}>copy</button>
                       </div>

                        <div className="butumbox">
                           <input type="range" min={6}
                            max={100}
                            value={length}
                            className=''
                            onChange={(e)=> {setLength(e.target.value)}}
                           />
                           <label htmlFor="">length :{length}</label>

                          
                        </div>

                        <div className='flex'>
                        <input type="checkbox" 
                            defaultChecked={numerallow}
                            value={length}
                            id='numberinput'
                            className=''
                            onChange={()=> {setnumberAllow((prev) =>!prev);
                            }}
                           />
                           <label htmlFor="">number</label>

                        </div>
                        <div className='flex'>
                        <input type="checkbox" 
                            defaultChecked={charallow}
                            value={length}
                            id='charinput'
                            className=''
                            onChange={()=> {setcharAllow((prev) =>!prev);
                            }}
                           />
                           <label htmlFor="">charector</label>

                        </div>
                  </div>
               </div>
            </div>
        </div>

  
   </>
  );
}

export default App;
