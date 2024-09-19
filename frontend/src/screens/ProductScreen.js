import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

 
function ProductScreen() {
  const { id } = useParams(); // Use useParams hook to get the id parameter

  const product = products.find((p) => p._id === id); // Use the id from useParams

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {product.name}
    </div>
  );
}

export default ProductScreen;