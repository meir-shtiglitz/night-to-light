import React, { Component } from "react";

class LightCube extends Component {
    render() { 
        const p =this.props;
        const size = 11 - p.numRows;
        return ( 
            <div style={{height:`${size}em`, width:`${size}em`}} onClick={p.click} className={p.class}></div>
         );
    }
}
 
export default LightCube;

