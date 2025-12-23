import React, { useState } from 'react';
import { Funnel, ShoppingCart, ArrowRight } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import productImg from '../assets/product-placeholder.png'; // iPhone white
import productSamsung from '../assets/product-samsung.png';
import './ProductGrid.css';

const PRODUCTS = [
    { id: 1, name: 'iPhone 14 Pro Max', price: 1099, condition: 'Parfait état', brand: 'Apple', image: productImg, colors: ['#594F63', '#F0F2F2', '#403E3D'] },
    { id: 2, name: 'iPhone 13', price: 649, condition: 'Très bon état', brand: 'Apple', image: productImg, colors: ['#F2F2F2', '#212121', '#E3C5C5'] },
    { id: 3, name: 'Galaxy S23 Ultra', price: 899, condition: 'Parfait état', brand: 'Samsung', image: productSamsung, colors: ['#1C1C1C', '#F5F5F7', '#5E6652'] },
    { id: 4, name: 'iPhone 12', price: 459, condition: 'Bon état', brand: 'Apple', image: productImg, colors: ['#000000', '#FFFFFF', '#AEE1CD'] },
    { id: 5, name: 'iPhone 11', price: 329, condition: 'Très bon état', brand: 'Apple', image: productImg, colors: ['#F9E5C9', '#1C1C1C'] },
    { id: 6, name: 'Galaxy S22', price: 549, condition: 'Parfait état', brand: 'Samsung', image: productSamsung, colors: ['#2C2C2C', '#F2F2F2'] },
    { id: 7, name: 'Pixel 7 Pro', price: 599, condition: 'Comme neuf', brand: 'Google', image: productSamsung, colors: ['#3A3A3A', '#F1F1F1'] }, // Reusing samsung image as generic android for now
    { id: 8, name: 'iPhone 14', price: 799, condition: 'Parfait état', brand: 'Apple', image: productImg, colors: ['#A0B4F5', '#F2F2F2'] },
];

const ProductModal = ({ product, onClose, onLocate }) => {
    if (!product) return null;
    return (
        <div className="modal-overlay fade-in">
            <div className="modal-content glass-card slide-up">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-body">
                    <div className="modal-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="modal-info">
                        <h3>{product.name}</h3>
                        <div className={`condition-tag ${product.condition.includes('Parfait') ? 'premium' : ''}`}>{product.condition}</div>
                        <p className="price-tag">{product.price} €</p>

                        <div className="color-options">
                            <span>Couleurs :</span>
                            <div className="colors-row">
                                {product.colors.map((c, i) => (
                                    <div key={i} className="color-dot" style={{ backgroundColor: c }}></div>
                                ))}
                            </div>
                        </div>

                        <p className="stock-info text-green">En stock • Garantie 12 mois</p>

                        <button className="btn-buy-modal" onClick={onLocate}>
                            Réserver en boutique <ArrowRight size={18} weight="bold" />
                        </button>
                        <p className="modal-note">Payez et récupérez votre appareil en magasin.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductGrid = () => {
    const [filterBrand, setFilterBrand] = useState('All');
    const [filterCondition, setFilterCondition] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const filteredProducts = PRODUCTS.filter(p => {
        return (filterBrand === 'All' || p.brand === filterBrand) &&
            (filterCondition === 'All' || p.condition === filterCondition);
    });

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleLocate = () => {
        navigate('/locate');
    };

    return (
        <div className="product-layout">
            <aside className="filters-sidebar glass-card">
                <h3>Filtres <Funnel size={18} /></h3>

                <div className="filter-group">
                    <label>Marque</label>
                    <select value={filterBrand} onChange={(e) => setFilterBrand(e.target.value)}>
                        <option value="All">Toutes</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Google">Google</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label>État</label>
                    <select value={filterCondition} onChange={(e) => setFilterCondition(e.target.value)}>
                        <option value="All">Tous les états</option>
                        <option value="Parfait état">Parfait état</option>
                        <option value="Très bon état">Très bon état</option>
                        <option value="Bon état">Bon état</option>
                    </select>
                </div>
            </aside>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card fade-in-up" onClick={() => handleProductClick(product)}>
                        <div className="product-badge">{product.condition}</div>
                        <div className="product-image-container">
                            <img src={product.image} alt={product.name} className={product.brand === 'Samsung' ? 'img-android' : ''} />
                        </div>
                        <div className="product-info">
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">{product.price} €</div>
                            <button className="btn-buy">Voir <ArrowRight /></button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onLocate={handleLocate}
                />
            )}
        </div>
    );
};

export default ProductGrid;
