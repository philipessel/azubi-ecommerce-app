import React from 'react'
import Button from './Button'


export default function Cart(props) {


    return (
        <div className="CartStyle">
            <img src={props.img} />

            <div className="Cartdetails">
                <h3>{props.product}</h3>
                <p> {props.productDescription} </p>

                <div>
                    <div className="Inline-button-p-tag "> <Button className="Cartbutton" name="Place Order" /></div>
                    <div className="Inline-button-p-tag "> <p className="inline-p-tags" > {props.price}</p></div>
                </div>
            </div>

        </div>
    )
}

