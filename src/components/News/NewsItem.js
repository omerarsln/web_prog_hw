import React from "react";
import "./NewsItem.css"
import {Link} from "react-router-dom";

export const NewsItem = props =>
    <div className="newsItem">
        <Link to={"/haberler/" + props.news.id}>
            <img alt="Haber Resmi" className="newsItemPhoto" src={props.news.photo}/>
        </Link>
        <h2 style={{color : "black"}}>{props.news.title}</h2>
    </div>;
