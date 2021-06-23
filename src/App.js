import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [price, setPrice] = useState(0);
  const [sales, setSales] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const DailyGain = price * sales;
    const gross = revenue / DailyGain;
    setTotal(gross);
    console.log(price);
    console.log(sales);
    console.log(revenue);
  }, [price, sales, revenue])

  const handleChange = (e) => {
    if (e.target.id === "price") {
      setPrice(e.target.value)
    }else if (e.target.id === "sales") {
      setSales(e.target.value)
    }else if (e.target.id === "revenue") {
      setRevenue(e.target.value)
    }
  }

  return (
    <div className="App">
      <h1 className="my-4">Earnings Calculator</h1>
      <hr className="mb-5" />
      <div className="priceContainer input">
        <label htmlFor="price"><b>Price of product:</b></label>
        <input type="text" id="price" className="form-control" onChange = { handleChange } value={price} />
      </div>
      <div className="salesNumberContainer input">
        <label htmlFor="price"><b>Number of sales per day:</b></label>
        <input type="text" id="sales" className="form-control" onChange = { handleChange } value={sales} />
      </div>
      <div className="revenueContainer input">
        <label htmlFor="price"><b>Expected total revenue:</b></label>
        <input type="text" id="revenue" className="form-control" onChange = { handleChange } value={revenue} />
      </div>

      <div className="expectedDays mt-5">
        <h4>Time requires to earn the expected revenue: <span> { total } </span> days, { (total/30.4167).toFixed(1) } Month, { (total/365).toFixed(1) } Years</h4>
      </div>

    </div>
  );
}

export default App;
