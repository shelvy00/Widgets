import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
      title: "what is react?",
      content: "react is a front end javascript framework"
    },
    {
        title: "why use react",
        content: "react is a favorite JS library among engineers"
    },
    {
        title: "how do you use react",
        content: "you use react by creating components"
    }
];

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    //const [showDropdown, setShowDropdown] = useState(true);

    /*<button onClick={() => {setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
      {showDropdown ?  
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
      : null
      }*/

    return(
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items}/>  
      </Route>
      <Route path="/list">
        <Search />    
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>    
    </div>
   );
};
