import React, { FormEventHandler, use, useEffect, useState } from 'react';
import "../LoginModal.css";
import { login, register } from "../../../utils/Users"
import { writeCookie } from "../../../common/index"


import hidePasswordIcon from "../LoginModalAssets/hidepassicon.webp";
import showPasswordIcon from "../LoginModalAssets/showpassicon.png";
import closeLoginWindowIcon from "../LoginModalAssets/closeloginwindowicon.png";

const LoginInterface = (props) => {

    let [hidePass, setHidePass] = useState(true);

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let [status, setStatus] = useState("");

    //Form submit handler
    let formSubmitHandler = async (event: any) => {
        setStatus("Logging in...");

        //Check which type of form is being used (login or register), and submit data using its respective function
        if (props.interfaceType === "Login") {
            event.preventDefault();
            setStatus("Logging in...");

            //Call to login utility, receive res with jwt inside
            let loginRes = await login(username, password);

            if (loginRes.status === true) {
                //Login successful
                setStatus("Logged in");

                //Create cookie
                writeCookie("jwt-token", loginRes.token, 7);

                props.setSelectedTabState("LoggedIn");
            } else if (loginRes.status === false) {
                //Login unsuccessful
                setStatus(loginRes.error);
            } else {
                //Error catch
                setStatus(loginRes.error);
                throw new Error("An error occurred in LoginInterface at login");
            }
            return;

        } else if (props.interfaceType === "Register") {
            event.preventDefault();
            setStatus("Registering account...");

            //Call to login utility
            let registerRes = await register(username, password);

            if (registerRes.status === true) {
                //Login successful
                setStatus("Account registered");
            } else if (registerRes.status === false) {
                //Login unsuccessful
                setStatus(registerRes.error);
            } else {
                //Error catch
                setStatus("An error occurred");
                throw new Error("An error occurred in LoginInterface at register");
            }

            return;
        } else {
            event.preventDefault();
            console.log(`"${props.interfaceType}" is not a valid interfaceType. In formSubmitHandler in LoginInterface.`);
            throw new Error(`"${props.interfaceType}" is not a valid interfaceType. In formSubmitHandler in LoginInterface.`);
        }
    }

    return (
        <div className='h-full'>

            <div className='w-full flex items-center justify-center flex-col mt-[0px]'>
                {/* <button onClick={(event) => { props.setLoginModal("closed"); event.preventDefault(); }} className='absolute left-0 ml-[10px]'>
                    <img src={closeLoginWindowIcon.src} className=' w-[25px]' alt='closeloginwindowicon' />
                </button> */}
                <h1 className='text-3xl'>{props.interfaceType}</h1>
            </div>

            <form onSubmit={formSubmitHandler} className='flex flex-col items-center'>

                <div className='flex flex-col items-center mt-[5px]'>
                    <label className='flex flex-col items-center'>
                        Username
                        <input type='text' name='username' required onChange={(e) => setUsername(e.target.value)}></input>
                    </label>
                </div>

                <div className='flex flex-col items-center'>
                    <label className='flex flex-col items-center'>Password
                        <div className='relative'>
                            <input type={hidePass ? "password" : "text"} name='password' className='' required onChange={(e) => setPassword(e.target.value)}></input>
                            <div className='absolute top-0 right-0 mr-[5px]' onClick={() => { setHidePass(!hidePass) }}>
                                {hidePass
                                    ?
                                    (<img src={showPasswordIcon.src} alt='hidepasswordicon' className='w-[40px]' />)
                                    :
                                    (<img src={hidePasswordIcon.src} alt='hidepasswordicon' className='w-[40px]' />)
                                }
                            </div>
                        </div>
                    </label>

                </div>
                <input type='submit' value={props.interfaceType} className='bg-white w-[100px] border-black border-[1px] mt-[10px]'></input>
            </form>
            <div className='flex items-center justify-center mt-[10px]'>
                <p className="flex items-center justify-center">{status}</p>
            </div>

        </div>
    );
};

export default LoginInterface;