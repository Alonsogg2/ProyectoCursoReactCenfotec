import React from 'react';

const List = () => {
  var listaElementos=[1,2,3,4,5,4,7];
  listaElementos=listaElementos.map((elemento)=>
   <li key={elemento.toString()}>
       Elemento {elemento}
   </li>
  );
  return (<ul>{listaElementos}</ul>);
};

export default List;
