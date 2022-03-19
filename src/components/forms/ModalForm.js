import React, {useState,useEffect } from 'react'
import {Button,Modal,ModalHeader,ModalBody,ModalFooter, FormGroup} from 'reactstrap'
import {editCategory} from '../forms/CategoryForm/CategoryForm'
import '../styles/ModalForm.css'
//enviar formulario por parametro
export let valor=false;

export const show=(open)=>{
    valor=open;
}

const ModalForm =({title,bodyModal})=>{
    
    const [open,setOpen]=useState(valor);
    useEffect(() => {
        //salta el primer render
        return () => {
        handleActionModal()
        }
              },[valor])

    const handleActionModal=()=>setOpen(!open);
    const handleOpenModal=()=>{editCategory([{}]);handleActionModal();}
    return (
       
       <>
        <div>
            <Button id="openModal" className='buttonOpenModal'color="btn btn-outline-primary" onClick={()=>handleOpenModal()}>Nuevo {title}</Button>
        </div>

        <Modal isOpen={open} className="modalForm">
            <ModalHeader>
                Crear {title}
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                  {bodyModal}
                    <Button className='buttonCloseModal' color="btn btn-secondary" onClick={()=>handleActionModal()}>Cerrar</Button>
                </FormGroup>
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
        </Modal>
        {()=> handleActionModal()}
        </>
    )

}

export default ModalForm;