import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
function CustomInput({onChange,className,type,placeholder,text_inside_input,label}) {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          className={className}
          placeholder={placeholder}
          defaultValue={text_inside_input}
          type={type}
          onChange={onChange}
          label={label}
        />
      </InputGroup>
    </div>
  )
}

export default CustomInput