import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {



  const [data, setdata] = useState("");
  const [info, setinfo] = useState(0);

  useEffect(() => {
    async function getdata() {
      const get = await fetch("https://api.adviceslip.com/advice");
      const res = await get.json();

      setdata(res.slip.advice);
      console.log(data);
    }
    getdata();
  }, [info]);


  return (
    <div className="app">
      <div className="card">
      <h1 className='heading'>{data}</h1>
      <button className='button' onClick={() =>setinfo(info+1) }><span>TODAY's ADVICE!</span></button>

      </div>

    </div>
  )
}

export default App;
