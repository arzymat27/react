import React from 'react';
import i from '.././icons/Icons.module.css'

import Find from '../../img/Find.png'
import aetna from '../../img/aetna.png'
import oscar from '../../img/oscar.png'
import United from '../../img/United.png'
import Optum from '../../img/Optum.png'
import Harvard from '../../img/Harvard.png'
import line from '../../img/line.png'

const Icons = () => {
    return( 
        <div>
            <div className={i.icons}>
                <img src={Find}/>
                <img src={aetna}/>
                <img src={oscar}/>
                <img src={United}/>
                <img src={Optum}/>
                <img src={Harvard}/>
            </div>
            <div className={i.line}>
                <img src={line}/>
            </div>
        </div>

    );
}

export default Icons;
