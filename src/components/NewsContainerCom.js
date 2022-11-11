import React, { Component } from 'react'
import NewsItemCom from './NewsItemCom'

export class NewsContainerCom extends Component {

    // article = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Indian Express"
    //         },
    //         "author": "Tech Desk",
    //         "title": "Samsung announces AX32, AX46 Air Purifiers: Check price and other details - The Indian Express",
    //         "description": "Both Samsung AX32 and AX46 air purifiers can be controlled using the company's SmartThings app.",
    //         "url": "https://indianexpress.com/article/technology/gadgets/samsung-ax32-ax46-air-purifiers-check-price-other-details-8247476/",
    //         "urlToImage": "https://images.indianexpress.com/2022/11/Samsung-Air-Purifier.jpg",
    //         "publishedAt": "2022-11-03T10:26:52Z",
    //         "content": "Samsung has launched the AX46 and AX32 air purifiers for the Indian market. The Internet of Things (IoT) enabled air purifiers are designed for master bedrooms, hospital rooms and fitness studios, wi… [+1515 chars]"
    //     }
    // ]

    constructor() {
        super();
        console.log("news container constructor");
        // this.state = {
        //     article: this.article    
        // }
        this.state = {
            article: []
        }
    }


    async componentDidMount() {
        let data = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bc1cb7866d4242768bb9e9e960bfd7cb");
        let parsedData = await data.json();
        this.setState({
            article: parsedData.articles
        })
    }

    render() {
        return (
            <div className="container">
                <h2>News Dose 24/7</h2>
                <div className="row">
                    {this.state.article.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItemCom title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default NewsContainerCom