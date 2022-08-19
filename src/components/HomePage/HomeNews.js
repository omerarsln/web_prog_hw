import React from "react";
import "./HomeNews.css"
import {HomeNewsItem} from "./HomeNewsItem.js"

class HomeNews extends React.Component{

    render() {
        return(
            <div className="homeNews">
                {this.props.homeNews.map(homeNews => (
                    <HomeNewsItem key={homeNews.id} homeNews={homeNews}/>
                ))}
            </div>
        )
    }
}
export default HomeNews;