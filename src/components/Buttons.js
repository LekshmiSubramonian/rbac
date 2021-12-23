import React from 'react'
import {Button} from 'react-bootstrap';


function Buttons(props) {
    return (
        <>
            <Button variant={props.variant}>{props.name}</Button>
        </>
    )
}

export default Buttons