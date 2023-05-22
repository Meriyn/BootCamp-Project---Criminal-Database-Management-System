import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function Home() {
    
  

  return (
    <body className="app-container">
        <Navbar/>
        
   

    <div className='pg-layout'>
        <br/>
        <Link to="/enter">
            <button type="submit" className="btn btn-black styling-btn">Enter Data</button>
        </Link>
        <br/>
        <br/>
        <Link to="/search">
            <button type="submit" className="btn btn-black styling-btn">Search Data</button>
        </Link>
        <br/>
        <br/>
        <Link to="/update">
            <button type="submit" className="btn btn-black styling-btn">Update Data</button>
        </Link>
        {/* <Link to="/delete">
            <button type="submit" className="btn btn-black">Delete</button>
        </Link> */}
    </div>
    </body>
  )
}
