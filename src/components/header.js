import { NavLink } from "react-router-dom";
import NotConnected from "../assets/notconnected.svg";
import Connected from "../assets/connected.svg";

import getFormattedNumber from "../functions/get-formatted-number";

const Modal = ({ handleClose, show, handleConnection }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div
      className={showHideClassName}
      onClick={() => {
        // close modal when outside of modal is clicked
        handleClose();
      }}
    >
      <section className="modal-main">
        <div className="sc-frDJqD ljXtWJ" data-reach-dialog-content="">
          <div className="sc-cmTdod kjSopy">
            <div className="sc-lhVmIH xuOEC">
              <div className="sc-feJyhm iTaYul">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sc-iELTvK cvCpgS"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <div className="sc-jwKygS bFQpTL">
                <div className="sc-jtRfpW iudQQC">Connect to a wallet</div>
              </div>
              <div className="sc-btzYZH cRGnnt">
                <div className="sc-elJkPf kIebhI">
                  <button
                    onClick={handleConnection}
                    id="connect-METAMASK"
                    className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn"
                  >
                    <div className="sc-jbKcbu GeCum">
                      <div color="#E8831D" className="sc-bbmXgH eDNUCi">
                        MetaMask
                      </div>
                    </div>
                    <div className="sc-jnlKLf gJPfsC">
                      <img src="/img/wallets/metamask.svg" alt="Icon" />
                    </div>
                  </button>
                  <button
                    onClick={handleConnection}
                    id="connect-COIN98"
                    className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn"
                  >
                    <div className="sc-jbKcbu GeCum">
                      <div color="#E8831D" className="sc-bbmXgH eDNUCi">
                        Coin98
                      </div>
                    </div>
                    <div className="sc-jnlKLf gJPfsC">
                      <img src="/img/wallets/coin98.svg" alt="Icon" />
                    </div>
                  </button>
                  <button
                    onClick={handleConnection}
                    id="connect-COIN98"
                    className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn"
                  >
                    <div className="sc-jbKcbu GeCum">
                      <div color="#E8831D" className="sc-bbmXgH eDNUCi">
                        Trust Wallet
                      </div>
                    </div>
                    <div className="sc-jnlKLf gJPfsC">
                      <img src="/img/wallets/trustwallet.svg" alt="Icon" />
                    </div>
                  </button>
                  <button
                    onClick={handleConnection}
                    id="connect-COIN98"
                    className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn"
                  >
                    <div className="sc-jbKcbu GeCum">
                      <div color="#E8831D" className="sc-bbmXgH eDNUCi">
                        SafePal
                      </div>
                    </div>
                    <div className="sc-jnlKLf gJPfsC">
                      <img src="/img/wallets/safepal.svg" alt="Icon" />
                    </div>
                  </button>
                </div>
                {/*<div className="sc-bYSBpT cqlMyA"><span>New to Avalanche? &nbsp;</span> <a*/}
                {/*    target="_blank" rel="noopener noreferrer"*/}
                {/*    href="https://pangolin.exchange/tutorials/getting-started/#set-up-metamask"*/}
                {/*    className="sc-ifAKCX jNdpwd sc-kTUwUJ kLByLx">Learn more about setting up a*/}
                {/*    wallet</a></div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Header = (props) => (
  <header className="header-wrap" style={{ paddingLeft: "2rem" }}>
    <div className="header-left">
      <div>
        <a href="#">
          ETH: <span>${getFormattedNumber(props.ethPrice, 2)}</span>
        </a>
      </div>
      <div className="dropdown">
        <img src="/assets/img/icon-1.svg" alt="Image" />
        <span>{getFormattedNumber(props.gasPrice, 0)} GWEI</span>
        <ul>
          <li>
            <a href="#">
              Low: <span>271</span>
            </a>
          </li>
          <li>
            <a href="#">
              Medium: <span>891</span>
            </a>
          </li>
          <li>
            <a href="#">
              Fast: <span>123</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        {/* <a href="#">HOT PAIRS <span>$1742.19</span> <img src="/assets/img/icon-2.svg" alt="Image" /></a> */}
      </div>
    </div>
    <div className="header-center">
      <div onClick={props.toggleMobileSidebar} className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div className="header-right">
      <div style={{ whiteSpace: "nowrap" }} className="">
        <ul>
          <marquee>
            {props.appState.hotPairs.map((hotPair, i) => (
              <li
                key={i}
                style={{ display: "inline-block", paddingRight: "2rem" }}
              >
                <NavLink to={`/pair-explorer/${hotPair.pair_address}`}>
                  #{i + 1} {hotPair.pair_name}
                </NavLink>
              </li>
            ))}
          </marquee>
        </ul>
      </div>
    </div>

    <div className="top-right-header">
      <Modal
        show={props.show}
        handleClose={props.hideModal}
        handleConnection={props.handleConnection}
      />
      <div className="home-menu">
        <a
          onClick={(e) => {
            e.preventDefault();
            props.showModal();
          }}
          href="#"
          style={{
            border: !props.isConnected
              ? "1px solid #ED636C"
              : "1px solid #63EDAB",
          }}
        >
          <img
            src={!props.isConnected ? NotConnected : Connected}
            alt="Image"
          />
          {/* <i style={{color: '#fff'}} className='fas fa-wallet'></i> */}
          <span
            style={{
              color: !props.isConnected ? "#ED636C" : "#63EDAB",
            }}
          >
            {!props.isConnected ? "Connect Wallet" : "Wallet Connected!"}
          </span>
        </a>
       <NavLink to="/account"><img src="/assets/img/person.svg" alt="Image" /><span className="sidebar-link2">Account</span></NavLink>
      </div>
      
    </div>
  </header>
);

export default Header;
