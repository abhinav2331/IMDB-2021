import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./common.css";
import Menuheader from '../../Mockdata/menu_header_data';
import Menudata from '../../Mockdata/menu_data.json';
import Logo from '../../assets/Logo.svg';
import { BiX, BiFilm } from "react-icons/bi";

function Menu(props) {

    const closeHandler = () => {
        props.setMenuCont(false);
    }
    
    return (
        <>
            <div className="imdb_menu_content">
                <Container>
                    <Row>
                        <Col lg="12">
                            <label className="imdb_logo">
                                <img className="ipc-icon" src={Logo} alt="logo" />
                            </label>
                            <div className="menu_close" onClick={closeHandler}>
                                <BiX />
                            </div>
                        </Col>
                        <hr/>
                    </Row>
                    <Row>
                        {
                            Menuheader.map((menuhead, index) => {
                                return (
                                    <Col lg="4" id={menuhead.i18nKey}>
                                        <span className="imdb_nav_title">{menuhead.title}</span>
                                        <ul>{
                                            Menudata.map((menuitem, index) => {
                                                if (menuhead.id === menuitem.categoryId) {
                                                   return  <li key={menuitem.i18nKey}>{menuitem.title}</li>
                                                }
                                            })
                                        }</ul>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Menu;