import React from 'react'

import { Helmet } from 'react-helmet'

import './newdocmail.css'

const Newdocmail = (props) => {
  return (
    <div className="newdocmail-container">
      <Helmet>
        <title>newdocmail - Docs</title>
        <meta property="og:title" content="newdocmail - Docs" />
      </Helmet>
      <h1 className="newdocmail-text">Docs</h1>
      <h1 className="newdocmail-text01">Nuovo documento online</h1>
      <span className="newdocmail-text02">
        <span className="newdocmail-text03">Ciao!</span>
        <br className="newdocmail-text04"></br>
        <span className="newdocmail-text05">
          Abbiamo condiviso un
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="newdocmail-text06">nuovo documento</span>
        <span className="newdocmail-text07"> sulla piattaforma.</span>
        <br className="newdocmail-text08"></br>
        <span className="newdocmail-text09">Accedi per visionarlo!</span>
        <br className="newdocmail-text10"></br>
      </span>
      <span className="newdocmail-text11">
        <span>
          Se hai ricevuto questa mail per errore ti preghiamo, ringraziandoti,
          di darcene notizia via mail all&apos;indirizzo &lt;mail&gt; o
          telefonicamente al numero &lt;numero&gt;.
        </span>
        <br></br>
        <span>
          Rimaniamo a tua completa disposizione per ogni supporto necessario.
        </span>
        <br></br>
        <span>Buona navigazione su Docs!</span>
      </span>
      <div className="newdocmail-container1">
        <img
          alt="image"
          src="/external/screenshot_20231116_162217-1-200h.png"
          className="newdocmail-image"
        />
        <img
          alt="image"
          src="/external/logo_partner24ore_positivo_colore-400h.png"
          className="newdocmail-image1"
        />
      </div>
    </div>
  )
}

export default Newdocmail
