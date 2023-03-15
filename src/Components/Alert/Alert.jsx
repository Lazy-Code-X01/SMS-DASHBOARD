import {React, useEffect} from 'react'
import './Alert.scss'

const Alert = ({type, msg, removeAlert, list}) => {
  
  useEffect(() => {
    const timeout = setTimeout(()=>{
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  },)

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert