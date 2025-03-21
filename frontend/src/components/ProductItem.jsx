import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, price, name }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link 
            className="text-gray-700 cursor-pointer flex flex-col items-center border p-3 rounded-md h-full"
            to={`/product/${id}`}
        >
            {/* Image Container */}
            <div className="w-full h-[200px] flex justify-center items-center overflow-hidden">
                <img 
                    className="h-full w-auto object-cover" 
                    src={image[0]} 
                    alt={name} 
                />
            </div>

            {/* Name with Fixed Height */}
            <div className="h-[50px] flex items-center justify-center text-center">
                <p className="pt-3 pb-1 text-sm">{name}</p>
            </div>

        </Link>
    );
};

export default ProductItem;
