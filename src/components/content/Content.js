import React from 'react';
import t from '../../components/content/Content.module.css'

import whyAlma from '../../img/whyAlma.png'
const Content = () => {
  return (
    <section>
      <header className={t.content}>
      <div className={t.content1}>
        <p>
          Why Alma
        </p>
        <h1>
          Simple, supportive <br></br>
          search process
        </h1>
        <p>
          Easy-to-use directory
        </p>

        <p>
          An easy-to-use online directory that <br></br>
          lets you search and filter on what<br></br>
          matters most
        </p>
        <p>
          Free matching support
        </p>
        <p>
          In-person or online care
        </p>
      </div>

      <div className={t.content2}>



        <img src={whyAlma}/>
      </div>
      </header>
      <div>
        <h1>

        </h1>
      </div>
      
    </section>
  )
};

export default Content;
