import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <Exportxternal></Exportxternal>
    </div>
  );
}


function Exportxternal() {
  const [users, setUser] = useState([]);

  // const myFun=()=>{}
  // useEffect(() => { }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (
    <div>
      <h1>External Users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }

    </div>
  )
}
function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <h1>Name: {props.name}</h1>
      <p>Email: {props.email}</p>
    </div>
  )
}
function Counter() {

  const [count, setCount] = useState(50);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;




// Full Check option 

// const products = [
//   { name: 'Laptop', price: 75000 },
//   { name: 'Phone', price: 17500 },
//   { name: 'HeadPhone', price: 500 },
//   { name: 'Watch', price: 700 },
//   { name: 'Tablet', price: 8500 }
// ]

//  {/* Map in array of object  */}

//       {/* {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)
//       } */}

//       {/* simple niom */}
//       {/* <Product name='Laptop' price='75000'></Product>
//       <Product name='Phone' price='7500'></Product>
//       <Product name='Watch' price='300'></Product>
//       <Product name='HeadPhone' price='100'></Product> */}
// function Product(props) {
//   return (
//     <div className='product'>
//       <h3>Name: {props.name} </h3>
//       <p>Price: {props.price} </p>
//     </div>
//   )

// }
