import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
export default function Login() {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [del, setDel] = useState();
  //   const datahandle = () => {
  //   };

  const inp1 = (e) => {
    setFirst(e.target.value);
    console.log(e.target.value);
  };

  const inp2 = (e) => {
    setSecond(e.target.value);
    console.log(e.target.value);
  };

  const inp3 = (e) => {
    setThird(e.target.value);
    console.log(e.target.value);
  };
  const dataChange = () => {
    if ((first == second) == third) {
      alert("data Matched");
      setDel(true);
    } else {
      alert("data not match");
      setDel(false);
    }
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="container ">
          <div className="row">
            <div className="col-1  "></div>
            <div className="col-5   pictures ">
              <div className="img"></div>
            </div>
            <div className="col-1   "></div>
            <div className="col-4   inputs=page">
              <div className="insta"></div>
              <input
                type="text"
                onChange={inp1}
                name="name"
                id="name1"
                placeholder=" Name"
              />
              <input
                type="text"
                onChange={inp2}
                email=""
                id="email"
                placeholder=" Email"
              />
              <input
                type="text"
                onChange={inp3}
                name=""
                id="fname"
                placeholder=" Password"
              />

              {/* <button className="btn"> Login</button> */}
              {/* <Link to="/next"><button className="btn">Login</button></Link> */}
              {del ? (
                <Link to="/next">
                  <button onClick={dataChange} className="btn">
                    Login
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={dataChange} className="btn">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
