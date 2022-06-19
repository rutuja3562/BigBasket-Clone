import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
const Popup = styled.header`
  .modal-tit {
    color: #f56753;
    font-size: 3.4vw;
    text-align: center;
    margin-left: 33%;
    margin-bottom: 0px;
  }
  .modal-dialog {
    max-width: 40%;
    border-radius: 20px;
  }
  .btn-close {
    color: white;
    background-color: #f56753;
    border-radius: 25px;
  }
  small {
    color: #f56753;
  }
  .mob {
    max-width: 300px;
    text-align: center;
    margin: auto;
    border: none;
  }
  span {
    background-color: white;
    border: none;
    border-radius: 0px;
    border-bottom: 3px solid #f56753;
  }
  input {
    outline: none !important;
    box-shadow: none !important;
    transition: none !important;
    border: none;
    border-bottom: 3px solid #f56753 !important;
    border-radius: 0px;
  }
  .btn-outline-success {
    margin: auto;
    background-color: #e5e5e5;
    outline: none !important;
    box-shadow: none !important;
    transition: none !important;
    color: black;
  }
  .btn-outline-success:hover {
    background-color: #1dba85;
  }
  .auth {
    margin: auto;
  }
  .modal-content {
    background-color: rgb(250, 236, 234);
  }
`;

export const Signup = () => {
  const [image, setImage] = useState({});
  //   const responseGoogle = (response) => {
  //     handleurl(response.profileObj.imageUrl);
  //   };

  //   const responseFacebook = (response) => {
  //     console.log(response);
  //   };

  var random = Math.floor(Math.random(4) * 10000);
  const handleotp = () => {
    alert(random);
  };

  return (
    <Popup width="75%">
      <Flex
        mt={"2rem"}
        flexdirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header py-0 border-0">
              <h5
                className="modal-tit text-center mt-3"
                id="exampleModalToggleLabel" >
                JOIN US
              </h5>
              <button
                type="button"
                className="btn-close p-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <small className="text-center">Explore the freedom</small>
            <div className="input-group my-3 mob mb-4">
              <span className="input-group-text" id="basic-addon1">
                +91
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your phone number"
                aria-label="Username"
                aria-describedby="basic-addon1"
                maxLength="10"
                minLength="10"
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-outline-success px-5 py-1"
              data-bs-target="#exampleModalToggle2"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              onClick={handleotp}
            >
              Get OTP
            </button>
          </div>
        </div>
      </Flex>

      {/* <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
    </Popup>
  );
};

//  <div className="auth mb-3" data-bs-dismiss="modal" aria-label="Close">
//    <GoogleLogin
//      clientId="154743955779-puie7227q9rv09vk3ncbuorg2uq9rteu.apps.googleusercontent.com"
//      buttonText="Sign up with google"
//      onSuccess={responseGoogle}
//      onFailure={responseGoogle}
//      cookiePolicy={"single_host_origin"}
//    />
//  </div>;

//  <div className="auth mb-5" data-bs-dismiss="modal" aria-label="Close">
//    <FacebookLogin
//      appId="481770656419917"
//      autoLoad={true}
//      fields="name,email,picture"
//      callback={responseFacebook}
//    />
//  </div>;
//    <div className="auth mb-5">
//      <FacebookLogin
//        appId="481770656419917"
//        autoLoad={true}
//        fields="name,email,picture"
//        callback={responseFacebook}
//      />
//    </div>;
//  <div className="auth mb-3">
//    <GoogleLogin
//      clientId="154743955779-puie7227q9rv09vk3ncbuorg2uq9rteu.apps.googleusercontent.com"
//      buttonText="Sign up with google"
//      onSuccess={responseGoogle}
//      onFailure={responseGoogle}
//      cookiePolicy={"single_host_origin"}
//    />
//  </div>;
// <div
//   className="modal fade"
//   id="exampleModalToggle2"
//   aria-hidden="true"
//   aria-labelledby="exampleModalToggleLabel2"
//   tabindex="-1"
// >
//   <div className="modal-dialog modal-dialog-centered">
//     <div className="modal-content">
//       <div className="modal-header py-0 border-0">
//         <h5 className="modal-tit text-center mt-3" id="exampleModalToggleLabel">
//           JOIN US
//         </h5>
//         <button
//           type="button"
//           className="btn-close p-2"
//           data-bs-dismiss="modal"
//           aria-label="Close"
//         ></button>
//       </div>
//       <small className="text-center">Explore the freedom</small>
//       <div className="input-group my-3 mob mb-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter your OTP"
//           aria-label="Username"
//           aria-describedby="basic-addon1"
//           onChange={(e) => {
//             checkotp(e);
//           }}
//         />
//       </div>
//       <button
//         type="button"
//         className="btn btn-outline-success px-5 py-1"
//         data-bs-target="#exampleModalToggle2"
//         data-bs-toggle="modal"
//         data-bs-dismiss="modal"
//       >
//         Enter freedom
//       </button>
//       <p className="text-center pt-2">Or</p>
//     </div>
//   </div>
// </div>;
