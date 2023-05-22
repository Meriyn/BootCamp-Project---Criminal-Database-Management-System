import { Link} from 'react-router-dom';
import myImage from './myImage.png';
import React, { useState } from 'react';


export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


    const wrong = () => {
      alert ('ERROR');
      setUsername('');
      setPassword('');
    };
  return (
<>

<div className="sidenav">
         <div className="login-main-text">
            <h2><b>Criminal DataBase Management System</b><br/></h2>
            <p>Login from here to access.</p>
            <img src={myImage} alt="My Image" height="200px" />
         </div>
      </div>



      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
             
               <form>
                  <div className="form-group clr">
                     <label htmlFor="username">User Name</label>
                     <input id="username" value={username} type="text" className="form-control" placeholder="User Name" onChange={(e)=> setUsername(e.target.value)}/>
                  </div>

                  <div className="form-group clr">
                     <label htmlFor="password">Password</label>
                     <input id="password" value={password} type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  {username === "admin" && password === "password" ? 
                   <Link to="/home"> 
                  <button   type="submit" className="btn btn-black styling-btn">Login</button>
                   </Link>
                : 
                <button onClick={wrong} type="submit" className="btn btn-black styling-btn">Login</button>
      }
               </form>
                
            </div>
         </div>
      </div>
      </>
  )
}
