export const ADD_CATALOG = '[CATALOG APP] ADD CATALOG';


export const addCatalog=(catalog)=>{
    return dispatch => {
        fetch('/Catalog/AddCatalog',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(catalog),
        })
        .then((response)=>{
            dispatch({
				type: ADD_CATALOG,
				ind_status_add_catalog: response.status
			})
        })
        .then(
            (error)=>{
                dispatch({
                    type: ADD_CATALOG,
                    ind_status_add_catalog: error.response.status,
					error_crear_catalog: error.response.data
                })
            }
            )
    }
}

// export const UpdateCatalog=(catalog)=>{
//     fetch('https://localhost:7137/Catalog/UpdateCatalog',{
//         method: 'POST',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify(catalog),
//     })
//     .then((resultado)=>{
//         let nuevaLista =[];
//         nuevaLista.push(resultado);
//     })
//     .then(
//         (errores)=>{

//         }
//         )
// }

// export const DeleteCatalog=(catalog)=>{
//     fetch('https://localhost:7137/Catalog/DeleteCatalog',{
//         method: 'DELETE',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify(catalog),
//     })
//     .then((resultado)=>{
//         let nuevaLista =[];
//         nuevaLista.push(resultado);
//     })
//     .then(
//         (errores)=>{

//         }
//         )
// }

// export const FindCatalog=(catalog)=>{
//     fetch('https://localhost:7137/Catalog/FindCatalog',{
//         method: 'GET',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify(catalog),
//     })
//     .then((resultado)=>{
//         let nuevaLista =[];
//         nuevaLista.push(resultado);
//     })
//     .then(
//         (errores)=>{

//         }
//         )
// }

// export const GetCatalogs=()=>{
//     fetch('https://localhost:7137/Catalog/GetCatalogs')
//     .then((resultado)=>{
//         let nuevaLista =[];
//         nuevaLista.push(resultado);
//     })
//     .then(
//         (errores)=>{

//         }
//         )
// }