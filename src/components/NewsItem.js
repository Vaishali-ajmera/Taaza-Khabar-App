// eslint-disable-next-line 

import React from 'react'

const NewsItem = (props)=> {
    let {title, description, imageUrl, newsUrl,author, date,source} = props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={imageUrl?imageUrl:"https://fdn.gsmarena.com/imgroot/news/21/03/xiaomi-new-logo/-952x498w6/gsmarena_005.jpg"
            } className="card-img-top" alt="..."/>
            <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style = {{left:"80%",zIndex:"1"}}>{source}</span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className = "text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target = "_blank" className="btn btn-sm btn-danger">Read More</a>
            </div>
        </div>
      </div>
    )
 
}

export default NewsItem
