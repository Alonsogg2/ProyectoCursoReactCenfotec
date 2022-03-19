import {Table} from 'reactstrap'
import ModalForm from '../../forms/ModalForm'
import ObjectForm from '../../forms/ObjectForm/ObjectForm'
import '../../styles/Views.css'

const ObjetoView =()=>{
    return(
        <>
        <div className="ViewsDesing">
        <ModalForm title="Objeto" bodyModal={<ObjectForm/>}/>
        <h4 className='titleView'>Lista de Objetos</h4>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Catálogo</th>
                        <th>Imagen</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr> */}
                    </tbody>
                </Table>
        </div>
        </>
    )

}

export default ObjetoView;