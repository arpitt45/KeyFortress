import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({site:"",username:"", password:""})
    const [passwordArray, setpasswordArray] = useState([])
  
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        let passwordArray;
        if(passwords){
           setpasswordArray(JSON.parse(passwords))
        }
    }, [])
    


   const showPassword = () =>{
     alert("show the password");
     if(ref.current.src.includes("icons/eye-crossed.png")){
         ref.current.src = "icons/visibility.png"
     }
     else{
        ref.current.src = "icons/eye-crossed.png"
     }
   }

   const savePassword = () =>{
    setpasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log(passwordArray)
    
   }

   const handleForm = (e) =>{
      setform({...form, [e.target.name]: e.target.value})
   }



  return (
    <div>
      <div className="relative h-full w-full bg-slate-50">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="mycontainer bg-slate-50">
          <h1 className="text-4xl font-bold text-center">
            <span className="text-yellow-400">&lt;</span>
            Key<span className="text-yellow-400">Fortress/ &gt;</span>
          </h1>
          <p className="text-slate-950 text-lg text-center">
            Your own Password Manager
          </p>
        </div>
      </div>
      <div className=" mycontainer w-1/2 -mt-4 flex flex-col p-4 text-black gap-6 items-center">

        <input onChange={handleForm}
          className="rounded-full border border-yellow-400  p-80 py-1" name="site"
          type="text" placeholder="Enter website URL"
           value={form.site}
        />

        <div className="flex w-full justify-between gap-6">

          <input onChange={handleForm}
            className="rounded-full border border-yellow-400 p-24 py-1"
            type="text"
            name="username"
            id="" placeholder="Enter Username"
              value={form.username}
          />

          <div className="relative">
          <input  onChange={handleForm}
            className="rounded-full border border-yellow-400 p-24 py-1"
            type="text"
            name="password"
            id="" placeholder="Enter Password" value={form.password}
 
          />
          <span className="absolute right-1 top-0 " onClick={showPassword}>
          <img ref={ref} width={36} src="icons/visibility.png" alt="eye" className="p-2" />
          </span>
          </div>

        </div>
        <button onClick={savePassword} className="flex justify-center items-center bg-yellow-400 hover:bg-yellow-200 rounded-full px-4 py-2 w-fit gap-2 border-2 border-slate-500 font-semibold">
        <lord-icon
          src="https://cdn.lordicon.com/jgnvfzqg.json"
          trigger="hover"
          style={{color:"white"}}
        ></lord-icon>
         Add Password</button>
      </div>

      <div className="passwords mycontainer">
        
       

<div className="relative overflow-x-auto container px-460 py-16 mx-auto -m-20 mr-40">
        <h2 className="font-bold text-2xl py-3 gap-4">Your Passwords</h2>
        {passwordArray.length === 0 && <div>No passwords to show</div> }

         {passwordArray.length !=0 &&<table className="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400 rounded-xl overflow-hidden">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-950 dark:text-yellow-300">
            <tr>
                <th scope="col" className="px-6 py-3">
                    SITE
                </th>
                <th scope="col" className="px-6 py-3">
                   USERNAME
                </th>
                <th scope="col" className="px-6 py-3">
                    PASSWORD
                </th>
            
            </tr>
        </thead>
        <tbody>
            {passwordArray.map((item, index)=>{
         return <tr key={index} className="bg-white border-b dark:bg-slate-600 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   <a href={item.site} target="_blank">{item.site}</a> 
                </th>
                <td className="px-6 py-4">
                   {item.username}
                </td>
                <td className="px-6 py-4">
                    {item.password}
                </td>   
            </tr>
          })}
        </tbody>
    </table> }
</div>


      </div>

    </div>
  );
};

export default Manager;
