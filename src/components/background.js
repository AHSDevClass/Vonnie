import React, { Component } from 'react';

class Background extends Component {

    render() {
        return(
            <div className="background">
               <div className='background__sun'></div>
               <div className='background__clouds'></div>
               <div className='background__ocean'></div>
            </div>
        )
    }
}

export default Background;