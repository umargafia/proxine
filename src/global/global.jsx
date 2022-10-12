import "./global.scss";
import "./cart.scss";

export const Card = ({ header, body }) => {
  return (
    <div className="card">
      <h3 className="card__header">{header}</h3>
      <p className="card__paragraph paragraph--text">{body}</p>
    </div>
  );
};

//carts

export const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__front cart__side">
        <div className="cart__header">
          <div className="cart__img">A</div>
          <h4 className="heading--secondary text__header">Azman</h4>
        </div>
        <div className="cart__body">
          <i className="text__from text">from</i>
          <div className="cart__state">
            <h4 className="text__state text">Abuja</h4>
            <span>&rarr;</span>
            <h4 className="text__state text">katsina</h4>
          </div>
          <p className="text__date text">2022-09-01</p>
          <p className="text__time text">48 hours</p>
          <span className="text__proxine">||Proxine</span>
        </div>
      </div>
      <div className="cart__back cart__side">
        <div className="cart__back">
          <h3 className="text__price text">55,00</h3>
          <Button text="Book Now" />
        </div>
      </div>
    </div>
  );
};

export const Button = ({ text }) => {
  return <button className="button">{text} &rarr;</button>;
};
