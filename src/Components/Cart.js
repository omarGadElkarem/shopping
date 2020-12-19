

import React, { Component } from 'react'
import formatcurrency from '../util';
import Fade from 'react-reveal/Fade';

export default class Cart extends Component {

    constructor(props){

        super(props);

        this.state = {
            
            name : "",
            email: "",
            Adress: "",
            
            
            showcheckout : false
        
        
        }



    }
    handleinput=(e)=>{

        this.setState({[e.target.name]: e.target.value });
    }
    createorder=(e)=>{
        e.preventDefault();
        const order ={
            name : this.state.name,
            Email : this.state.Email,
            Adress : this.state.Adress,
            CartItem : this.props.CartItem,
        };
        this.props.createorder(order)
    }
    render() {

        const {CartItem}= this.props;

        return (
            <div>
                {CartItem.length === 0 ? <div className="cart"> The Cart is Empty </div> : 

        <div className="cart"> YOu have in your cart {CartItem.length} Item{" "}</div> 
                
            
            }


            <div className="cart">
                <Fade left cascade>
                <ul className="cart-item">
                    {CartItem.map(item =>(
                        <li key={item.id}>

                            <div>
                                <img src={item.image} alt={item.title} />
                            </div>
                    <div>{item.title}</div>

                 <div className="right">
                                {item.price} x {item.count} {" "}
                 <button onClick={()=> this.props.removefromcart(item)} >Remove</button>

                 </div>

                        </li>
                    ))}
                </ul>
                </Fade>
            </div>

            <div className="cart">
                 <div className="total">
                     Total : {" "}
                     <div>
                         {CartItem.reduce((a,c)=> a+(c.price*c.count),0)
                         
                         }
                     </div>
                     <button onClick={()=>{this.setState({showcheckout : true});}} className="button">Processed</button>
                     
                     </div> 
            </div>
                            {this.state.showcheckout&&(
                                <Fade right cascade>
                                <div className="cart">
                                    <form onSubmit={this.createorder}>

                                        <ul className="form-container">
                                            <li>
                                                <li>
                                                <label>Email  </label>
                                                <input name="email" type="Email" required onChange={this.handleinput} />
                                                </li>

                                                <li>
                                                <label> Name  </label>

                                    <input name="name" type="text" required onChange={this.handleinput} />
                                                </li>

                                              <li>
                                              <label>Adress  </label>

                                    <input name="Adress" type="text" required onChange={this.handleinput} />
                                              </li>


                                            </li>

                                            <li>
                                                <button type="submit" className="button"> Checkout</button>
                                            </li>
                                        </ul>

                                    </form>
                                </div>
                                </Fade>
                            )}
            </div>
        )
    }
}
