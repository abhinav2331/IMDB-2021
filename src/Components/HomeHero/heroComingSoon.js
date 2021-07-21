import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Services from '../../ApiEndPoints/AppServices';
import {Container, Row, Col} from 'react-bootstrap';
import './herostyle.css';

import Tostbox from '../Tostnotification/Tostbox';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//Mock data


function HeroComingSoon() {

    const cmgSoon = useSelector(state => state.comingsoon);
    const dispatch = useDispatch();  


    async function comingSoonFn() {
        const ComingSoonRes = await Services.getComingSoon();
        if (ComingSoonRes.status === 401) {
            console.log("Error 401");
        } else if (ComingSoonRes.status >= 300) {
            console.log("Error 300");
              ComingSoonRes.json().then(
                res => {
                    toast.error("Searching failed: " + res.errorResponse ?.message, "error", -1);
                });            
        } else {
            await ComingSoonRes.json().then(comingsoonRes => { 
                if(comingsoonRes.items.length > 0){
                   toast.success("We got the data!");                   
                }else{
                    toast.error("No Data found!");
                }  
                
                dispatch({
                    type: "COMINGSOON",
                    data: comingsoonRes.items
                })
            });
        }
    }

   {/* useEffect(() => {
        comingSoonFn();
    }, [])*/}

    return (
        <>
            <hr />
            <h1>Hero Coming Soon Banner!</h1>
            <Tostbox />
            {
                cmgSoon.comingsoon.map((cmitem, index) => {
                    return (<h4 key={index}>{cmitem.title}</h4>)
                })
            }
            <hr />
            <Container className="hero">
                <Row>
                    <Col lg="8">1 of 2</Col>
                    <Col lg="4">2 of 2</Col>
                </Row>                
            </Container>
        </>
    )
}

export default HeroComingSoon;