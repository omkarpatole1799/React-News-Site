import React, { Component } from 'react'

export class NewsItemCom extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (

            <div className="card m-2" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary">Full News</a>
                </div>
            </div>
        )
    }
}

export default NewsItemCom