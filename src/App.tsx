import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";



function App(props:any) {

  return (
    <div className="App">
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <hr/>
      <Accordion title={"Menu"} collapsed={true}/>
      <Accordion title={"Users"} collapsed={false}/>
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
