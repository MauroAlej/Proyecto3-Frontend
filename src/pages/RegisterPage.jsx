import React, { useEffect, useState } from 'react'

const RegisterPage = () => {

  const [formInput, setFormInput] = useState({
    name: "",
    user: "",
    pass: "",
    rPass: ""
  });
  const [nameInput, setNameInput] = useState(false);
  const [userInput, setUserInput] = useState(false);
  const [passInput, setPassInput] = useState(false);
  const [rpassInput, setRpassInput] = useState(false);

  const handleChange = (ev) => {
    setFormInput({ ...formInput, [ev.target.name]: ev.target.value });
    if (formInput.user) {
      setUserInput(false)
    }else if (formInput.pass){
      setPassInput(false)
    }else if (formInput.rPass){
      setRpassInput(false)
    }
    else if (formInput.name){
      setNameInput(false)
    }
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    if (! formInput.name ||!formInput.user || !formInput.pass || !formInput.rPass) {
      setNameInput(!formInput.name);
      setUserInput(!formInput.user);
      setPassInput(!formInput.pass);
      setRpassInput(!formInput.rPass);
    } else {
      setNameInput(false);
      setUserInput(false);
      setPassInput(false);
      setRpassInput(false);
    }
  };

  useEffect(() => {
    console.log(formInput);
  }, [formInput]);


    return (




        <body  className='body-className'>
        
        
            
       
        <div className='justify-content-center d-flex'>
        <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">nombre</label>
          <input type="text" className={nameInput ? "form-control is-invalid" : "form-control"} name='name'  id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
         
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">usuario</label>
          <input type="text" className={userInput ? "form-control is-invalid" : "form-control"} name='user' id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={handleChange}/>
          
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">contraseña</label>
          <input type="password" className={passInput ? "form-control is-invalid" : "form-control"} name="pass"    id="exampleInputPassword1" onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">repetir contraseña</label>
          <input type="password"  className={rpassInput ? "form-control is-invalid" : "form-control"} name="rPass"  id="exampleInputPassword1" onChange={handleChange}/>
        </div>
        
        <button type="submit" className= "btn btn-primary" onClick={handleClick}>registrarse</button>
        
      </form>
    
        </div>
      
        
        </body>
      )
 
}

export default RegisterPage