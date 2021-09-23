import React,{useState} from "react";


export default function App(){
    const [checked,setChecked]=useState(false);

    return(
        <>
        <input type="checkbox"
        value={checked}
        onChange={()=>setChecked((checked=>!checked))}
        
        />
        <p>{checked ? "checked" : "not checked"}</p>
        
        </>
    );
}

