import { useState } from "react"
import { Button } from '@material-ui/core'
import axios from 'axios'
import './fourth.css';

const s1={
  width:'1000px',
  margin:'auto',
  textAlign:'center',
  
}
const s2={
  margin:20
}
const Disp_Agent =({agents})=>{
  if (agents !== null)
  {
    
    return(
      <section class="container">
      <div>
      <img src={agents.data[0].displayIcon}alt="Avator" width = '100'/>
      <span class="description">{ agents.data[0].displayName}</span>
      </div>
      <div>
      <img src={agents.data[1].displayIcon}alt="Avator" width = '100'/>
      <span class="description">{ agents.data[1].displayName}</span>
      </div>
      <div>
      <img src={agents.data[2].displayIcon}alt="Avator" width = '100'/>
      <span class="description">{ agents.data[2].displayName}</span>
      </div>
      <div>
      <img src={agents.data[3].displayIcon}alt="Avator" width = '100'/>
      <span class="description">{ agents.data[3].displayName}</span>
      </div>
      <div>
      <img src={agents.data[4].displayIcon}alt="Avator" width = '100'/>
      <span class="description">{ agents.data[4].displayName}</span>
      </div>
      <div>
      <img src={agents.data[5].displayIcon}alt="Avator" width = '100'/>
      <span class="description">{ agents.data[5].displayName}</span>
      </div>
      
      </section>
    )
  }
  else{
    return(
      <div>
        <p> Click agent button to fetch the data and display
        </p>
      </div>
    )
  }
}
const Disp_weapons =({weapons})=>{
  if (weapons !== null)
  {
    return(
      <section class="container">
      <div>
      <span class="description">{ weapons.data[0].displayName}</span>
      <img src={weapons.data[0].displayIcon}alt="Avator" width = '100'/>
      </div>
      <div>
      <span class="description">{ weapons.data[1].displayName}</span>
      <img src={weapons.data[1].displayIcon}alt="Avator" width = '100'/>
      </div>
      <div>
      <span class="description">{ weapons.data[2].displayName}</span>
      <img src={weapons.data[2].displayIcon}alt="Avator" width = '100'/>
      </div>
      <div>
      <span class="description">{ weapons.data[3].displayName}</span>
      <img src={weapons.data[3].displayIcon}alt="Avator" width = '100'/>
      </div>
      <div>
      <span class="description">{ weapons.data[4].displayName}</span>
      <img src={weapons.data[4].displayIcon}alt="Avator" width = '100'/>
      </div>
      <div>
      <span class="description">{ weapons.data[5].displayName}</span>
      <img src={weapons.data[5].displayIcon}alt="Avator" width = '100'/>
      </div>
      
      </section>
    )
  }
  else{
    return(
      <div>
        <p> Click weapons button to fetch the data and display
        </p>
      </div>
    )
  }
}





const App=()=>{
  const[nav,setNav]=useState("")
  const[agents,setAgents]=useState(null)
  const[weapons,setWeapons]=useState(null)
  const changeView=(val)=> {
    setNav(val);
  }
  const getAgents=()=>{
    axios.get('https://valorant-api.com/v1/agents/')
    .then(res=>{
      setAgents(res.data);
    })
  }
  const getWeapons=()=>{
    axios.get('https://valorant-api.com/v1/weapons/')
    .then(res=>{
      setWeapons(res.data);
    })
  }

  


  if(nav==='Agents')
  {
    getAgents();
  }
  if(nav==='Weapons')
  {
    getWeapons();
  }
  return(
    <div style={s1}>
      <div>
        <Button style={s2} variant="outlined" colour="secondary"onClick ={()=> changeView("Agents")}> Agents </Button>
        <Button style={s2} variant="outlined" colour="secondary"onClick ={()=> changeView("Weapons")}> Weapons </Button>
      </div>
      <p>welcome to API Data Fetching</p>
      
      <Disp_Agent agents = {agents} />
      <Disp_weapons weapons = {weapons}/>
    </div>
  )
}
export default App