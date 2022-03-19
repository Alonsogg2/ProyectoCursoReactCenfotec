import React, { useEffect,useState } from 'react';
import {Table} from 'reactstrap'
import ModalForm,{show} from '../../forms/ModalForm'
import CategoryForm,{editCategory} from '../../forms/CategoryForm/CategoryForm'
import { getCategories,findCategory,deleteCategory } from '../../../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import '../../styles/Views.css'
import axios from 'axios'

const CategoriaView =({getCategories,listCategories})=>{
    const [open,setOpen]=useState(false);
    
      useEffect(() => {
       
        handleGetCategories()
        
              }, [open])
            
    
     const handleGetCategories=async ()=>{
        const resp = await axios.get('https://localhost:7137/Category/GetCategories');
          getCategories(resp);
      }
    
      const  handleDeleteCategory=async (idCategoria)=>{
        const resp = await axios.delete(`https:localhost:7137/Category/deleteCategory?IdCategoria=${idCategoria}`);
          deleteCategory(resp)
          handleGetCategories()
      }
      const handleFindCategory=async (idCategoria)=>{
        setOpen(!open)
        const resp = await axios.get(`https:localhost:7137/Category/findCategory?IdCategoria=${idCategoria}`);
        findCategory(resp);
        show(open)
        editCategory(resp.data)
      }

      
    
    return(
        <>
        <div className="ViewsDesing">
        <ModalForm  title="Categoría" bodyModal={<CategoryForm />}openEstado={open} />
        <h4 className='titleView'>Lista de Categorías</h4>
           
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                         listCategories.map((category,index)=>{ return(
                         <tr key={category.idCategoria}>
                            <td>{index+1}</td>
                            <td>{category.nombre}</td>
                            <td>{category.descripcion}</td>
                            <th><button onClick={()=>handleFindCategory(category.idCategoria)}>Editar</button></th>
                            <th><button onClick={()=>handleDeleteCategory(category.idCategoria)}>Eliminar</button></th>
                        </tr>
                            )})
                        }
                       
                        
                    </tbody>
                </Table>
            </div>
        </>
    )
}                 
const mapStateToProps=(state)=>{
 
     return {
         listCategories: state.CategoryReducer.dataCategories,
         
     }
 }
 const mapDispatchToProps = dispatch => {
    
     return {
         getCategories: (resp) => dispatch(getCategories(resp)),
         findCategory:(category)=> dispatch(findCategory(category)),
         deleteCategory:(resp)=> dispatch(deleteCategory(resp)),
        
     }
 }
export default connect(mapStateToProps,mapDispatchToProps)(CategoriaView);