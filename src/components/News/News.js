import React from "react";
import "./News.css"
import {NewsItem} from "./NewsItem.js"

class News extends React.Component{

    render() {
        console.log(this.props)
        return(
            <div className="news">
                {this.props.news.map(news => (
                    <NewsItem key={news.id} news={news}/>
                ))}
            </div>
        )
    }
}
export default News;