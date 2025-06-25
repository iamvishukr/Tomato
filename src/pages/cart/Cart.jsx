import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const styles = {
    cart: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    cartItems: {
      marginBottom: '2rem'
    },
    cartItemsTitle: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr 1fr',
      gap: '1rem',
      alignItems: 'center',
      fontWeight: 'bold'
    },
    cartItemsItem: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr 1fr',
      gap: '1rem',
      alignItems: 'center',
      marginTop: '1rem'
    },
    image: {
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      borderRadius: '8px'
    },
    cross: {
      cursor: 'pointer',
      color: 'red',
      fontWeight: 'bold',
      fontSize: '1.2rem'
    },
    cartBottom: {
      background: '#f5f5f5',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)'
    },
    cartTotal: {
      marginBottom: '1rem'
    },
    cartTotalDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '1rem 0'
    },
    button: {
      width: '100%',
      padding: '1rem',
      backgroundColor: '#0070f3',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '1rem'
    },
    promoContainer: {
      marginTop: '2rem'
    },
    promoInput: {
      display: 'flex',
      gap: '1rem',
      marginTop: '0.5rem'
    },
    input: {
      flex: 1,
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '1rem'
    },
    submitBtn: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.cart}>
      <div style={styles.cartItems}>
        <div style={styles.cartItemsTitle}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div style={styles.cartItemsItem}>
                  <img src={item.image} alt={item.name} style={styles.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p style={styles.cross} onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div style={styles.cartBottom}>
        <div style={styles.cartTotal}>
          <h2>Cart Totals</h2>
        </div>
        <div style={styles.cartTotalDetails}>
          <p>SubTotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div style={styles.cartTotalDetails}>
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
        </div>
        <hr />
        <div style={styles.cartTotalDetails}>
          <b>Total</b>
          <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
        </div>
        <button style={styles.button} onClick={() => navigate('/order')}>
          PROCEED TO CHECKOUT
        </button>
        <div style={styles.promoContainer}>
          <p>If you have a promo code, enter it here</p>
          <div style={styles.promoInput}>
            <input type="text" placeholder="Promo code" style={styles.input} />
            <button style={styles.submitBtn}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
