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
                    <img alt='increase' className='action-icons' src='https://www.flaticon.com/svg/static/icons/svg/1057/1057216.svg'></img>
                    <img alt='decrease' className='action-icons' src='https://www.flaticon.com/svg/static/icons/svg/561/561240.svg'></img>
                    <img alt='delete' className='action-icons' src='https://www.flaticon.com/svg/static/icons/svg/1215/1215092.svg'></img>

                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height : 147,
        width : 110,
        borderRadius : 4,
        background : 'grey'
    }
}

export default CartItem;