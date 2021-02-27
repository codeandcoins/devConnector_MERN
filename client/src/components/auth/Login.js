import React,{Fragment,useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

    const [formData,setFormData]=useState({
        email:"",
        password:""
    })

    const {email,password}=formData;

    const handleChange=(e)=>setFormData({
        ...formData,[e.target.name]:e.target.value
    })


    const onSubmit=async (e)=>{
        e.preventDefault();
        console.log("Login not implemented yet");
    }


    console.log(formData)


    return (
        <Fragment>
            
      <h1 className="large text-primary">Login</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit={e=>onSubmit(e)}>

        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={e=>handleChange(e)} />
          </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={formData.password} onChange={e=>handleChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>

        </Fragment>
    )
}

export default Login