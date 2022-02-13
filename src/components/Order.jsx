import "../styles/Order.scss";
import "../styles/normalize.css";
import hero from "../images/illustration-hero.svg";
import music from "../images/icon-music.svg"

const Order = () => {
  return (
    <>
      <body className="order-sumary">
        <div className="sumary-top">
          <div>
            <img className="img-hero" src={hero} alt="listen music" />
          </div>
          <div className="sumary-bottom">
            <h2 className="title-sumary">Order Summary</h2>
            <p className="paraph-sumary">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <div className="box-sumary">
              <img className="music-icon" src={music} alt="icon-music" />
              <div>
                <p className="annual-plan">Annual Plan</p>
                <p className="price-plan">$59.99/year</p>
              </div>
              <div>
                <p className="price-change">Change</p>
              </div>
            </div>
            <div className="buttons-payment">
              <button className="button-payment">Proceed to Payment</button>
              <button className="second-button">Cancel Order</button>
            </div>
          </div>
        </div>
        <footer>
          Challenge by{" "}
          <a className="links-footer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a className="links-footer" href="https://github.com/Gerard-strock" target="_blank">
            Gerard-strock
          </a>
        </footer>
      </body>
    </>
  );
};

export default Order;