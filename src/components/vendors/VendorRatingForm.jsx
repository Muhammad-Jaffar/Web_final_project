import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const VendorRatingForm = ({ vendor, onSubmit, onCancel }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return alert('Please select a star rating.');
    onSubmit({ vendorId: vendor.id, rating, comment });
  };

  return (
    <Card>
      <h3 style={{ marginBottom: '16px' }}>Rate Vendor: {vendor.name}</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Overall Rating</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={32}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                fill={(hoverRating || rating) >= star ? '#fbbf24' : 'transparent'}
                color={(hoverRating || rating) >= star ? '#fbbf24' : '#cbd5e1'}
                style={{ cursor: 'pointer', transition: 'all 0.2s' }}
              />
            ))}
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Comments (Optional)</label>
          <textarea 
            rows={4}
            className="input-field" 
            placeholder="Write your review here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: '100%', resize: 'vertical' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="button" onClick={onCancel} className="btn" style={{ backgroundColor: '#6c757d' }}>Cancel</button>
          <Button type="submit">Submit Rating</Button>
        </div>
      </form>
    </Card>
  );
};

export default VendorRatingForm;
