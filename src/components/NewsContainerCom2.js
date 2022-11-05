import React, { useState } from 'react'
import NewsItemCom2 from './NewsItemCom2'

function NewsContainerCom2() {
    let article = [
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Samsung announces AX32, AX46 Air Purifiers: Check price and other details - The Indian Express",
            "description": "Both Samsung AX32 and AX46 air purifiers can be controlled using the company's SmartThings app.",
            "url": "https://indianexpress.com/article/technology/gadgets/samsung-ax32-ax46-air-purifiers-check-price-other-details-8247476/",
            "urlToImage": "https://images.indianexpress.com/2022/11/Samsung-Air-Purifier.jpg",
            "publishedAt": "2022-11-03T10:26:52Z",
            "content": "Samsung has launched the AX46 and AX32 air purifiers for the Indian market. The Internet of Things (IoT) enabled air purifiers are designed for master bedrooms, hospital rooms and fitness studios, wi… [+1515 chars]"
        }
    ]

    const [state, setstate] = useState(article);
    console.log(state);

    // async componentDidMount() {
    //     // debugger;
    //     let data = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=ef988d6b5dce4215a3ce96e238b043e9");
    //     let parsedData = await data.json();
    //     setstate(parsedData);
    //     console.log(parsedData);
        
    // }


    return (
        <div className="container">
            {article.map((element) => {
                return <NewsItemCom2 title={element.title} description={element.description} />
            })}
        </div>
    )
}

export default NewsContainerCom2