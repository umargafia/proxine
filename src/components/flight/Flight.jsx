import { Cart } from "../../global/global";
import "./flight.scss";

export const Flight = () => {
  return (
    <div className="flight" id="flight">
      <h3 className="heading--text flight__heading">Flight</h3>
      <div className="cart-section">
        <div className="flight__carts">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
        <span className="more-arrow">{">>"}</span>
      </div>
    </div>
  );
};
