import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { gettotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              Subtotal ({basket.length} items): <strong>{value}</strong>
              <p>
                <small className="subtotal__gift">
                  <input className="input" type="checkbox" />
                  This order contains a gift
                </small>
              </p>
            </>
          );
        }}
        decimalScale={2}
        thousandSeparator={true}
        prefix="$"
        value={gettotal(basket)}
        displayType={"text"}
      />
    </div>
  );
}

export default Subtotal;
