import React from "react";
import "./homeNewsId.css"

export const homeNewsId = (props) => {

    return(
        <div className="homeNewsId">
            <h1>{props.news[props.match.params.id - 1].title}</h1>
            <img src={props.news[props.match.params.id -1].photo} alt="NewsId haber resmi"/>
            <div dangerouslySetInnerHTML={ {__html: props.news[props.match.params.id -1].content} } />
        </div>
    );
}