import React, { useState } from "react";

function Filter() {

  const [type, setType] = useState()
  const [pricerange, setPricerange] = useState()
  const [performance, setPerformance] = useState()



 function filterFunction() {
  
 }



  return (
    <div>
      <div id="filterColumn">
        <h2>Type</h2>
        <span>
          <input type="radio" name="type" id="type" />
          <input type="radio" name="type" id="type" />
          <input type="radio" name="type" id="type" />
          <input type="radio" name="type" id="type" />
        </span>

        <span>
          <h2>Price Range</h2>
          <input type="radio" name="pricerange" id="pricerange" />
          <input type="radio" name="pricerange" id="pricerange" />
          <input type="radio" name="pricerange" id="pricerange" />
          <input type="radio" name="pricerange" id="pricerange" />
        </span>

        <span>
          <h2>Performance</h2>
          <input type="radio" name="performance" id="performance" />
          <input type="radio" name="performance" id="performance" />
          <input type="radio" name="performance" id="performance" />
          <input type="radio" name="performance" id="performance" />
        </span>

        <button onClick={()=>filterFunction()}>Filter</button>

      </div>
    </div>
  );
}

export default Filter;
