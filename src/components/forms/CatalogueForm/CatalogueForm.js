import {ErrorMessage, Field, Form,Formik} from 'formik'
import {connect} from 'react-redux'
import {Button,Label} from 'reactstrap'
import '../../styles/Forms.css'
import { addCatalog } from '../../../redux/actions/CatalogueActions'
const CatalogueForm=({addCatalog}) =>{

    return(
        <Formik
        initialValues={{name:'',description:'',category:''}}

        validate={(values)=>{
            let errors={}
            
            if(!values.name)
                errors.name='El nombre de la categoría es un campo requerido'
            else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name))
                errors.name='El nombre sólo puede contener letras y espacios'

            if(!values.description)
                errors.description='La descripción de la categoría es un campo requerido'

            if(!values.category)
                errors.category='Debe seleccionar una categoría'
        
        return errors
        }
        }

        onSubmit={(values, { resetForm }) => {
            addCatalog(values);
            
            resetForm();
          }}
        >
        {

        ({values,errors,touched,handleSubmit,handleChange,handleBlur})=>(
           <Form className='formsModal' onSubmit={handleSubmit}>
                
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
                placeholder='Ej: Catalogo para....'
                type='text'
                />

                <ErrorMessage name="category" component={()=><label className="validationError">{errors.description}</label>}/>

                <Label className='fieldLabel' htmlFor='category' >Categoría</Label>
                <Field id="category" name="category" as="select">
                    <option value="">Seleccionar Categoría</option>
                    <option value="1">Green</option>
                    <option value="2">Blue</option>
                </Field>

                <ErrorMessage name="category" component={()=><label className="validationError">{errors.category}</label>}/>
                <Button className='buttonSave' color="btn btn-primary" type="submit">Enviar</Button>
           </Form>
           )
        }
        </Formik>
    );
}

const mapStateToProps=(state)=>{
    return {
        catalogs: state.catalogs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addCatalog: (catalog) => dispatch(addCatalog(catalog))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CatalogueForm)