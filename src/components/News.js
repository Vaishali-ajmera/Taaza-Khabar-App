import React, { useContext, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from 'react-router-dom';
import { NewsContext } from '../NewsContext';




const News = (props) => {

  const { setProgress, apiKey, pageSize } = useContext(NewsContext);
  const { category } = useParams();
  const categoryParam = category || 'general';
 

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const captializeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);

  }


  const updateNews = async () => {
    setProgress(10)

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${categoryParam}&apiKey=${apiKey}&page=1&pageSize=5&page=${page}&pageSize=${pageSize}`
    setLoading(true);
    let data = await fetch(url);
    setProgress(30)
    let parsedData = await data.json();
    setProgress(70);



    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    setLoading(false);
    setProgress(100)

  }

  useEffect(() => {
    document.title = `${captializeFirstLetter(categoryParam)} - TaazaKhabar`;
    updateNews();
    // eslint-disable-next-line
  }, [])


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${categoryParam}&apiKey=${apiKey}&page=1&pageSize=5&page=${page}&pageSize=${pageSize}`
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)

  }




  return (
    <>
      <h1 className="text-center" style={{ margin: '30px', marginTop: '90px' }}> TaazaKhabar - Top  {captializeFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element,index) => {
              return <div className="col-md-4" key={index}>
                <NewsItem title={element?.title} description={element?.description} imageUrl={element?.urlToImage} newsUrl={element?.url} author={element?.author} date={element?.publishedAt} source={element?.source?.name} />
              </div>

            })}
          </div>
        </div>
      </InfiniteScroll>

    </>




  )

}



News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
}


News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News
