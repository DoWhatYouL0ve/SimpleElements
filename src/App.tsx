import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";



function App(props:any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    const [switchOn, setSwitchOn] = useState(false)
    const [swhOn, setSwOn] = useState(false)

  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <hr/>
      <Accordion title={"Menu"} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
      <hr/>
      <OnOff on={switchOn} onChange={() => setSwitchOn(!switchOn)}/>
      <hr/>
      <UncontrolledOnOff onChange={setSwOn}/> {swhOn.toString()}
      <hr/>
      <UncontrolledAccordion title={'Uncontrolled Accordion'}/>
      <hr/>
      <UncontrolledRating />
    </div>
  );
}

export default App;
