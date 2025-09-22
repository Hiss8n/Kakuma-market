'use client'
import React from 'react'
import {Provider} from "react-redux";
import {store} from "../store2"

const StoreProvider = ({children}) => {
  return <Provider store={store}>
      <div>
          {children}

      </div>
        

    </Provider>
  
  
}

export default StoreProvider