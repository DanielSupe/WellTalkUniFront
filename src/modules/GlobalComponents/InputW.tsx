import React from 'react'
import { Input, Label } from 'reactstrap'

interface types{
    type?: "text" | "email" | "password" | "date" | "number" | "select" | "password"
    title: string
    nameKey:string
    handleChange:Function
    classname:string
    value: any
    options?: {}[]
}

const InputW = ({
    type="text",
    title="",
    nameKey,
    handleChange,
    classname,
    value,
    options
}:types) => {
  return (
    <div>

        {type == "select" ? 
        
        
        (<Input
          type="select"
          className={classname}
          value={value}
          onChange={(e) => handleChange(nameKey, e.target.value)}
        >
          <option ></option>

          {options && options.map((option:any) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </Input>):
        
        
        (<Input
            type={type}
            placeholder={title}
            className={classname}
            onChange={(e)=>{handleChange(nameKey, e.target.value)}}
            value={value}
        />)}

    </div>
  )
}

export default InputW