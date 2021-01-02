import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title :'Phone',
            price : 9999,
            qty : 1,
            image : ''
        }
    }

    increaseQuantity= () => {
        console.log('this', this.state)
    }

    render(){
        // object destructuring
        const {title, price, qty} = this.state
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className= 'right-block'>
                    <p style={{fontSize : 25}}>{title}</p>
                    <p style={{color: 'red'}}>{price}</p>
                    <p style={{color : 'blue'}}>Qty: {qty}</p>
                </div>
                <div className='cart-item-actions'>
                    {/* buttons */}
                    {/* <img alt='increase' className='action-icons' src='https://www.flaticon.com/svg/static/icons/svg/1057/1057216.svg' onClick='this.increaseQuantity.bind(this)'></img>
                    <img alt='decrease' className='action-icons' src='https://www.flaticon.com/svg/static/icons/svg/561/561240.svg'></img>
                    <img alt='delete' className='action-icons' src='https://www.flaticon.com/svg/static/icons/svg/1215/1215092.svg'></img> */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            />
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : 'grey'
    }
}

export default CartItem;