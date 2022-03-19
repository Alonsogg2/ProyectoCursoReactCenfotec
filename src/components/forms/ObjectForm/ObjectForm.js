import {ErrorMessage, Field, Form,Formik} from 'formik'
import {Button,Label} from 'reactstrap'
import '../../styles/Forms.css'

const CategoryForm=() =>{

    return(
        <Formik
        initialValues={{name:'',description:'',catalogo:''}}

        validate={(values)=>{
            let errors={}

            if(!values.name)
                errors.name='El nombre del objeto es un campo requerido'
            else if(!/^[a-zA-Z0-9_.+-]+[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.name))
                errors.name='No se permite simbolos'

            if(!values.description)
                errors.description='La descripción del objeto es un campo requerido'
            else if(!/^[a-zA-Z0-9_.+-]+[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.description))
                errors.description='No se permite simbolos'

                
            if(!values.catalogo){
                errors.catalogo='Debe escoger un catálogo'
            }

        return errors
        }
        }
        >
        {

        ({values,errors,touched,handleSubmit,handleChange,handleBlur})=>(
           <Form className="formsModal" onSubmit={handleSubmit}>
                <Label className='fieldLabel' htmlFor='nameObject'>Nombre</Label>
                <Field 
                id="nameObject"
                name="name"
                placeholder='Nombre'
                type='text'
                />
                
                <ErrorMessage name="name" component={()=><label className="validationError">{errors.name}</label>}/>

                <Label className='fieldLabel' htmlFor='descriptionObject' >Descripción</Label>
                <Field 
                id="descriptionObject"
                name="description"
                placeholder='Ej: Categoria para....'
                type='text'
                />
                
                <ErrorMessage name="description" component={()=><label className="validationError">{errors.description}</label>}/>
                
                <Label className='fieldLabel' htmlFor='catalogo' >Catálogo</Label>
                <Field id="catalogo" name="catalogo" as="select">
                    <option value="">Seleccionar catálogo</option>
                    <option value="1">Green</option>
                    <option value="2">Blue</option>
                </Field>

                <ErrorMessage name="catalogo" component={()=><label className="validationError">{errors.catalogo}</label>}/>


                <Button className='buttonSave' color="btn btn-primary" type="submit">Enviar</Button>
           </Form>
           )
        }
        </Formik>
    );
}

export default CategoryForm