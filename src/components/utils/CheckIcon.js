import React from "react"

function CheckIcon({props}){
    if(props.item.done){
      return <img onClick={()=> {  props.handles.checkTask(props.item) }} src="/assets/checked.png" alt="checked icon"></img>
    } 
    
    return <img onClick={()=> {  props.handles.checkTask(props.item) }} src="/assets/unchecked.png" alt="checked icon"></img>
  }

export default CheckIcon