import {React, useState} from 'react'
import './Panel.scss'

import Sidebar from '../../Components/Sidebar/Sidebar'
import Input from '../../Components/Inputs/Input'
import Records from '../../Components/Table/Table'
import Alert from '../../Components/Alert/Alert'


const Panel = () => {
  const [name, setName] = useState('')
  let defaultQuantity = 0
  const [quantity, setQuantity] = useState(defaultQuantity)
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  // const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  // function to prevent the form from submitting on click of button
  const handleForm =  (e) => {
    e.preventDefault()
  }

  //function to add to the record list
  const add = () => {
    if (name && quantity) {
      // add the content
      showAlert(true,'success','product added to the list');  
      const newProduct = {
        id: new Date().getTime().toString(), 
        title: name,
        quantity: quantity,
      };
      setList([...list, newProduct]);
      // reset state controlled inputs back to default
      setName('');
      setQuantity(defaultQuantity)
    }else if (!name && isEditing) {
      //add the alert
    }else{
      showAlert(true, 'danger', 'Please Enter Values')
    }
  }

  // function for show alert if it's a success or a fail
  const showAlert = (show=false, type='',msg='') => {
    setAlert({show,type,msg})
  }

  //function to edit the item 
  const editItem = () => {
    console.log(list);
  }

  return (

    <div className='panel'>
        <Sidebar />
        <div className="panelContainer">
          <div className="sidebar_imitation"></div>
          <div className="panelContainerComponents">
            {/* display the alert under certain conditions */}
            
            {alert && <Alert {...alert} removeAlert={showAlert} list={list}/>}

            {/* form inputs */}
            <form className='form' onSubmit={handleForm}> 
              <div className="inputs">
                <div className="left">
                  <Input 
                    type='prodName' 
                    value={name} 
                    setName={setName}
                  />
                  <Input type='prodName' />
                </div>
                <div className="right">
                  <Input 
                    type="prodQuantity"
                    value={quantity}
                    setQuantity={setQuantity}
                  />
                  <Input type="prodPrice" />
                </div>
              </div>

              {/* button  */}
              <div className="button_holder">
                <button className="button" onClick={add} type='submit'>add</button>
                <button className="button">edit</button>
                <button className="button">clear</button>
                <button className="button">delete</button>
              </div>
            </form>

            {/* table for record keeping */}
            {/* <Records /> */}
            {/* {list.lenght > 0 &&  */}
              <Records 
                products={list} 
                // editItem={editItem}
              />
            {/* } */}
          </div>
        </div>
    </div>

  )
}

export default Panel