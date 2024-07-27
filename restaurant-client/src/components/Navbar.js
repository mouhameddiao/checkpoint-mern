import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importation de l'icône de panier

const Navbar = () => {
    return (
        <nav className="bg-blend-lighten p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold flex items-center">
                    <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024/https://fatimahfood.com/wp-content/uploads/2022/05/Asset-18-1024x472.png" alt="Restaurant Logo" className="w-15 h-10 mr-4" />
                
                </Link>
                <div className="flex items-center">
                    <Link to="/" className="text-black text-xl font-bold hover:text-red-600 mx-2">Home</Link>
                    
                    <Link to="/login" className="text-black text-xl font-bold hover:text-red-600 mx-2">Login</Link>
                    <Link to="/Menu" className="text-black text-xl font-bold hover:text-red-600 mx-2">Menu</Link>
                    <Link to="/Contact" className="text-black text-xl font-bold hover:text-red-600 mx-2">Contact</Link>
                    <Link to="/cart" className="text-black text-xl font-bold hover:text-red-600 mx-2">
                        <FaShoppingCart /> {/* Utilisation de l'icône de panier */}
                    </Link> {/* Fermez cette balise */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
