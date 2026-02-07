import "./Home.css";
import { FaMoneyBill1 } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaPix } from "react-icons/fa6";
import { PiContactlessPayment } from "react-icons/pi";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";

import { IoFastFood } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";

import { FaRegEdit } from "react-icons/fa";

export default function Home() {
  return (
    <div className="app-home">
      {/* <h2 className="title">Snap entry</h2> */}
      <div className="amount-box">
        <input
          className="amount-input"
          type="number"
          inputMode="decimal"
          placeholder="0.00"
        />
        <p className="currency">BRL</p>
      </div>

      <p className="payment-method">Payment method</p>
      <div className="methods">
        <div className="cash-box">
          <div className="cash">
            <FaMoneyBill1 />
          </div>
          <p className="cash-text">cash</p>
        </div>

        <div className="credit-box">
          <div className="credit">
            <FaCreditCard />
          </div>
          <p className="credit-text">credit</p>
        </div>

        <div className="debit-box">
          <div className="debit">
            <FaCreditCard />
          </div>
          <p className="debit-text">debit</p>
        </div>

        <div className="pix-box">
          <div className="pix">
            <FaPix />
          </div>
          <p className="pix-text">pix</p>
        </div>
      </div>
      <div className="methods">
        <div className="contactless-box">
          <div className="contactless">
            <PiContactlessPayment />
          </div>
          <p className="contactless-text">contactless</p>
        </div>

        <div className="google-box">
          <div className="google">
            <FaGooglePay />
          </div>
          <p className="google-text">google</p>
        </div>

        <div className="apple-box">
          <div className="apple">
            <FaApplePay />
          </div>
          <p className="apple-text">apple</p>
        </div>

        <div className="paypal-box">
          <div className="paypal">
            <FaPaypal />
          </div>
          <p className="paypal-text">paypal</p>
        </div>
      </div>

      <p className="category">Category</p>
      <div className="categories">
        <div className="food-box">
          <div className="food">
            <IoFastFood />
          </div>
          <p className="food-text">food</p>
        </div>

        <div className="transport-box">
          <div className="transport">
            <FaCar />
          </div>
          <p className="transport-text">transport</p>
        </div>

        <div className="home-box">
          <div className="home">
            <FaHouse />
          </div>
          <p className="home-text">home</p>
        </div>

        <div className="health-box">
          <div className="health">
            <MdHealthAndSafety />
          </div>
          <p className="health-text">health</p>
        </div>
      </div>
      <div className="categories">
        <div className="shopping-box">
          <div className="shopping">
            <FaShoppingCart />
          </div>
          <p className="shopping-text">shopping</p>
        </div>

        <div className="pets-box">
          <div className="pets">
            <MdOutlinePets />
          </div>
          <p className="pets-text">pets</p>
        </div>

        <div className="education-box">
          <div className="education">
            <FaBook />
          </div>
          <p className="education-text">education</p>
        </div>

        <div className="entertainment-box">
          <div className="entertainment">
            <IoTicket />
          </div>
          <p className="entertainment-text">leisure</p>
        </div>
      </div>

      <div className="edit-icon">
        {/* <input className="notes">Notes?</input> */}
        <input
          className="notes"
          type="text"
          placeholder="notes (optional)"
        />
        {/* <FaRegEdit /> */}
      </div>

      <button className="log">Log</button>
    </div>
  );
}
