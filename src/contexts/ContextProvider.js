import React, { createContext, useContext, useState } from 'react';

// Keeps track of the context of different components, such as whether or not
// the side bar is open or closed. 

const StateContext = createContext(); 

const initialState = {
    uerProfile: false, 
    notification: false, 
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined)  

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:true}); 
    }
    
    return (
        <StateContext.Provider
            value={{
                activeMenu, 
                setActiveMenu, 
                isClicked, 
                setIsClicked,
                handleClick, 
                screenSize, 
                setScreenSize
             }}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);