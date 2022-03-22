import React from 'react'
import carticon from './cartblue.png'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  const count = useSelector((state) => state.cart.value)


  return (
    <div className='navbar'>
        <div>
            <ul>
                <a href="/"><li>HOME</li></a>
                <a href="custom"><li>CUSTOM REQUESTS</li></a>
                <a href="https://discord.com/invite/KAnDWgTTtV"><li>DISCORD</li></a>
            </ul>
        </div>
        <div className='navbarshop'>
        <a href="shop"><button>
            SHOP
        </button>
        </a>
        <div className='carticon'>
          <a href="cart">
            <img src={carticon} />
            <p> {count} </p>
            </a>
          </div>

        </div>
    </div>
  )
}
