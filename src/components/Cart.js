import { render } from '@testing-library/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove, getTotal, clearCart, clearCartIcon } from './features/addToCart'



function Cart() {
    const cart = useSelector((state) => state.cart)
    const total = useSelector((state) => state.cart.cartTotalAmount)
    const count = useSelector((state) => state.cart.value)

    

    const dispatch = useDispatch()

    const handleDeleteFromCart = (cartItem) => {
        dispatch(remove(cartItem));
    }

    const handleClearCart = () => {
      dispatch(clearCart());
    }

    const handleClearCartIcon = () => {
      dispatch(clearCartIcon());
    }


    const handleGetTotal = () => {
      dispatch(getTotal());
    }

useEffect(() => {
  dispatch(getTotal());
  getTotal();
}, [total, dispatch]);




const handleRender = () => {
  function cartEmpty() {
    return <h1 className='emptyshopcart'>Your shopping cart is empty.</h1>
  }

  function cartIsNotEmpty() {

    return (cart.cartItems.map(cartItem => (
      <div key={cartItem.id} className="cartitem">
      <div className='productnameimg'>
        <img src={cartItem.url} />
        <div className='productpricetitle'>
           <h1>{cartItem.title}</h1>
           <h3>${cartItem.price}</h3>
           
        </div>
        <p onClick={() => {
          handleDeleteFromCart(cartItem);
          dispatch(handleGetTotal) }
           } className='remove'>X</p>
      </div>
      
      </div>
      
          )))
          }
  

  if (total > 0) {
    return (
      cartIsNotEmpty()
    )} else {
      return (
        cartEmpty()
      )
    } 
  
  
}

const handleRenderTotal = () => {
    function renderTotal() {
    return ( <div className='checkoutbuttons'>
      <p className='subtotalitems'> 
        <span>Subtotal:</span> ${total} 
        <span>Items in cart:</span> {count}
      </p>
      <div className='cartbtns'>
      <button className='handleClear' onClick={() =>{
        handleClearCart();
        handleClearCartIcon();
        dispatch(handleGetTotal());

      }}>
        Clear Cart
        </button>
        <button className='checkOut'>

            CHECKOUT
          </button>
          </div>
        </div> )
  }

  if (total > 0) {
    return (
      renderTotal()
    )
  }
}





  return (
    <div className='cartwrapper'>
      <h1>Shopping Cart</h1>
      <div className='productsummary'>
        
        </div>
      <hr></hr>
      {handleRender()}
      <hr></hr>
      <div className='subtotal'>
      {handleRenderTotal()}
      </div>

    {/*
        {cart.cartItems.map(cartItem => (
            <div key={cartItem.id} className="cartitem">
            <div className='productnameimg'>
              <img src={cartItem.url} />
              <div>
                 <h1>{cartItem.title}</h1>
                 <h3>${cartItem.price}</h3>
                 
              </div>
              <p onClick={() => {
                handleDeleteFromCart(cartItem);
                dispatch(handleGetTotal) }
                 } className='remove'>X</p>
            </div>
            
            </div>
            
                ))} */}
                
        
    </div>
  )
}

export default Cart