import React from 'react'

import { Helmet } from 'react-helmet'

import './codemail.css'

const Codemail = (props) => {
  return (
    <div className="codemail-container">
      <Helmet>
        <title>codemail - Docs</title>
        <meta property="og:title" content="codemail - Docs" />
      </Helmet>
      <h1 className="codemail-text">Docs</h1>
      <h1 className="codemail-text01">Benvenuto!</h1>
      <span className="codemail-text02">
        <span>Ecco il tuo codice d&apos;accesso.</span>
        <br></br>
        <span>Non condividerlo con nessuno!</span>
        <br></br>
      </span>
      <span className="codemail-text07">&#123;&#123;.Code&#125;&#125;</span>
      <span className="codemail-text08">
        <span>
          Se hai ricevuto questa mail per errore ti preghiamo, ringraziandoti,
          di darcene notizia via mail o telefonicamente.
        </span>
        <br></br>
        <span>
          Rimaniamo a tua completa disposizione per ogni supporto necessario.
        </span>
        <br></br>
        <span>Buona navigazione su Docs!</span>
      </span>
      <div className="codemail-container1">
        <img
          alt="image"
          src="/external/screenshot_20231116_162217-1-200h.png"
          className="codemail-image"
        />
        <img
          alt="image"
          src="/external/logo_partner24ore_positivo_colore-400h.png"
          className="codemail-image1"
        />
      </div>
    </div>
  )
}

export default Codemail
