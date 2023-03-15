import React from 'react'
import './Input.scss'


const Input = ({type, setName, value, setQuantity}) => {
  
  let data;

  switch (type) {
    case 'prodName':
      data = {
        label: 'product name',
        inputType: 'text',
        set: setName,
      }
      break;
  
    case 'prodQuantity':
      data={
        label: 'product quantity',
        inputType: 'number',
        set: setQuantity,
      }
      break;

    case 'prodPrice':
      data={
        label: 'product price',
        inputType: 'number'
      }
      break;
  
    default:
      break;
  }
  

  return (
    <div className='input'>
        <div className="form_holder">
            <label htmlFor="prod_name">{data.label}</label> <br />
            <input 
              type={data.inputType} 
              id='prod_name' 
              // placeholder='just lol'
              value={value}
              onChange={(e)=> data.set(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Input