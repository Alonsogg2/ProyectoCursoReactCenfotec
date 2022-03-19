import {Table} from 'reactstrap'
import ModalForm from '../../forms/ModalForm'
import CatalogueForm from '../../forms/CatalogueForm/CatalogueForm'
import { getCatalogs,findCatalog,deleteCatalog } from '../../../redux/actions/CatalogueActions'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/Views.css'
import axios from 'axios'

const CatalogoView =()=>{

    const listCatalogs = useSelector(state => state.CatalogueReducers.dataCatalogs)
    const dispatch = useDispatch()

    const handleGetCatalogs=async ()=> {
        const resp = await axios.get('https://localhost:7137/Catalog/GetCatalogs');
        dispatch(getCatalogs(resp));
      }
    
      const  handleDeleteCatalog=async (idCatalogo)=>{
        const resp = await axios.delete(`https:localhost:7137/Catalog/deleteCatalog?IdCatalogo=${idCatalogo}`);
        dispatch(deleteCatalog(resp))
        dispatch(handleGetCatalogs())
      }
      const handleFindCatalog=async (idCatalogo)=>{
        //setOpen(!open)
        const resp = await axios.get(`https:localhost:7137/Catalog/findCatalog?IdCatalogo=${idCatalogo}`);
        dispatch(findCatalog(resp));
        //show(open)
        //editCatalog(resp.data)
      }

    return(
        <>
        <div className="ViewsDesing">
        <ModalForm title="Catálogo" bodyModal={<CatalogueForm/>}/>
        <h4 className='titleView'>Lista de Catálogos</h4>
        
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCatalogs.map((catalog,index)=>{ return(
                         <tr key={catalog.idCatalogo}>
                            <td>{index+1}</td>
                            <td>{catalog.nombre}</td>
                            <td>{catalog.descripcion}</td>
                            <td>{catalog.categoria}</td>
                            <th><a onClick={()=>handleFindCatalog(catalog.idCatalogo)}>Editar</a></th>
                            <th><a onClick={()=>handleDeleteCatalog(catalog.idCatalogo)}>Eliminar</a></th>
                        </tr>
                            )})}
                    </tbody>
                </Table>
            </div>
        </>
    )

}

export default CatalogoView;