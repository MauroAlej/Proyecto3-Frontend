import React, { useEffect, useState } from 'react'

const RegisterPage = () => {
 

const [formInput,setFormInput]= useState({
name:"",
user:"",
pass:"",
reppas:""
})
const [formname,setFormname]= useState()
    const [pass,setFormPass]= useState()
        const [reppas,setFormRepppas]= useState()
            const [user,setFormUser]= useState()

const handleChange = (ev)=>{
    setFormInput({...formInput,[ev.target.name]: ev.target.value})
if (formInput.name) {
if (formInput.usuario) {
}if (formInput.pass) {
}if (formInput.reppas)
 {
    setFormname(false)
    setFormPass(false)
    setFormRepppas(false)
   setFormUser(false)
}

}}

const handleClick =(ev)=>{
ev.preventDefault()
if (formInput.name) {
    if (formInput.usuario) {
    }if (formInput.pass) {
    }if (formInput.reppas)
     {
        setFormname(false)
        setFormPass(false)
        setFormRepppas(false)
       setFormUser(false)
    }
    
    }else{
        setFormname(true)
        setFormPass(true)
        setFormRepppas(true)
       setFormUser(true) 
    }

}
useEffect(()=>{
console.log(formInput);

},[formInput])

    return (




        <body  className='body-className'>
        
        
            
       
        <div className='justify-content-center d-flex'>
        <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">nombre</label>
          <input type="email" name='name' className={formname? "form-control is-invalid": "form-control"} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
         
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">usuario</label>
          <input type="email"  name='user' className={user? "form-control is-invalid": "form-control"}  id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={handleChange}/>
          
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">contraseña</label>
          <input type="password" name='pass' className={pass? "form-control is-invalid": "form-control"}  id="exampleInputPassword1" onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">repetir contraseña</label>
          <input type="password" name='reppas' className={reppas? "form-control is-invalid": "form-control"}  id="exampleInputPassword1" onChange={handleChange}/>
        </div>
        
        <button type="submit" className= "btn btn-primary" onClick={handleClick}>registrarse</button>
        
      </form>
    
        </div>
      
        
        </body>
      )
 
}

export default RegisterPage