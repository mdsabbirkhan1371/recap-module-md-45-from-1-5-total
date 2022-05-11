import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Laptop', price: 75000 },
    { name: 'Phone', price: 17500 },
    { name: 'HeadPhone', price: 500 },
    { name: 'Watch', price: 700 },
    { name: 'Tablet', price: 8500 }
  ]
  return (
    <div className="App">

      {/* Map in array of object  */}

      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      {/* simple niom */}
      {/* <Product name='Laptop' price='75000'></Product>
      <Product name='Phone' price='7500'></Product>
      <Product name='Watch' price='300'></Product>
      <Product name='HeadPhone' price='100'></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
  )

}

export default App;
