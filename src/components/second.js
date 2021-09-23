import React,{useState}from 'react'
import pic from './id.jpg'
const App = () => {
 const [ counter, setCounter ] = useState(0)
 const [ flag, setFlag] = useState(0)
 const increaseByOne = () => setCounter(counter + 1)
 const decreaseByOne = () => setCounter(counter - 1)
 const flagto0=()=>{setFlag(flag-1)}
 const flagto1=()=>{setFlag(flag+1)}
 const card = {
 position: "relative",
 width: "250px",
 border: '2px solid black',
 margin: 'auto',
 color: 'black',
 fontStyle: 'bold',
 fontSize: 18
 }
 if(flag===1){
 return(
 <div style={card}>
 <div>{counter}</div>
 <button style={{backgroundColor :
"cyan"}}onClick={increaseByOne}>increment</button>
 <button style = {{backgroundColor:"pink"}}onClick={decreaseByOne}>decrement
</button>
 <button onClick= {flagto0}>return to mainpage</button>
 </div>
 )
}
 else{
 return (
 <div style={card}>
 <center>
 <img src={pic} alt="ProfilePicture" width='200'></img>
 <h1 style={{color :"forestgreen"}}>V Charan Sai</h1>
 <p>Front end developer</p>
 <p style={{color: "blue"}}>CSE department</p>
 <p>Kl University</p>
 <p>From Vijayawada</p>
 <button onClick={flagto1}>Counter</button>
 </center>
 </div>
 )
 }
}
export default App