import React from "react";
import ReactDOM from "react-dom";
import Post from "./Post";

const App = () => {
    return (
        <div>
       <Post author="Hyacinthia" date="22 maart 2022" text="Wat een mooie website"/>
       <Post author="Diana" date="22 maart 2022" text="Ja bedankt, ik heb echt mijn best gedaan" />
       <Post author="Rachel" date="22 maart 2022" text="We zijn bijna klaar" />
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector('#root'));