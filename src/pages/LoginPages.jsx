import React, { useEffect, useState } from 'react';

const LoginPages = () => {
  const [formInput, setFormInput] = useState({
    user: "",
    pass: "",
    rPass: ""
  });
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
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    if (!formInput.user || !formInput.pass || !formInput.rPass) {
      setUserInput(!formInput.user);
      setPassInput(!formInput.pass);
      setRpassInput(!formInput.rPass);
    } else {
      setUserInput(false);
      setPassInput(false);
      setRpassInput(false);
    }
  };

  useEffect(() => {
    console.log(formInput);
  }, [formInput]);

  return (
    <>
      <div className='d-flex justify-content-center'>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">usuario</label>
            <input type="email" className={userInput ? "form-control is-invalid" : "form-control"} name='user' onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">contraseña</label>
            <input type="password" className={passInput ? "form-control is-invalid" : "form-control"} name="pass" onChange={handleChange} id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">repetir contraseña</label>
            <input type="password" className={rpassInput ? "form-control is-invalid" : "form-control"} name="rPass" onChange={handleChange} id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>iniciar sesión</button>
          <a className='ms-3'>recuperar contraseña</a>
        </form>
      </div>
      <div className='container d-flex justify-content-center'>
        <div className='mt-5'>
          <button className='paf-gmail'>Continuar con Gmail<img src="/public/Gmail_29991.ico" alt="" className='gmil-a ms-1' /></button>
        </div>
        <div className='mt-5 ms-5'>
          <button className='para-face'>Continuar con Facebook <img src="/public/facebook.png" alt="" className='gmil-a ms-1' /></button>
        </div>
      </div>
    </>
  );
};

export default LoginPages;
