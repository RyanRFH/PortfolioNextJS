'use client';

import React, { use, useEffect, useState } from 'react';
import LoginInterface from './LoginComponents/LoginInterface';
import "./LoginModal.css";
import loginTabIcon from "./LoginModalAssets/logintabicon.png";

const LoginModal = () => {
    let [selectedTab, setSelectedTab] = useState("Login");
    let [loginModal, setLoginModal] = useState("");

    const loginModalEle = React.useRef<HTMLDivElement>(null);

    //Login modal animation//

    //x position of modal
    let x: number;

    //Get elements current x position
    if (loginModalEle.current) {
        x = loginModalEle.current.offsetLeft;
    }

    //Initiate modal animation
    let loginModalTimer;
    if (loginModal === "closed") {
        loginModalTimer = setInterval(closeLoginModal, 1);
    } else if (loginModal === "open") {
        loginModalTimer = setInterval(openLoginModal, 1);
    }

    //Move modal off screen
    function closeLoginModal() {
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

    //Bring modal back on screen
    function openLoginModal() {
        if (loginModalEle) {
            //Place the modal in the middle of the screen and then remove the width of the modal divided by 2 so it's centered in the screen
            if (x >= Math.round((window.innerWidth / 2) - (loginModalEle.current.offsetWidth / 2))) {
                clearInterval(loginModalTimer);
                if (loginModalEle.current) {
                    //Remove left property so modal is centered again
                    loginModalEle.current.style.removeProperty("left");
                }
            } else {
                x += 20;
                loginModalEle.current.style.left = x + "px";
            }
        } else {
            console.log("modal not found in openLoginModal");
        }
    }

    return (
        <div className='flex items-center justify-center h-full w-full absolute pointer-events-none z-[100]'>

            <button onClick={(event) => { setLoginModal("open"); event.preventDefault(); }} id='loginTab' className={`fixed flex items-center justify-evenly top-[113px] bg-green-400 rounded-r-3xl w-[150px] h-[60px] text-2xl pointer-events-auto`}>
                Login
                <img src={loginTabIcon.src} alt='loginTabIcon' className='w-[25px] bg-white rounded-lg' />
            </button>

            <div ref={loginModalEle} id='loginModal' className={`fixed bg-green-300  rounded-xl border-black border-2 min-h-[350px] pointer-events-auto`}>
                <div className='flex justify-evenly w-full min-h-[50px] border-green-500'>

                    <button onClick={() => { setSelectedTab("Login") }} className={`navbarTab border-black rounded-tl-xl ${selectedTab === "Login" ? "bg-green-300" : "bg-green-200"}`}>
                        <p>Login</p>
                    </button>

                    <button onClick={() => { setSelectedTab("Register") }} className={`navbarTab  border-black rounded-tr-xl ${selectedTab === "Register" ? "bg-green-300" : "bg-green-200"}`}>
                        <p>Register</p>
                    </button>

                </div>
                <div className='h-full'>
                    {selectedTab === "Login" &&
                        <LoginInterface setLoginModal={setLoginModal} interfaceType="Login" />
                    }

                    {selectedTab === "Register" &&
                        <LoginInterface setLoginModal={setLoginModal} interfaceType="Register" />
                    }
                </div>
            </div>
        </div>
    );
};



export default LoginModal;