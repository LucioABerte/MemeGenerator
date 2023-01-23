import React from 'react';

const Form = () => {
    const [formData, setFormData] = React.useState(
        {
         firstName: "" , 
         lastName: "", 
         email: "", 
         comments: "",
         isFriendly: true,
         userStatus: ""
        }
    );
    
    function handleChange(event) {
       setFormData(prevFormData => {
  
        const {type, name, value, checked} = event.target;

        return {
           ...prevFormData,
           [name]: type === "checkbox" ? checked : value
        }
       });
    };

    function handleSubmit(event) {
        event.preventDefault()
        alert("Form Submited!")
        console.log(formData)
    }
    console.log(formData.userStatus);
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input 
                type="checkbox"
                id="isFriendly"
                name='isFriendly'
                onChange={handleChange}
                checked={formData.isFriendly}
            
            />
            <label htmlFor="isFriendly">I agree Terms & Conditions of LabHomeStudio.org </label>
            <br/>

            <fieldset>
                <legend>Current User status</legend>
                    <input 
                        type="radio"
                        id='executive'
                        value="executive"
                        name='userStatus'
                        checked={formData.userStatus === "executive"}
                        onChange={handleChange} 
                    />
                    <label htmlFor="executive" className="label-radio">Excecutive </label> <hr/>
                <br/>

                    <input 
                        type="radio"
                        id='manager'
                        value="manager"
                        name='userStatus'
                        checked={formData.userStatus === "manager"}
                        onChange={handleChange} 
                    />
                    <label htmlFor="manager" className="label-radio">Manager</label><hr/>
                <br/>

                    <input 
                        type="radio"
                        id='employee'
                        value="employee"
                        name='userStatus'
                        checked={formData.userStatus === "employee"}
                        onChange={handleChange} 
                    />
                    <label htmlFor="employee" className="label-radio">Employee</label>
                <br/>
                <br/>
            </fieldset>
            <button>Submit</button>
        </form>
    );
};

export default Form