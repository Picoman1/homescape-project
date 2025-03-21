import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

   
   const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if(response.data.success){
                setProducts(response.data.products);
            }else{
                console.log('Error:', response.data.message)
            }
           
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        getProductsData();
    }, []);
    const value = {
        products, currency,
        search, setSearch, showSearch, setShowSearch, backendUrl,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
