import React from 'react'

import { Helmet } from 'react-helmet'

import './passrecoverymail.css'

const Passrecoverymail = (props) => {
  return (
    <div className="passrecoverymail-container">
      <Helmet>
        <title>passrecoverymail - Docs</title>
        <meta property="og:title" content="passrecoverymail - Docs" />
      </Helmet>
      <h1 className="passrecoverymail-text">Docs</h1>
      <h1 className="passrecoverymail-text01">Recupero password</h1>
      <span className="passrecoverymail-text02">
        <span className="passrecoverymail-text03">Ciao!</span>
        <br className="passrecoverymail-text04"></br>
        <span className="passrecoverymail-text05">
          Abbiamo ricevuto una richiesta di recupero della password.
        </span>
        <br className="passrecoverymail-text06"></br>
        <span className="passrecoverymail-text07">
          Clicca sul seguente link (o copialo nella barra di ricerca) per
          procedere con il cambio della password.
        </span>
        <br className="passrecoverymail-text08"></br>
      </span>
      <a
        href="https://example.com"
        target="_blank"
        rel="noreferrer noopener"
        className="passrecoverymail-link"
      >
        Link
      </a>
      <span className="passrecoverymail-text09">
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
      <div className="passrecoverymail-container1">
        <img
          alt="image"
          src="/external/screenshot_20231116_162217-1-200h.png"
          className="passrecoverymail-image"
        />
        <img
          alt="image"
          src="/external/logo_partner24ore_positivo_colore-400h.png"
          className="passrecoverymail-image1"
        />
      </div>
    </div>
  )
}

export default Passrecoverymail
