import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower=word.toLowerCase()
        return lower[0].toUpperCase()+lower.substring(1,word.length+1)
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        
    </div>
  )
}
