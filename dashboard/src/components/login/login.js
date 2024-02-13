import React, { useRef, useState } from "react";

function Login() {
    const email = useRef();
    const password = useRef();
    const [errors,setErrors] = useState();

    if(sessionStorage.getItem("loged")) {sessionStorage.removeItem("loged")}

    function onSubmit(event){
        event.preventDefault();
        logUser();
    }
    async function logUser(){
        const data = {
            email: email.current.value,
            password: password.current.value,
        };
        const response = await fetch("/api/user/login",{
            method: "POST",
            body: JSON.stringify(data),
            headers:{"Content-Type": "application/json"}
        })
        const result = await response.json();
        console.log(result);
        if(result.msg){
            setErrors(result.msg);
            return;
        }
        sessionStorage.setItem("logged",JSON.stringify(result));
        window.location.replace("/");
    }
    function error(){
        return(
            <div class="alert alert-danger" role="alert">
                {errors}
            </div>
        )
    }


    return (
      <div className="card m-4 p-2" style={{ width: "100%" }}>
        <h2>Log in:</h2>
        <form onSubmit={onSubmit}>
            {errors ? error() : ""}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" >Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" ref={password}/>
            </div>
            <button type="submit" class="btn btn-primary" >Logearse</button>
        </form>
      </div>
    );
};

export default Login;
