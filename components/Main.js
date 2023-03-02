

import React from 'react'
import Cart from './Cart'



export default function main() {
    return (
        <div className="main">

            <input type={"search"} placeholder={"Search products"}></input>


            <div className="all-cart-on-main">

                <Cart
                    img="../image/menshirt.png"
                    product="Men Shirt"
                    productDescription="Lorem timpanicum ibanumbra gelum  absulam navigitus abalus"
                    /*cartButton=" "*/
                    price="$29.00" />

                <Cart
                    img="../image/nikesneaker.png"
                    product="Sneaker Nike"
                    productDescription="Lorem timpanicum ibanumbra gelum  absulam navigitus abalus"
                    /*cartButton=" "*/
                    price="$39.00" />

                <Cart
                    img="../image/pumasneaker.png"
                    product="Puma Sneaker"
                    productDescription="Lorem timpanicum ibanumbra gelum  absulam navigitus abalus"
                    /*cartButton=" "*/
                    price="$44.00" />

                <Cart
                    img="../image/alonzidress.png"
                    product="Aronzi Dress"
                    productDescription="Lorem timpanicum ibanumbra gelum  absulam navigitus abalus"
                    /*cartButton=" "*/
                    price="$13.00" />

                <Cart
                    img="../image/watch.png"
                    product="Watch"
                    productDescription="Lorem timpanicum ibanumbra gelum  absulam navigitus abalus"
                    /*cartButton=" "*/
                    price="$19.00" />

                <Cart img="../image/cap.png"
                    product="Men Cap"
                    productDescription="Lorem timpanicum ibanumbra gelum  absulam navigitus abalus"
                    /*cartButton=" "*/
                    price="$10.00" />

                <Cart img="../image/jeans.png"
                    product="Ladies Jeans"
                    productDescription="Lorem timpanicum ibanumbra gelum  absulam navigitus abalus"
                    /*cartButton=" "*/
                    price="$40.00" />

                <Cart img="../image/longsleeves.png"
                    product="Long Sleeve"
                    productDescription="Lorem timpanicum ibanumbra gelum  absulam navigitus abalus"
                    /*cartButton=" "*/
                    price="$35.00" />




            </div>

        </div>
    )
}
