import React, { Component } from 'react';

import formatcurrency from '../util';

import Fade from 'react-reveal';

import Modal from 'react-modal';

import Zoom from 'react-reveal/Zoom';



    



export default class products extends Component {

        constructor(props){

            super(props);

            this.state={
                product : null,
            };

        }
        openmodal=(product)=>{
            this.setState({product});
        };
        closemodal=()=>{
            this.setState({product : null});
        }
    render() {
        const { product } = this.state;
        return (
            <div>
               
                    <Fade bottom cascade>
                       <ul className="products">
                         {this.props.products&&this.props.products.map(product=>{
                             

                                return(
                                  <li key={product.id}>
                                  <div className="product">
                                      <a href={"#" +product.id} onClick={()=>this.openmodal(product)}>
                                          <img src={product.image} alt={product.title}></img>
          
                                          <p>
                                              {product.title}
                                          </p>
                                      </a>
                                      <div className="product-price"> 
                                         <div>
                                         {product.price}
                                         </div>
                                         <button onClick={()=> this.props.addToCart(product)} className="button primiry">
                                          Add To cart
                                      </button>
                                      </div>
                                     
                                  </div>
                              </li>
                              
                                )
                             })}
                         
                       </ul>

                       </Fade>

                    
                      {
                          product && (
                              <Modal isOpen={true}>
                                  <Zoom>
                                      <button className="close" onClick={this.closemodal} >x</button>
                                      
                                      <div className="product-details">
                                          <img src={product.image} alt={product.title} />

                                          <div className="product-desc">
                                              <p>
                                                  <strong>
                                                      {product.title}
                                                  </strong>
                                              </p>
                                              <p>
                                                  {product.description}
                                              </p>
                                             <div className="product-price">
                                                 <div>
                                                     {product.price}
                                                     <button className="button" onClick={()=> {this.props.addToCart(product); this.closemodal() } } >Add to cart</button>
                                                 </div>
                                             </div>
                                              <p>
                                                  avilablesize {" "}

                                                {product.avilablesize.map(x=>(
                                                    <span>
                                                        {" "} <button className="button">{x}</button>
                                                    </span>
                                                ))}
                                                      
                                                 
                                                  
                                              </p>
                                          </div>
                                      </div>
                                  </Zoom>
                              </Modal>
                          )
                      }
                  
                    
               
                
            
            </div>
        )
    }
}
