import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import './styles.scss';
import PageTitle from '../../layout/PageTitle';
import Summary from '../../layout/Summary';
import TableRow from '../../layout/TableRow';
import React, { useEffect, useState } from 'react';
import {api} from './provider';
import axios from 'axios';
import abacaxisuico from '../../assets/Imagens/Produtos/Cards/Leite/abacaxisuico.png';


function Carrinho(){

    const [cart, setCart] = useState([]);

    const productObject = {
        name: 'produto',
        image: abacaxisuico,
        category: 'categoria',
        price: 2,
        quantity: 0,
    };

    const fetchData = () => {
        api.get('/cart').then((response) => setCart(response.data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleRemoveItem = (item) => {
        console.log('removeu');
        console.log({item});

        let newQuantity = 0;
        const newData = {...item, quantity: newQuantity};
        delete newData._id;

        api.put(`/cart/${item._id}`, newData).then((response) => {
            console.log({response});
            fetchData();
        });

    }

    const handleUpdateItem = (item, action) => {
        console.log({item});
        let newQuantity = item.quantity
        if (action === 'increase'){
            newQuantity += 1;
        }
        if (action === 'decrease'){
            if(newQuantity === 0){
                return;
            }
            newQuantity -= 1;
        }

        const newData = {...item, quantity: newQuantity};
        delete newData._id;

        api.put(`/cart/${item._id}`, newData).then((response) => {
            console.log({response});
            fetchData();
        });
    }

    const handleAddItem = () => {
        console.log('disparou');
        api.post('/cart', productObject).then((response) => {
            console.log(response);
            fetchData();
        });
    };

    const getTotal = () => {
        let sum = 0;

        console.log('get total');

        for (let item of cart) {
            sum += item.price * item.quantity;
        }

        return sum;
    };
    const cartTotal = getTotal();

    return(
        <>
            <Header />
            <main>
                <PageTitle data={'Seu carrinho'} />
                <div className='content'>
                <section>
                    <table>
                    <thead>
                        <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <TableRow 
                                key={item._id} 
                                data={item} 
                                handleRemoveItem={handleRemoveItem} 
                                handleUpdateItem={handleUpdateItem}
                            />
                        ))}
                        {cart.length === 0 && (
                            <tr>
                                <td colSpan={'5'} style={{textAlign: 'center'}}>Funcionalidade ainda não está disponível...</td>
                            </tr>)}
                    </tbody>
                    </table>
                </section>
                <aside>
                    <Summary total={cartTotal} />
                </aside>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Carrinho