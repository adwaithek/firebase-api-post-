import React, {useRef} from 'react';
import axios from 'axios'


function App() {

  const nameRef=useRef()
  const ageRef=useRef()
  const domainRef=useRef()


  const handleSubmit=(e)=>{
    e.preventDefault();
    const enteredNmae=nameRef.current.value;
    const enteredAge=ageRef.current.value;
    const enteredDomain=domainRef.current.value;

    const data={   
      name:enteredNmae,age:enteredAge,domain:enteredDomain
    }
    

    axios.post("https://api-post-a921a-default-rtdb.firebaseio.com/data.json",{
      body: JSON.stringify(data),
      header:{
        'Content-Type': 'application/json'
      }
    })

  }
 

return (


<form  className="app"  onSubmit={handleSubmit}  style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px",marginTop:"180px"}}>
<input type="text" placeholder='Enter your name' ref={nameRef}  />
<input type="text" placeholder='Enter your age' ref={ageRef} />
<input type="text" placeholder='Enter your doamain ' ref={domainRef}  />
<button type='submit'> Submit</button>
</form>


)
}

export default App