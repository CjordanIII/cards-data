import React from "react";
import cardsArr from "./components/data"
import "./styles.css";
//import card1
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";

 const cards = cardsArr.map((ele, index) => {
   return (
     <Card1 img={ele.img} title={ele.title} text={ele.text} url={ele.url} key = {index}/>
   );
 });




export default function App() {

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
       {cards}
      </section>
    </div>
  );
}


