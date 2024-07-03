import React from 'react'
import '../index.css'
import '../Components/Header.jsx'
import Header from '../Components/Header.jsx'

function Cart(props) {

    const no = JSON.parse(localStorage.getItem('cart'))

    props.setCartlen(no.length)

    console.log("cart accessed");
    // const [cartlen,setCartlen] = useState(()=>{
  
    //   if (!no) {
    //     return 0
    //   }
    //   else{
    //     return no.length
    //   }
  
    // })

  return (
   <span>
      <button className='navtopbuttons'>Cart</button>
        <div className="cartCount">{props.cartlen}</div>
</span>
  )
}

export default Cart
