import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  //   var message = [
  //     {
  //     text : 'This is for a Primary'
  //     },
  //     {
  //     text : 'This is for also will  Warning'
  //     },
  //     {
  //       text : 'This is Danger'

  //     },
  //     {
  //       text : 'This is for not only also Success'
  //     }
  // ];
  //   var random = message[Math.floor(Math.random() * message.length)];
  //   var randomText = random.text;
  //   var mainText;

  //   const splitMessage = (randomText) => {
  //     return mainText = randomText.split(' ');
  //   }
  //   splitMessage(randomText);

  //    const content = () =>{
  //     switch(mainText[mainText.length - 1]){
  //       case 'Primary':
  //         return  'Primary'
  //         break;
  //       case 'Warning':
  //         return  'Warning'
  //         break;
  //       case 'Danger':
  //         return  'Danger'
  //         break;
  //       case 'Success':
  //         return  'Success'
  //         break;
  //         default :
  //     }
  //    }
  // fetch('https://reqres.in/api/users/78', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: 'User 1'
  //   })
  // })
  //   .then(res => res.json())

  //   .then(data => console.log(data))
  //   .catch(error => console.log(error));

  const [data, setData] = useState([]);
  const [value, setValue] = useState("India")

  let finalURL = `https://restcountries.com/v3.1/name/${value}?fullText=true`;

  const fetchAPI = () => {fetch(finalURL)
    .then((res) => res.json())
    .then((js) => {
      setData(js);
    })};

  const handleChange = (event) => {
    let countryValue =  event.target.value;
    setValue(countryValue)
  };
  const handleClick = () => {
    fetchAPI();
    console.log(value,"check")
  };
 

  return (
   <>
   <div className="container">
      <div className="search-wrapper">
        <input
          id="country-inp"
          type="text"
          onChange={handleChange}
          placeholder="Enter a country name here..."
        />
        <button onClick={handleClick} id="search-btn">
          Search
        </button>
      </div>
  
   { data.length <= 0 ? <div className="result"> <h2>Enter a country name</h2></div> :
    <div className="result">
        <img src={data[0].flags.svg} className="flag-image" />
        <h2>{data[0].name.common}</h2>
        <div className="wrapper">
          <div className="data-wrapper">
            <h4>Capital:</h4>
            <span>{data[0].capital[0]}</span>
          </div>
        </div>
        <div className="wrapper">
          <div className="data-wrapper">
            <h4>Continent:</h4>
            <span>{data[0].continents[0]}</span>
          </div>
        </div>
        <div className="wrapper">
          <div className="data-wrapper">
            <h4>Population:</h4>
            <span>{data[0].population}</span>
          </div>
        </div>
        <div className="wrapper">
          <div className="data-wrapper">
            <h4>Currency:</h4>
            <span>
              {data[0].currencies[Object.keys(data[0].currencies)].name} -{" "}
              {Object.keys(data[0].currencies)[0]}
            </span>
          </div>
        </div>
        <div className="wrapper">
          <div className="data-wrapper">
            <h4>Language:</h4>
            <span>
              {Object.values(data[0].languages)
                .toString()
                .split(",")
                .join(", ")}
            </span>
          </div>
        </div>
      </div>
   } 
      
    </div>
    </>
  );
}

export default App;
 // <div className="App">
    // <header className="App-header">
    // <p className={content()}> {random.text} </p>
    // </header>
    // </div>