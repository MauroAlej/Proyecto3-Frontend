import React, { useEffect, useState } from 'react'

const LoginPages = () => {

const [formInput,setFormsInput]= useState({

    user:"",
    pass:"",
    rPass:""
})
const [userInput,setUserInput]=useState(false)
const[passInput,setPassInput]=useState(false)
const [rpassInput ,setRpassInput] = useState(false)
const handleChangue = (ev)=>{
setFormsInput({...formInput,[ev.target.name]: ev.target.value})
if (formInput.user) {
    setUserInput(false)
  }else if(formInput.pass){
    setUserInput(false)
  }else if (formInput.rPass) {
    setRpassInput(false)
  }
}  

const handleClik = (ev)=>{
ev.preventDefault()
if (formInput.user) {
    if (formInput.pass) {
      if (formInput.rPass) {
        setUserInput(false)
        setPassInput(false)
        setRpassInput(false)
      }
       
    }
    
    
    
}else{
    setUserInput(true)
    setPassInput(true)
    setRpassInput(true)
  }

}




useEffect(()=>{
   console.log(formInput);
},[formInput])


  return (
  
    <>
   
   
    
    <div className='d-flex justify-content-center'>
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">usuario</label>
    <input type="email" className={userInput ? "form-control is-invalid": "form-control"} name='user'  onChange={handleChangue} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">contraseña</label>
    <input type="password" className={passInput ? "form-control is-invalid": "form-control"} name="pass" onChange={handleChangue} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"> repetir contraseña</label>
    <input type="password"  className={rpassInput ? "form-control is-invalid": "form-control"} name="pass" onChange={handleChangue} id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary"  onClick={handleClik}>iniciar secion</button>
  <a className='ms-3'>recuperar contraseña</a>

</form>

</div>
<div className='container  d-flex justify-content-center'  >
<div className=' mt-5'> 

<button className='paf-gmail'>continuar con gmail<img src="/public/Gmail_29991.ico" alt=""  className='gmil-a ms-1' /></button>
</div>
<div className=' mt-5 ms-5'> 

<button className='para-face'>continuar con facebook  <img src="/public/facebook.png"  alt="" className='gmil-a ms-1'/></button>
</div>
</div>


    </>
   

  )
}

export default LoginPages