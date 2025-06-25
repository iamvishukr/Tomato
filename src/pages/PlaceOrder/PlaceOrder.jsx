import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9'
  };

  const formStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '1000px'
  };

  const sectionStyle = {
    flex: 1,
    minWidth: '280px'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem'
  };

  const multiFieldStyle = {
    display: 'flex',
    gap: '1rem'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem'
  };

  const totalRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.75rem 0',
    fontSize: '1rem'
  };

  const buttonStyle = {
    width: '100%',
    padding: '1rem',
    marginTop: '2rem',
    backgroundColor: '#0070f3',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <div style={sectionStyle}>
          <p style={titleStyle}>Delivery Information</p>
          <div style={multiFieldStyle}>
            <input style={inputStyle} type="text" placeholder='First Name' />
            <input style={inputStyle} type="text" placeholder='Last Name' />
          </div>
          <input style={inputStyle} type="email" placeholder='Email' />
          <input style={inputStyle} type="text" placeholder='Street' />
          <div style={multiFieldStyle}>
            <input style={inputStyle} type="text" placeholder='City' />
            <input style={inputStyle} type="text" placeholder='State' />
          </div>
          <div style={multiFieldStyle}>
            <input style={inputStyle} type="text" placeholder='Zip code' />
            <input style={inputStyle} type="text" placeholder='Country' />
          </div>
          <input style={inputStyle} type="text" placeholder='Phone' />
        </div>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cart Total</h2>
          <div>
            <div style={totalRowStyle}>
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div style={totalRowStyle}>
              <p>Delivery Fee</p>
              <p>$2</p>
            </div>
            <div style={totalRowStyle}>
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button style={buttonStyle}>Proceed to Payment</button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
