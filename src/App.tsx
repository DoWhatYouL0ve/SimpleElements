import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";



function App(props:any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    const [switchOn, setSwitchOn] = useState(false)
    const [swhOn, setSwOn] = useState(false)

    //for Accordion
    const state = [
        {title: 'Valodos', value: 1},
        {title: 'Dimych', value: 2},
        {title: 'Bob', value: 3 }
    ]
    const onClick = (id: any) => {alert("user with Id " + id + " should be happy")}

  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <hr/>
      <Accordion onClick={onClick} items={state} title={"Menu"} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
      <hr/>
      <OnOff on={switchOn} onChange={() => setSwitchOn(!switchOn)}/>
      <hr/>
      <UncontrolledOnOff onChange={setSwOn}/> {swhOn.toString()}
      <hr/>
      <UncontrolledAccordion title={'Uncontrolled Accordion'}/>
      <hr/>
      <UncontrolledRating onChange={x => x}/>
    </div>
  );
}

export default App;
