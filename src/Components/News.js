import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(true)
  const[page, setPage] = useState(1)
  const[totalResults, setTotalResults] = useState(0)
  
  
  const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  }
  
  

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsdata.io/api/1/news?apiKey=${props.apikey}&q=${props.category}&country=${props.country}&language=en`;

    const data = await fetch(url);
    props.setProgress(50);
    const parsedData = await data.json();
    setArticles(parsedData.results)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-NewsDekho`; 
    updateNews();
  }, [props.category])

  const fetchMoreData = async () => {
    const url = `https://newsdata.io/api/1/news?apiKey=${props.apikey}&category=${props.category}&language=en`;
    // const url = "https://newsdata.io/api/1/news?apikey=pub_197109592872956e257032cd2ecda33625f91"
    const data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.results))
    setTotalResults(parsedData.totalResults)
    setPage(page+1) 
  };
  let k = 1;
    return (
      <>
          <h1 className="text-center mb-1" style={{ margin: '40px 0px', marginTop: '80px'}}>
            NewsDekho - Top {capitalizeFirstLetter(props.category)} HeadLines</h1>
            {loading && <Spinner/>}
            
          <InfiniteScroll
          
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}>
              
            <div className="container">
            <div className="row my-3">
              {articles.map((article) => { 
                return <div className="col-md-4" key={k++}>
                  <NewsItem
                    title={article.title}
                    description={article.description}
                    imgUrl={article.img_url}
                    newsUrl={article.link}
                    date={article.pubDate}
                    author={article.creator}
                    source={article.source_id}
                    />
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
  pageSize: 20,
  category: "top",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News
