import React from 'react'; 
import './App.css';
import Cart from './Components/Cart';
import Filter from './Components/Filter';
import products from './Components/Products';
import Products from './Components/Products';
import data from './data.json';




class App extends React.Component{
  
constructor(){
  super();
  this.state={
    CartItem: localStorage.getItem("CartItem")?JSON.parse(localStorage.getItem("CartItem")):[],
    products: data.products,
      size: "",
      sort:"",

      
  }
}
createorder=(order)=>{
  alert("Need to save order" + order.name);
}

removefromcart=(product)=>{
  const CartItem=this.state.CartItem.slice();
  this.setState({
     CartItem:CartItem.filter(x=>x.id !==product.id)
  })
  localStorage.setItem("CartItem", JSON.stringify(this.state.CartItem));
}

addToCart=(product)=>{
  const CartItem = this.state.CartItem.slice();
  let alreadyincart= false;

  CartItem.forEach(item=>{
    if(item.id===product.id){
      item.count++;

      alreadyincart= true;
    }
  })
  if(!alreadyincart){
    CartItem.push({...product, count:1})
  }
  this.setState({CartItem});
  localStorage.setItem("CartItem", JSON.stringify(CartItem));
}

filterproducts =(event)=>{


if(event.target.value===""){
  this.setState({size:event.target.value, product:data.products});
} else {
  this.setState({
    size : event.target.value,
    products : data.products.filter(product=>product.avilablesize.indexOf(event.target.value)>=0)
  })
  }
}

sortproducts=(event)=>{
  const sort = event.target.value;
  this.setState(state=>({

    size: sort,
    products : this.state.products.slice().sort((a,b)=>(
      sort=== "lowest"? 

    (  (a.price > b.price) ? 1: -1):


    sort === "heighest" ? 

    ( (a.price < b.price)? 1:-1 ):
    ( (a.id < b.id)? 1:-1 )
    ))

  }));
}







  



  
    
      
      
 
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">Shopping Easy</a>
   
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
                    size= {this.state.size}
                    sort={this.state.sort}

                    filterproducts={this.filterproducts}
                    sortproducts={this.sortproducts}
              
              />
            <Products products={this.state.products} addToCart={this.addToCart} />
            
            
            
            </div>
            <div className="sidebar">

              <Cart CartItem={this.state.CartItem} removefromcart={this.removefromcart} createorder={this.createorder} />
            </div>
          </div>
          
        </main>
          
        <footer>
          All Right recived by Omar Gad Elkareem 


        

          
        </footer>

        
      </div>
      

      
       
     );
  }
}


export default App;
