
import React, {useState} from "react";
import propTypes from "prop-types"

export default function Navbar( props ){
    
    const [msg1, setMsg] = useState("I love u !!! ");

    function displayText(tt){
        console.log("msg1 : ",tt);
        alert(tt);
    }

    function changeValMsg(event){
        setMsg(event.target.value);
    }

    function changeToUppercase(event){
        let newText = msg1.toUpperCase();
        setMsg(newText);
        console.log(" msg1 111 : ",msg1)
        displayText(newText);
        console.log(" msg1 12222 : ",msg1)
    }


    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#"> { props.username } </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">MainHead</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"> {props.age} </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Like</a></li>
                    <li><a className="dropdown-item" href="#">Comment</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Share</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
                </ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>

        <div className="container mt-4">
            <textarea className="form-control" value={msg1} rows="10" onChange={changeValMsg}  placeholder={props.heading} >
            
            </textarea>
            <div className="text-center m-2"> 
                <button className="btn btn-primary" onClick={ () => displayText(msg1) } > Love </button>
                <button className="btn btn-secondary" onClick={changeToUppercase}> UpperCase</button>
            </div>
        
        </div>

        </>
    )
}

Navbar.propTypes = {
    username : propTypes.string,
    age : propTypes.number
}


Navbar.defaultProps = {
    username : 'vaibhav',
    age : 25
}


