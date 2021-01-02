import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className= 'right-block'>
                    <p style={{fontSize : 25}}>Phone</p>
                    <p style={{color: 'red'}}>Rs 9999</p>
                    <p style={{color : 'blue'}}>Qty : 1</p>
                </div>
                <div className='cart-item-actions'>
                    {/* buttons */}
                </div>
                {/* <div className='Person'>
                    <h1>name</h1>
                    <h4>age</h4>
                </div> */}
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