import React from 'react'
import Button from './Button'

export default function SideBar() {
    return (

        <div className="side-bar">

            <div className="side-button-flex">
                <Button name="Login" />
                <p>Primary Button</p>
            </div>
            <div className="side-button-flex">
                <Button name="Login" />
                <p>Hover Button</p>
            </div>

        </div>

    )
}
