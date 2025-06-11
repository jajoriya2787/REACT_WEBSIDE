import React, { createContext, useEffect, useState } from 'react'
import {  ToastContainer } from 'react-toastify';

export const Context = createContext();

function Contextmain({ children }) {



    let oldcarddata = [];
    try {
        const data = localStorage.getItem("CARD");
        oldcarddata = data ? JSON.parse(data) : [];

    } catch (error) {
        console.error("contexemain.jsx error localhisoreg", error);
        oldcarddata = [];
    }


    const [card, setcard] = useState(oldcarddata);

    useEffect(
        () => {
            localStorage.setItem("CARD", JSON.stringify(card))
        }, [card]
    )

    let oldlogindata = [];
    try {
        const login = localStorage.getItem('token') //se data liya token se
        oldlogindata = login ? login : ''; //phir upar walw khali verebule me dal diya
    } catch (error) {
        console.error("contexemain.jsx error localhisoreg", error);
        oldlogindata = [];
    }

    const [login, setlogin] = useState(oldlogindata);

    useEffect(
        () => {
            localStorage.setItem('token', login)
        }, [login]
    )


    const [toastPosition, setToastPosition] = useState('bottom-right');

    return (
        //yha par children me data app se aa rha h aap ka component Contextmain me me run kar rha h
        // yha context provider me value name ki key hoti h jisme value dali jati h jisse children pard es value ko aasani se scan kar sakta h
        <>
            <Context.Provider value={{ card, setcard, login, setlogin }}>
                {children}
            </Context.Provider>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </>
    )
}

export default Contextmain