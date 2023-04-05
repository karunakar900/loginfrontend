import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Signupcomponent() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');

    const handlesignupemail = e => {
        setemail(e.target.value);
    }

    const handlesignuppassword = e => {
        setpassword(e.target.value);
    }


    const handlesignupconfirmpassword = e => {
        setconfirmpassword(e.target.value);
    }


    const handlesignupsubmit = e => {
        e.preventDefault();
        if (email === '' || password === '' || confirmpassword === '') {
            alert("please fillout all the required fields..");
            return false;
        }
        if (password !== confirmpassword) {
            alert("Both password and confirmpassword must be same...");
            setpassword('');
            setconfirmpassword('');
            return false;
        }
        axios.post('https://loginbackend-tcx8.onrender.com/register', {
            email: email,
            password: password,
            confirmpassword: confirmpassword
        })
            .then(res => {
                alert("User registration done successfully!");
                setemail('');
                setpassword('');
                setconfirmpassword('');
            })
            .catch(err => {
                console.log(err);
                alert("An error occurred while registering the user.");
            });


    }


    return (
        <form>
            <div className='heading'>
                <strong>To-Do-List-Application</strong>
            </div>
            <div className='signupcontainer'>
                <h1>User-Registration</h1>
                <label htmlFor="email">Email</label><br></br>
                <input type="text" value={email} id="a" onChange={handlesignupemail} /><br></br>
                <label htmlFor="password">password</label><br></br>
                <input type="password" value={password} id="a" onChange={handlesignuppassword} /><br></br>
                <label htmlFor="password" >confirmpassword</label><br></br>
                <input type="password" value={confirmpassword} id="a" onChange={handlesignupconfirmpassword} /><br></br>
                <button onClick={handlesignupsubmit} id="btn1">Register</button>
            </div>
        </form>
    )
}

export default Signupcomponent;