import React, { useState } from 'react'

const SignUp = () => {
    
    const [formData, setFormData] = useState(
        {
           email: "",
           password: "",
           confirmedPassword: "",
           joinedNewsletter: true 
        }
    );
    
    function handleChange(event) {
        const {name, type, value, checked} = event.target ;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmedPassword){
            alert("Succesfully Signed Up")
        }
        else{
            alert("Passwords do not Match")
            return
        }
        if(formData.joinedNewsletter){
            alert("Thanks for signing up for our newsletter!")
        }
    }
   
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="  Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="  Confirm password"
                    className="form--input"
                    name="confirmedPassword"
                    onChange={handleChange}
                    value={formData.confirmedPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUp