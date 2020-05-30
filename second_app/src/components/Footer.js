import React from 'react';

const Footer=(props)=>{
    return(
        <center>
            <p>&copy;{props.title}-{props.year}</p>
        </center>
    )
}


export default Footer;