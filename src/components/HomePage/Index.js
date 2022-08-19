import React from "react";
import {Homepage} from "./Homepage";
import HomeNews from "./HomeNews"
import {Video} from "./Video";

export const Index = props =>
    <div>
        <Homepage/>
        <HomeNews homeNews={props.homeNews}/>
        <Video/>
    </div>;