import React from "react";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusSquare,
  AiFillHeart,
  AiOutlineDown,
} from "react-icons/ai";
import list from "./post";
export default function Next() {
  return (
    <div>
      <div className="container-fluid  ">
        <div className="container">
          <div className="row">
            <div className="col-4  ">
              <div className="inst-logo"></div>
            </div>
            <div className="col-4 ">
              <input
                type="text"
                name=""
                id=""
                className="sreach"
                placeholder=" Search"
              />
            </div>
            <div className="col-4  d-flex">
              <AiOutlineHome className="home-icon" />
              <AiOutlineMessage className="home-icon" />
              <AiOutlinePlusSquare className="home-icon" />
              <AiFillHeart className="home-icon" style={{ color: "red" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid danger">
        <div className="container">
          <div className="row">
            <div className="col-3 ">
              <div className="img-profile"></div>
            </div>
           
            <div className="col-6 salman">
              <h2>beingsalmankhan</h2>
              <button className="btaan">Message</button>
              <button className="botan">Follow</button>
              <button className="icon-down">
                {" "}
                <AiOutlineDown />
              </button>
              <button className="doos">...</button>

              <div className="container  dangal ">
                <div className="row">
                  <div className="col-3  ">
                    {" "}
                    <h5>
                      1,164 <span style={{ fontWeight: "lighter" }}>posts</span>
                    </h5>
                  </div>
                  <div className="col-4 ">
                    {" "}
                    <h5>
                      51.6m{" "}
                      <span style={{ fontWeight: "lighter" }}>Followers</span>
                    </h5>
                  </div>
                  <div className="col-4">
                    {" "}
                    <h5>
                      34{" "}
                      <span style={{ fontWeight: "lighter" }}>Following</span>
                    </h5>{" "}
                  </div>
                </div>
                <ul>
                  <li>Salman Khan</li>
                  <li>Actor, artist, painter, humanitarian</li>
                  <li>
                    <span style={{ color: "blue" }}>bit.ly/3KtIeiV</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container card-body">
      {list.map((ele) => {
        return (
          
            <div className="card " style={{ width: "20rem " }}>
              <img
                className="card-img-top"
                src={ele.img}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">
                 {ele.body}
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
        
        );
      })}
      </div>
    </div>
  );
}

{
  /* {list.map((ele)=>(
  
  <div> 
      <h6>{ele.title}</h6>
      <img src={ele.img} alt="" />
  </div>
))} */
}

{
  /* {list.map((ele)=>(
    // console.log(ele)
     <div>
         <h1>{ele.title}</h1>
     </div>
))} */
}
