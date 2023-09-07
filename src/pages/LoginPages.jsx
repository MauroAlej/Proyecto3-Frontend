import React, { useEffect, useState } from 'react'

const LoginPages = () => {

const [formInput,setFormsInput]= useState({

    user:"",
    pass:""
})
const [userInput,setUserInput]=useState(false)
const[passInput,setPassInput]=useState(false)

const handleChangue = (ev)=>{
setFormsInput({...formInput,[ev.target.name]: ev.target.value})
if (formInput.user) {
    setUserInput(false)
  }else if(formInput.pass){
    setUserInput(false)
  }
}  

const handleClik = (ev)=>{
ev.preventDefault()
if (formInput.user) {
    if (formInput.pass) {
       setUserInput(false)
       setPassInput(false)
       
    }
    
    
    
}else{
    setUserInput(true)
    setPassInput(true)
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
  <button type="submit" className="btn btn-primary"  onClick={handleClik}>iniciar secion</button>
  <a className='ms-3'>recuperar contraseña</a>

</form>

</div>
<div className='container  d-flex justify-content-center'  >
<div className=' mt-5'> 
<img src="/public/Gmail_29991.ico" alt=""  className='gmil-a'/>
</div>
<div className=' mt-5 ms-5'> 
<img src="/public/facebook.png" alt=""  className='gmil-a'/>
</div>
</div>
    </>
  )
}

export default LoginPages