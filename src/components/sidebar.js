import { NavLink } from "react-router-dom"

const activateLasers = () => {
    window.$.alert('Coming Soon!')
}

const Modal = ({ handleClose, show, handleConnection }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} onClick={() => {
            // close modal when outside of modal is clicked
            handleClose()
        }}>
            <section className="modal-main">
                <div className="sc-frDJqD ljXtWJ" data-reach-dialog-content="">
                    <div className="sc-cmTdod kjSopy">
                        <div className="sc-lhVmIH xuOEC">
                            <div className="sc-feJyhm iTaYul">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="sc-iELTvK cvCpgS">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </div>
                            <div className="sc-jwKygS bFQpTL">
                                <div className="sc-jtRfpW iudQQC">Connect to a wallet</div>
                            </div>
                            <div className="sc-btzYZH cRGnnt">
                                <div className="sc-elJkPf kIebhI">
                                    <button onClick={handleConnection} id="connect-METAMASK"
                                            className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn">
                                        <div className="sc-jbKcbu GeCum">
                                            <div color="#E8831D" className="sc-bbmXgH eDNUCi">MetaMask</div>
                                        </div>
                                        <div className="sc-jnlKLf gJPfsC">
                                            <img src="/img/wallets/metamask.svg" alt="Icon" />
                                        </div>
                                    </button>
                                    <button onClick={handleConnection} id="connect-COIN98" className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn">
                                        <div className="sc-jbKcbu GeCum">
                                            <div color="#E8831D" className="sc-bbmXgH eDNUCi">Coin98</div>
                                        </div>
                                        <div className="sc-jnlKLf gJPfsC">
                                            <img src="/img/wallets/coin98.svg" alt="Icon" />
                                        </div>
                                    </button>
                                    <button onClick={handleConnection} id="connect-COIN98" className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn">
                                        <div className="sc-jbKcbu GeCum">
                                            <div color="#E8831D" className="sc-bbmXgH eDNUCi">Trust Wallet</div>
                                        </div>
                                        <div className="sc-jnlKLf gJPfsC">
                                            <img src="/img/wallets/trustwallet.svg" alt="Icon" />
                                        </div>
                                    </button>
                                    <button onClick={handleConnection} id="connect-COIN98" className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn">
                                        <div className="sc-jbKcbu GeCum">
                                            <div color="#E8831D" className="sc-bbmXgH eDNUCi">SafePal</div>
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
    )
}

const Sidebar = (props) => (
    <div onClick={props.toggleMobileSidebar} className={`sidebar ${props.isOpenInMobile ? 'open' : ''}`} >
        <div className="close-sidebar">
            <i className="fas fa-arrow-left"></i>
        </div>
        <div className="logo">
            <a href="/">
                <img className="logo-white" src="/img/svg/logo.svg" alt="Image" />
                <img className="logo-black" src="/img/svg/logo.svg" alt="Image" />
            </a>
        </div>
        <Modal show={props.show} handleClose={props.hideModal} handleConnection={props.handleConnection}  />
        <div className="home-menu">
            <a onClick={e => {
                e.preventDefault()
                props.showModal()
            }} href="#">
                {/* <img src="/assets/img/wallet.svg" alt="Image" /> */}
                <i style={{color: '#fff'}} className='fas fa-wallet'></i>
                <span>{!props.isConnected ? "Connect Wallet" : "Wallet Connected!"}</span>
            </a>
        </div>
        <div className="menu-cat-one">
            <h6 className='networks'>
                <a href="javascript:void(0)" className='hoverNetwork'>
                    <img src="https://dyp.finance/img/i1.svg" alt="Image not found" />
                    <span>Ethereum</span>
                </a>
                <a href="https://avax-tools.dyp.finance/" className='hoverNetwork' style={{padding: '4px 11px 0'}}>
                    <img src="https://dyp.finance/img/farms/avax-yield.png" alt="Image not found" />
                    <span>Avalanche</span>
                </a>
            </h6>
            <ul>
                <li><NavLink exact to="/pool-explorer"><img src="/assets/img/search.svg" alt="Image" /><span>Pool Explorer</span></NavLink></li>
                <li><NavLink to="/pair-explorer"><img src="/assets/img/compass.svg" alt="Image" /><span>Pair Explorer</span></NavLink></li>
                <li><NavLink to="/big-swap-explorer"><i className="fas fa-exchange-alt" alt="Image" /><span>Big Swap Explorer</span></NavLink></li>
                <li><NavLink to="/locker"><i className="fas fa-lock" alt="Image" /><span>DYP Locker</span></NavLink></li>
                <li><NavLink to="/top-tokens"><i className="fab fa-ethereum" alt="Image" /><span>Top Tokens</span></NavLink></li>
            </ul>
        </div>
        <div className="menu-cat-two">
            <h6>Others</h6>
            <ul>
                {String(props.appState.coinbase).toLowerCase() == window.config.metamask_admin_account.toLowerCase() && <li><NavLink to="/admin"><i className="fas fa-user-cog" alt="Image" /><span>Admin</span></NavLink></li>}
                <li><NavLink to="/farms"><i className='fas fa-seedling' /><span>Yields</span></NavLink></li>
                <li><NavLink to="/account"><img src="/assets/img/person.svg" alt="Image" /><span>Account</span></NavLink></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://dyp.finance/launchpad'><i className='fas fa-rocket' /><span>LaunchPad</span></a></li>
                <li><a target='_blank' rel='noopener noreferrer' href={window.config.submission_form_link}><i className='far fa-file-alt' /><span>Submit Info</span></a></li>
                <li><a target='_blank' rel='noopener noreferrer' href="https://app.uniswap.org/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"><img src="/assets/img/cart.svg" alt="Image" /><span>Buy DYP</span></a></li>
                <li onClick={props.toggleTheme} className="change-clr"><a href="javascript:void(0)"><i className={`fas fa-${props.theme=='theme-white'?'moon':'sun'}`} /><span>Change theme</span></a></li>
            </ul>
        </div>
    </div>
            
)

export default Sidebar