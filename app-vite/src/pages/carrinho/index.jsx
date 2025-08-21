import React, { useEffect, useState, useCallback } from 'react';

// --- Início dos Componentes de Layout (Placeholders) ---
// Como não tenho acesso aos seus arquivos de layout, criei versões simples aqui.
// Você pode substituir estes pelos seus imports originais.

const Header = () => (
    <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-800">Ice Point</div>
                <div className="text-gray-600">Meu Carrinho</div>
            </div>
        </nav>
    </header>
);

const Footer = () => (
    <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-6 py-4 text-center text-gray-600">
            &copy; 2024 Ice Point. Todos os direitos reservados.
        </div>
    </footer>
);

const PageTitle = ({ data }) => (
    <h1 className="text-3xl font-bold text-gray-800 my-8">{data}</h1>
);

const Summary = ({ total }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
        <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>R$ {total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
            <span>Frete</span>
            <span>Grátis</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Finalizar Compra
        </button>
    </div>
);

const TableRow = ({ data, handleRemoveItem, handleUpdateItem }) => {
    const { _id, image, name, price, quantity } = data;
    const total = price * quantity;

    return (
        <tr className="border-b">
            <td className="py-4 px-2">
                <div className="flex items-center">
                    <img className="h-16 w-16 mr-4 object-cover rounded" src={image} alt={name} />
                    <span className="font-semibold">{name}</span>
                </div>
            </td>
            <td className="py-4 px-2">R$ {price.toFixed(2)}</td>
            <td className="py-4 px-2">
                <div className="flex items-center">
                    <button onClick={() => handleUpdateItem(data, 'decrease')} className="border rounded-md py-1 px-3 mr-2">-</button>
                    <span className="text-center w-8">{quantity}</span>
                    <button onClick={() => handleUpdateItem(data, 'increase')} className="border rounded-md py-1 px-3 ml-2">+</button>
                </div>
            </td>
            <td className="py-4 px-2">R$ {total.toFixed(2)}</td>
            <td className="py-4 px-2">
                <button onClick={() => handleRemoveItem(data)} className="text-red-500 hover:text-red-700">
                    Remover
                </button>
            </td>
        </tr>
    );
};

// --- Fim dos Componentes de Layout ---


// --- Início da API Mock (Simulação) ---
// Simula uma API para que o código funcione de forma independente.
// Mantém os dados do carrinho em memória.
let mockCartData = [];
let nextId = 1;

const api = {
    get: (url) => {
        console.log(`GET: ${url}`);
        return Promise.resolve({ data: mockCartData });
    },
    post: (url, data) => {
        console.log(`POST: ${url}`, data);
        const existingItem = mockCartData.find(item => item.name === data.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const newItem = { ...data, _id: `mock_${nextId++}` };
            mockCartData.push(newItem);
        }
        return Promise.resolve({ data: mockCartData });
    },
    put: (url, data) => {
        console.log(`PUT: ${url}`, data);
        const id = url.split('/').pop();
        const itemIndex = mockCartData.findIndex(item => item._id === id);
        if (itemIndex !== -1) {
            if (data.quantity === 0) {
                 mockCartData.splice(itemIndex, 1);
            } else {
                mockCartData[itemIndex] = { ...mockCartData[itemIndex], ...data };
            }
        }
        return Promise.resolve({ data: mockCartData });
    }
};
// --- Fim da API Mock ---


function Carrinho() {

    const [cart, setCart] = useState([]);

    // Lista de todos os produtos disponíveis para adicionar ao carrinho
    // As imagens locais foram substituídas por placeholders.
    const availableProducts = [
        { name: 'Abacaxi Suíço', image: 'https://placehold.co/100x100/F7D046/333?text=Abacaxi', category: 'Leite', price: 3.50 },
        { name: 'Açaí', image: 'https://placehold.co/100x100/4B0082/FFF?text=Açaí', category: 'Leite', price: 4.00 },
        { name: 'Ameixa', image: 'https://placehold.co/100x100/8A2BE2/FFF?text=Ameixa', category: 'Leite', price: 3.25 },
        { name: 'Amendoim', image: 'https://placehold.co/100x100/D2B48C/333?text=Amendoim', category: 'Leite', price: 3.75 },
        { name: 'Banana', image: 'https://placehold.co/100x100/FFD700/333?text=Banana', category: 'Leite', price: 3.00 },
        { name: 'Blue Ice', image: 'https://placehold.co/100x100/00BFFF/FFF?text=Blue+Ice', category: 'Leite', price: 3.50 },
        { name: 'Chocolate', image: 'https://placehold.co/100x100/7B3F00/FFF?text=Chocolate', category: 'Leite', price: 3.75 },
        { name: 'Coco', image: 'https://placehold.co/100x100/FFFFFF/333?text=Coco', category: 'Leite', price: 3.25 },
        { name: 'Coco Queimado', image: 'https://placehold.co/100x100/8B4513/FFF?text=Coco+Q', category: 'Leite', price: 3.50 },
        { name: 'Creme', image: 'https://placehold.co/100x100/FFFACD/333?text=Creme', category: 'Leite', price: 3.00 },
        { name: 'Cupuaçu', image: 'https://placehold.co/100x100/967969/FFF?text=Cupuaçu', category: 'Leite', price: 4.25 },
        { name: 'Goiaba', image: 'https://placehold.co/100x100/FF6347/FFF?text=Goiaba', category: 'Leite', price: 3.25 },
    ];

    const fetchData = useCallback(() => {
        api.get('/cart').then((response) => setCart(response.data));
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleRemoveItem = (item) => {
        const newData = { ...item, quantity: 0 };
        api.put(`/cart/${item._id}`, newData).then(() => {
            fetchData();
        });
    }

    const handleUpdateItem = (item, action) => {
        let newQuantity = item.quantity;
        if (action === 'increase') {
            newQuantity += 1;
        }
        if (action === 'decrease') {
            newQuantity = Math.max(0, newQuantity - 1);
        }

        const newData = { ...item, quantity: newQuantity };
        
        // Se a quantidade for 0, o item será removido pela API mock
        api.put(`/cart/${item._id}`, newData).then(() => {
            fetchData();
        });
    }

    const handleAddItem = (productToAdd) => {
        const productObject = {
            name: productToAdd.name,
            image: productToAdd.image,
            category: productToAdd.category,
            price: productToAdd.price,
            quantity: 1,
        };

        api.post('/cart', productObject).then(() => {
            fetchData();
        });
    };

    const getTotal = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };
    const cartTotal = getTotal();

    return (
        <>
            <Header />
            <main className="container mx-auto px-6">
                <PageTitle data={'Nossos Produtos'} />
                <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12'>
                    {availableProducts.map((product) => (
                        <div key={product.name} className='bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center'>
                            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-full mb-4" />
                            <h3 className="font-semibold h-10">{product.name}</h3>
                            <p className="text-gray-600 my-2">R$ {product.price.toFixed(2)}</p>
                            <button onClick={() => handleAddItem(product)} className="mt-auto w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors text-sm">
                                Adicionar
                            </button>
                        </div>
                    ))}
                </section>

                <PageTitle data={'Seu carrinho'} />
                <div className='lg:flex lg:gap-8'>
                    <section className="flex-grow">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <table className="w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-2">Produto</th>
                                        <th className="py-2 px-2">Preço</th>
                                        <th className="py-2 px-2">Quantidade</th>
                                        <th className="py-2 px-2">Total</th>
                                        <th className="py-2 px-2"></th>
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
                                            <td colSpan={'5'} className="text-center py-8 text-gray-500">
                                                Seu carrinho está vazio.
                                            </td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    {cart.length > 0 && (
                        <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
                            <Summary total={cartTotal} />
                        </aside>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

// O componente principal da aplicação
function App() {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <Carrinho />
        </div>
    );
}

export default App;
