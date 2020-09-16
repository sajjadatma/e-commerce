import React, { createContext, useState } from 'react'
export const LoginContext = createContext();

export const LoginProvider = props => { 
  const [loggedIn, setLoggedIn] = useState(false)
  const [hasError, setHasError] = useState(false)

    return (
        <LoginContext.Provider value= {{
        CheckLogin: [loggedIn, setLoggedIn],
          HasError:[hasError,setHasError]
        }}
        >
            {props.children}
        </LoginContext.Provider>
        )

}