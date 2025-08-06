import React from 'react';
import abacaxisuico from '../../assets/Imagens/Produtos/Cards/Leite/abacaxisuico.png';
import acai from '../../assets/Imagens/Produtos/Cards/Leite/acai.png';
import ameixa from '../../assets/Imagens/Produtos/Cards/Leite/ameixa.png';

const TableRow = ({ data, handleRemoveItem, handleUpdateItem }) => {
  return (
    <tr>
      <td>
        <div className='product'>
          <img src={data.image} alt={data.name} height={120} width={100} />
          <div className='info'>
            <div className='name'>{data.name}</div>
            <div className='category'>{data.category}</div>
          </div>
        </div>
      </td>
      <td>R$ {data.price}</td>
      <td>
        <div className='qty'>
          <button onClick={() => {
            handleUpdateItem(data, 'decrease')
          }}>
            <i className='bx bx-minus'></i>
          </button>
          <span>{data.quantity}</span>
          <button onClick={() => {
            handleUpdateItem(data, 'increase')
          }}>
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>R$ {data.price * data.quantity}</td>
      <td>
        <button className='remove' onClick={() => {
          handleRemoveItem(data)
        }}>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
