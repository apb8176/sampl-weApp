import React from "react";
import { Nav } from "react-bootstrap";
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () =>{

    return(
        <>
            <Nav className="NavBar">
                <Nav.Item className="navHeader offset-sm-1 ">
                    <label>Dreams</label>   
                </Nav.Item>
                <Nav.Item className="ms-auto cartIcon">
                    <button className="btn btn-default"><img src="Assets/cart_icon.svg" alt="logo"/></button>
                </Nav.Item>                        
                
            </Nav>
            <br/>
            <br/>
            <div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className = "textDiv">
                            <label className = "textMain">Spice Your Moods</label>
                            <label className = "textSub">Spicy Vegetable Soup</label>
                        </div>
                        <div className = "paraDiv">
                            <p>Molestie ac feugiat sed lectus. Cursus sit amet dictum sit amet. Egestas diam in arcu cursus euismod quis viverra. Eget gravida cum sociis natoque penatibus et magnis.</p>
                        </div>
                            <div className="row rowDiv" >
                                
                                <div className="col-sm-5">
                                   
                                        <button className="menuButton1">View Menu</button>                                 
                                
                               
                                </div>
                                <div className="col-sm-5 ">   
                                   <button className="menuButton2">Book a Table</button>
                               </div>
                              
                           </div>
                           <div className="row rowDiv2" >
                           <div className="col-sm-4 foodLabel">   
                                        <label className="foodLabel">Breakfast</label>
                                        <label className="timeLabel">9.00 am - 11.00 am</label>
                                    </div>

                                
                                <div className="col-sm-3 timeLabel">
                                   
                                <img src="Assets/arrow.svg" alt="ResponsiveImg"/>
                                </div>
                             </div>
                                
                        </div>

                            
                    
                    <div className="col-sm-5">
                        <div className="Image"> 
                        <img src="Assets/image1.jpg" alt="ResponsiveImg"/>
                        </div>
                        
                    </div>
                    </div>
            
          </div> 
      </>      
         

    )
}


export default Home;