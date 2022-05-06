import React from 'react'
import {Button} from 'react-bootstrap'
function CustomBtn({variant,text_inside_btn,label,className}) {
  return (
    <div>
        <Button className={className} label={label} variant={variant}>{text_inside_btn}{label}</Button>
    </div>
  )
}

export default CustomBtn