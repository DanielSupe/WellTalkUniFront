import React from 'react'
import InputW from './InputW'

interface types{
    list: {}[]
    onChange: ((nameKey: string, value: string) => void) | null
    classname:string
    form:any
}


const FormW = ({list,onChange,classname,form}:types) => {
  return (
    <>
        {list.map((campo:any, index)=>{
            return(
                <span className='w-full text-start' key={campo.title}>
                    <p>{campo.title}</p>
                    <InputW
                        value={form[campo.nameKey]}
                        type={campo.type}
                        title={campo.title}
                        nameKey={campo.nameKey}
                        handleChange={onChange ? onChange : () => {}}
                        classname={classname}
                        options={campo.options ? campo.options :{}}
                        />
                </span>
            )
        })}



    </>
  )
}

export default FormW