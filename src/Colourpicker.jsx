import { useState } from "react";



import "./style.css";
import "./App.css";

export default function Colorpicker(){
    const [color, setcolor] = useState('white');



return (

    <>
    <div>


<div className="container" style={{backgroundColor:color,  padding:"80px" , border:"2px solid black"}}>
<select onChange={(e)=>setcolor(e.target.value)}>
            <option value="white">White</option>
            <option value="purple">purple</option>

            <option value="pink">pink</option>

            <option value="violet">violet</option> 

            <option value="yellow">yellow</option>

        </select>
</div>
<br />

       
    </div>
    
    </>


    
)

}