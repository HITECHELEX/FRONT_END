import React from 'react';
import { Card, Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaShoppingCart, FaInfoCircle, FaStar, FaRegStar } from 'react-icons/fa';

const ProductCard = ({ product, wishlist, toggleWishlist, categoryInfo, typeInfo, formatCurrency, renderStars, showAlertMessage }) => {
  return (
    <Card className="h-100 product-card shadow-sm">
      <div className="product-badges">
        {product.isNew && <Badge pill variant="danger">New</Badge>}
        {product.stock < 10 && <Badge pill variant="warning">Low Stock</Badge>}
        <Badge pill variant="info">{categoryInfo.icon} {categoryInfo.name}</Badge>
      </div>

      <Button
        variant="link"
        className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
        onClick={() => toggleWishlist(product.id)}
        aria-label={wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <FaStar />
      </Button>

      <div className="product-image-container">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          onError={(e) => { e.target.src = '/img/products/placeholder.jpg'; }}
        />
      </div>

      <Card.Body>
        <Card.Title className="mb-1">{product.name}</Card.Title>
        <span className="text-primary font-weight-bold">{formatCurrency(product.price)}</span>
        <Badge variant="secondary">{typeInfo}</Badge>
        {renderStars(product.rating)}

        <Card.Text className="text-muted my-3">{product.description}</Card.Text>

        <div className="mb-3">
          <h6 className="font-weight-bold d-flex align-items-center">
            Key Features
            <OverlayTrigger placement="top" overlay={<Tooltip>Main features of this product</Tooltip>}>
              <span className="ml-2 text-info"><FaInfoCircle size={14} /></span>
            </OverlayTrigger>
          </h6>
          <ul className="features-list">
            {product.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>

        <div className="d-flex justify-content-between text-muted small">
          <span>Stock: {product.stock} units</span>
          <span>Warranty: {product.warranty}</span>
        </div>
      </Card.Body>

      <Card.Footer className="bg-white border-top-0 pt-0">
        <div className="d-flex">
          <Button variant="primary" className="flex-grow-1 mr-2">
            <FaShoppingCart className="mr-2" /> Enquire Now
          </Button>
          <Button variant="outline-secondary" onClick={() => showAlertMessage(`Details for ${product.name} would show here`)}>
            Details
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
