import React, {useState,useEffect } from 'react'
import {ErrorMessage, Field, Form,Formik} from 'formik'
import {Button,Label} from 'reactstrap'
import { addCategory,updateCategory,getCategories } from '../../../redux/actions/CategoryActions'
import{show} from '../../forms/ModalForm'
import {connect} from 'react-redux'
import '../../styles/Forms.css'
import axios from 'axios'

export let editCat={};

export const editCategory=(category)=>{
    editCat=category[0]
}

const CategoryForm=({addCategory,updateCategory,getCategories,listCategories}) =>{
    const [open,setOpen]=useState(false);
    
      useEffect(() => {
        return () => {
            handleGetCategories()
            }
       
      
    }, [open,editCat,listCategories])

    const handleAddCategory=async (category)=>{
        const resp = await axios.post(`https:localhost:7137/Category/AddCategory?Nombre=${category.name}&Descripcion=${category.description}`);
         addCategory(resp);
         handleGetCategories();
    }
    const handleGetCategories=async ()=>{
        const resp = await axios.get('https://localhost:7137/Category/GetCategories');
          getCategories(resp);
      }

    const handleUpdateCategoryCategory=async (category)=>{
       
        const resp = await axios.post(`https:localhost:7137/Category/UpdateCategory?Nombre=${category.name}&Descripcion=${category.description}&IdCategoria=${category.id}`);
        updateCategory(resp);
        handleGetCategories();
    }

    const handleSubmit=(values) => {
        setOpen(!open)
        show(open);
        if(values.id===0){
            handleAddCategory(values);
        }
        else{
            handleUpdateCategoryCategory(values);
        }
      }

    return(
        <Formik
        initialValues={editCat.idCategoria!==0?{id:editCat.idCategoria,name:editCat.nombre,description:editCat.descripcion}
        :{id:0,name:'',description:''}}
        validate={(values)=>{
            let errors={}

            if(!values.name)
                errors.name='El nombre de la categoría es un campo requerido'
            else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name))
            errors.name='El nombre sólo puede contener letras y espacios'

            if(!values.description)
                errors.description='La descripción de la categoría es un campo requerido'

        return errors
        }
        }
        onSubmit={handleSubmit}
        >
        {

        ({values,errors,touched,handleSubmit,handleChange,handleBlur})=>(
           <Form className="formsModal" onSubmit={handleSubmit}>
                <Label className='fieldLabel' htmlFor='name'>Nombre</Label>
                <Field 
                id="name"
                name="name"
                placeholder='Nombre'
                type='text'
                />
                
                <ErrorMessage name="name" component={()=><label className="validationError">{errors.name}</label>}/>

                <Label className='fieldLabel' htmlFor='description' >Descripción</Label>
                <Field 
                id="description"
                name="description"
                placeholder='Ej: Categoria para....'
                type='text'
                />

                <ErrorMessage name="description" component={()=><label className="validationError">{errors.description}</label>}/>
                <Button className='buttonSave' color="btn btn-primary" type="submit">Enviar</Button>
           </Form>
           )
        }
        </Formik>
    );
}

const mapStateToProps=(state)=>{
    return {
        listCategories: state.dataCatalogs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addCategory: (resp) => dispatch(addCategory(resp)),
        updateCategory:(resp)=> dispatch(updateCategory(resp)),
        getCategories:(resp)=> dispatch(getCategories(resp))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryForm)

