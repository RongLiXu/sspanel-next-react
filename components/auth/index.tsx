import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function Auth(props:{ children:any}) {
    
    const token = localStorage.getItem('token') 
    if(token){
        return <>{props.children}</> 
    }else{
        return <Navigate to="/login" />
    }

}