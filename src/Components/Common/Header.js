import React, {useState} from "react";
import "./common.css";
import { MdDehaze, MdTurnedIn } from "react-icons/md";
import Logo from '../../assets/Logo.svg';
import SearchComponent from '../Search/searchComponent';
import Menu from './Menu';

function Header() {
    const [menucont, setMenuCont] = useState(false);

    const menuHandler = () => {
        setMenuCont(true)
    }
    return (
        <>
            {menucont ? <Menu setMenuCont={setMenuCont} /> : ""}
            <div className="imdb_header">
                <div className="imbd_hinner">                    
                    <label className="imdb_logo">
                        <img className="ipc-icon" src={Logo} alt="logo" />
                    </label>
                    <label className="imdb_menu" onClick={menuHandler}>
                        <MdDehaze style={{ size: "1.5em" }} /> Menu
                    </label>
                    <div className="search_container">
                        <SearchComponent />
                    </div>
                    <label className="imdb_pro">
                       IMDb Pro
                    </label>
                    <label className="imdb_watchlist">
                       <MdTurnedIn /> Watchlist
                    </label>
                    <label className="imdb_signin">
                       Sign in
                    </label>
                </div>
            </div>

        </>
    )
}

export default Header;