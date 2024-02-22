
import productsData from './products.json';
import './productCard.css';

const ProductCard = () => {
  return (
   
    <div className="product-container">
      {productsData.products.map((product, index) => (
        <div key={index} className="card">
          <img   
            src={product.imagen}   
            alt={product.nombre}   
          />
          <div className="product-details">
            <h3 className="product-title">{product.nombre}</h3>
            <p className="product-description">{product.descripcion}</p>
            <div className="price-details">
              <span className="price">{product.precio.monto} {product.precio.moneda}</span>
              <button className="like-button">
                <img src="/images/heart-icon.svg" alt="Me gusta" id="heart-icon" />
              </button>
            </div>
          </div>
          <div className="add-to-cart">
            <button className="add-to-cart-button">
              añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default ProductCard;