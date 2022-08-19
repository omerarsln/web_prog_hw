import React from "react";
import "./HomeNewsItem.css"
import {Link} from "react-router-dom";

export const HomeNewsItem = props =>
    <div className="homeNewsItem">
        <Link to={"/" + props.homeNews.id}>
            <img alt="Haber Resmi" className="homeNewsItemPhoto" src={props.homeNews.photo}/>
        </Link>
        <h3 style={{color: "black" , background : "white"}}>{props.homeNews.title}</h3>
    </div>;
