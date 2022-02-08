import React from 'react';
import '.././icons/Icons.css'

import Find from '../../img/Find.png'
import aetna from '../../img/Find.png'
import oscar from '../../img/oscar.png'
import United from '../../img/United.png'
import line from '../../img/line.png'

const Icons = () => {
    return (
        <div>
            <div className='icons'>
                <img src={Find} />
                <img src={aetna} />
                <img src={oscar} />
                <img src={United} />
            </div>
            <div>
                <img src={line}/>
            </div>
        </div>

    );
}

export default Icons;
