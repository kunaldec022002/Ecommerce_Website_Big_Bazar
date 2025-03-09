import React from "react";
import './ProductCard.css';
import {Link} from 'react-router-dom';


function ProductCard({id, name, price, description , image}) {
    return(
        <div className="product-card">
            <img src={image} alt={name}className="image-size"/>
            <h2>{name}</h2>
            <h1>₹{price}</h1>
            <p>{description}</p>
            <Link to={`/buy/${id}`}className="btn-buy-now">Buy Now</Link>
        </div>

        
    )
}

export default ProductCard

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/