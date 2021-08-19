import React from 'react';
import IMG from './images/icon-music.svg';
import IMG2 from './images/illustration-hero.svg';
const Carta = ({ Me, Pre2 }) => {
  return (
    <>
      <div className="caja">
        <img className="hero" src={IMG2} alt="" />
        <section className="info">
          <h2>Order Summary</h2>
          <p className="par">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <section className="caja2">
            <section className="logo">
              <img src={IMG} alt="logo" />
            </section>

            <section className="date">
              <h2 className="pre1">{Me}</h2>
              <p className="pre">{Pre2}</p>
            </section>
            <section className="link">
              <a className="li" href="https://lectortmo.com/">
                Charge
              </a>
            </section>
          </section>
        </section>
        <section className="botones">
          <button className="B1">Proceed to Payment</button>
          <button className="B2">Cancel Order</button>
        </section>
      </div>
    </>
  );
};

export default Carta;
