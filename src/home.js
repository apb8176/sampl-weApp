import React from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from "react-bootstrap";

const Home = () =>{

    return(
        <>
            <Nav className="NavBar">
                <Nav.Item className="navHeader offset-sm-1">
                    <label>Dreams</label>
                </Nav.Item>
                <Nav.Item className="ms-auto cartIcon">
                    <button className="btn btn-default"><img src="Assets/cart_icon.svg" slt="cart"/></button>
                </Nav.Item>
            </Nav>
            <br/>
            <br/>
            <div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className="textDiv">
                            <label className="textMain">Spice your Moods</label>
                            <label className="textSub">Spicy Vegetable Soup</label>
                        </div>
                   
                        <div className="paraDiv">
                            <p>Molestie ac feugiat sed lectus. Cursus sit amet dictum sit amet. Egestas diam in arcu cursus euismod quis viverra. Eget gravida cum sociis natoque penatibus et magnis.</p>
                        </div>
                        <div className="row rowDiv1">
                            <div className="col-sm-5">
                                <button className="button1">View Menu</button>
                            </div>
                            <div className="col-sm-5">
                            <button className="button2">Book a Table</button>
                            </div>
                        </div>
                        <div className="row rowDiv2">
                            <div className="col-sm-5 foodLabel">
                            <label className="foodLabel">Breakfast</label>
                            <label className="timeLable">9.00 am - 11.00 am</label>
                            </div>
                            <div className="col-sm-5">
                            <img src="Assets/arrow.svg"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 offset-sm-1">
                        <div className="Image"><img src="Assets/image1.jpg" alt="Img"/></div>
                    </div>
                </div>
            </div>
        </>      
         

    )
}


export default Home;