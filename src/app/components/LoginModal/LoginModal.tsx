'use client';

//To Do


import React, { use, useEffect, useState } from 'react';
import "./LoginModal.css";
import hidePasswordIcon from "./LoginModalAssets/hidepassicon.webp";
import showPasswordIcon from "./LoginModalAssets/showpassicon.png";
import closeLoginWindowIcon from "./LoginModalAssets/closeloginwindowicon.png";
import loginTabIcon from "./LoginModalAssets/logintabicon.png";

const LoginModal = () => {
    let [selectedTab, setSelectedTab] = useState("Login");
    let [hidePass, setHidePass] = useState(true);
    let [loginModal, setLoginModal] = useState("");
    //Calling to document gives an error because NextJS is server sided, but this component uses client so not sure
    const loginModalEle = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLoginModal("closed");
    },[])

    
    //Login modal animation
    let x: number;
    // let y: number;
    if (loginModalEle.current) {
        //Get elements current position
        x = loginModalEle.current.offsetLeft;
        // y = loginModalEle.offsetTop;
    }
    //NodeJS.Timer?
    let loginModalTimer: NodeJS.Timeout;
    if (loginModal === "closed") {
        console.log("INTERVAL SETTTTTTTTTTT");
        loginModalTimer = setInterval(closeLoginModal, 1);

    } else if (loginModal === "open") {
        loginModalTimer = setInterval(openLoginModal, 1);
    }

    function closeLoginModal() {
        console.log("close modal frame running");
        console.log(loginModalEle)
        console.log(loginModalEle.current)
        if (loginModalEle) {
            if (x <= -300) {
                clearInterval(loginModalTimer);
            } else {
                x -= 20;
                loginModalEle.current.style.left = x + "px";
            }
        } else {
            console.log("modal not found in closeLoginModal");
        }
    }

    function openLoginModal() {
        console.log("open modal frame running");
        if (loginModalEle) {
            //Place the modal in the middle of the screen and then remove the width of the modal so it's centered in the screen, the round
            if (x >= Math.round((window.innerWidth / 2) - (loginModalEle.current.offsetWidth / 2))) {
                clearInterval(loginModalTimer);
                if (loginModalEle.current.parentElement) {
                    loginModalEle.current.style.removeProperty("left"); //Remove left property so modal is centered again
                }
                console.log("ending X = :", x);
            } else {
                x += 20;
                loginModalEle.current.style.left = x + "px";
            }
        } else {
            console.log("modal not found in openLoginModal");
        }
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen absolute pointer-events-none'>

            <button onClick={(event) => { setLoginModal("open"); event.preventDefault(); }} id='loginTab' className={`fixed flex items-center justify-evenly top-[113px] bg-green-400 rounded-r-3xl w-[150px] h-[60px] text-2xl pointer-events-auto`}>
                Login
                <img src={loginTabIcon.src} alt='loginTabIcon' className='w-[25px] bg-white rounded-lg' />
            </button>


            <div ref={loginModalEle} id='loginModal' className={`fixed bg-green-300 rounded-xl border-black border-2 min-h-[300px] pointer-events-auto z-[100]`}>
                <div className='flex justify-evenly w-full min-h-[50px] border-b-2 border-green-500'>

                    <button onClick={() => { setSelectedTab("Login") }} className={` navbarTab rounded-tl-xl ${selectedTab === "Login" ? "bg-green-300" : "bg-green-200"}`}>
                        <p>Login</p>
                    </button>

                    <button onClick={() => { setSelectedTab("Register") }} className={` navbarTab rounded-tr-xl ${selectedTab === "Register" ? "bg-green-300" : "bg-green-200"}`}>
                        <p>Register</p>
                    </button>

                </div>
                <div className='h-full'>
                    {selectedTab === "Login" &&
                        <div className='h-full'>

                            <form className='flex flex-col items-center h-2/4'>
                                <div className='w-full flex items-center justify-center flex-col'>
                                    <button onClick={(event) => { setLoginModal("closed"); event.preventDefault(); }} className='absolute left-0 ml-[10px]'>
                                        <img src={closeLoginWindowIcon.src} className=' w-[25px]' alt='closeloginwindowicon' />
                                    </button>
                                    <h1 className='text-3xl'>Login</h1>
                                    <p>(In Development)</p>
                                </div>

                                <div className='flex flex-col items-center mt-[20px]'>
                                    <label>Username</label>
                                    <input type='text'></input>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <label>Password</label>
                                    <div className='relative'>
                                        <input type={hidePass ? "password" : "text"} className=''></input>
                                        <div className='absolute top-0 right-0 mr-[5px]' onClick={() => { setHidePass(!hidePass) }}>
                                            {hidePass
                                                ?
                                                (<img src={showPasswordIcon.src} alt='hidepasswordicon' className='w-[40px]' />)
                                                :
                                                (<img src={hidePasswordIcon.src} alt='hidepasswordicon' className='w-[40px]' />)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    }

                    {selectedTab === "Register" &&
                        <div>
                            <div className='h-full'>
                                <form className='flex flex-col items-center h-2/4'>
                                    <div className='w-full flex items-center justify-center'>
                                        <button onClick={(event) => { setLoginModal("closed"); event.preventDefault(); }} className=' absolute left-0 ml-[10px]'>
                                            <img src={closeLoginWindowIcon.src} className='w-[25px]' alt='closeloginwindowicon' />
                                        </button>
                                        <h1 className='text-3xl'>Register</h1>
                                    </div>

                                    <div className='flex flex-col items-center mt-[20px]'>
                                        <label>Username</label>
                                        <input type='text'></input>
                                    </div>

                                    <div className='flex flex-col items-center'>
                                        <label>Password</label>

                                        <div className='relative'>
                                            <input type={hidePass ? "password" : "text"} className=''></input>
                                            <div className='absolute top-0 right-0 mr-[5px]' onClick={() => { setHidePass(!hidePass) }}>
                                                {hidePass
                                                    ?
                                                    (<img src={showPasswordIcon.src} alt='hidepasswordicon' className='w-[40px]' />)
                                                    :
                                                    (<img src={hidePasswordIcon.src} alt='hidepasswordicon' className='w-[40px]' />)
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};



export default LoginModal;