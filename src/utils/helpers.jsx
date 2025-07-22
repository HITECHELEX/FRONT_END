import { FaStar, FaRegStar } from 'react-icons/fa';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

export const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="d-flex align-items-center">
      {[...Array(5)].map((_, i) => {
        const icon = i < full || (i === full && half) ? <FaStar className="text-warning" /> : <FaRegStar className="text-warning" />;
        return (
          <OverlayTrigger
            key={i}
            placement="top"
            overlay={<Tooltip>{rating} out of 5</Tooltip>}
          >
            <span>{icon}</span>
          </OverlayTrigger>
        );
      })}
      <span className="ml-2 text-muted">({rating.toFixed(1)})</span>
    </div>
  );
};
