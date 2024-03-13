'use client';

import React, { use, useEffect, useState } from 'react';
import LoginInterface from './LoginComponents/LoginInterface';
import "./LoginModal.css";
import loginTabIcon from "./LoginModalAssets/logintabicon.png";
// import { getUser } from '../../utils/Users';
import closeLoginWindowIcon from "./LoginModalAssets/closeloginwindowicon.png";
import { deleteCookie } from '../../common';


const LoginModal = () => {

    const [userState, setUserState] = useState(null);

    let [selectedTab, setSelectedTab] = useState("Login");
    let [loginModal, setLoginModal] = useState("");

    const loginModalEle = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        // const cookieStore = cookies();
        // console.log(cookieStore)
        getUser();

    }, [selectedTab]);

    const logout = () => {
        deleteCookie("jwt-token");
        setSelectedTab("Login");
    }


    async function getUser() {
        //Next object argument sets data revalidation time in seconds
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/auth`, {
                method: "GET",
                next: {
                    revalidate: 0 //Using 0 opts our of using cache
                }
            })

            const data = await res.json()
            if (data.status === false) {
                return null;
            }
            setUserState(data.user);
            setSelectedTab("LoggedIn");
            return data
        } catch (error) {
            const errorMessage = "error in getUser()"
            console.log(errorMessage)
            return { error: errorMessage }
        }
    }

    //Login modal animation/////////////////////////////////////
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
    //Login modal animation/////////////////////////////////////


    return (
        <div className='flex items-center justify-center h-full w-full absolute pointer-events-none z-[100]'>

            <button onClick={(event) => { setLoginModal("open"); event.preventDefault(); }} id='loginTab' className={`fixed flex items-center justify-evenly top-[113px] ${selectedTab !== "LoggedIn" ? "bg-green-400" : "bg-blue-500"} rounded-r-3xl w-[150px] h-[60px] text-2xl pointer-events-auto`}>
                Login
                <img src={loginTabIcon.src} alt='loginTabIcon' className='w-[25px] bg-white rounded-lg' />
            </button>

            <div ref={loginModalEle} id='loginModal' className={`fixed bg-green-300  rounded-xl border-black border-2 w-[280px] min-h-[350px] pointer-events-auto`}>

                {selectedTab !== "LoggedIn" &&
                    <div className='flex justify-evenly w-full min-h-[50px] border-green-500'>
                        <button onClick={() => { setSelectedTab("Login") }} className={`navbarTab border-black rounded-tl-xl ${selectedTab === "Login" ? "bg-green-300" : "bg-green-200"}`}>
                            <p>Login</p>
                        </button>

                        <button onClick={() => { setSelectedTab("Register") }} className={`navbarTab  border-black rounded-tr-xl ${selectedTab === "Register" ? "bg-green-300" : "bg-green-200"}`}>
                            <p>Register</p>
                        </button>
                    </div>
                }

                <div className='h-[300px] mt-[10px]'>

                    <button onClick={(event) => { setLoginModal("closed"); event.preventDefault(); }} className='absolute left-0 ml-[15px] mt-[5px] z-50'>
                        <img src={closeLoginWindowIcon.src} className=' w-[25px]' alt='closeloginwindowicon' />
                    </button>

                    {selectedTab === "Login" &&
                        <LoginInterface setLoginModal={setLoginModal} interfaceType="Login" setSelectedTabState={setSelectedTab} />
                    }

                    {selectedTab === "Register" &&
                        <LoginInterface setLoginModal={setLoginModal} interfaceType="Register" setSelectedTabState={setSelectedTab} />
                    }

                    {selectedTab === "LoggedIn" &&

                        <div className='flex flex-col justify-center items-center h-full relative'>
                            <div className='text-2xl'>
                                <div className='flex'>
                                    Logged in as &nbsp;
                                    <p className='bg text-blue-600'>{userState?.username}</p>
                                </div>
                            </div>

                            <button className='absolute bottom-10 buttonblue w-[100px] h-[40px] text-2xl flex justify-center items-center' onClick={logout}>Log Out</button>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};



export default LoginModal;