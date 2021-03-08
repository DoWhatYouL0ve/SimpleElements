import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";



function App(props:any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(true)

  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <hr/>
      <Accordion title={"Menu"} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
      <hr/>
      <OnOff />
      <OnOff />
      <hr/>
      <UncontrolledAccordion title={'Uncontrolled Accordion'}/>
      <hr/>
      <UncontrolledRating />
    </div>
  );
}

export default App;
