import React, { Component } from "react"; 
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {

static defaultProps = {
  country: 'in',
  pagesize: 6,
  category: "general"
}
static propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
};

constructor(props) {
  super(props);
  this.state = {
    articles: [],
    page: 1,
    totalResults: 0,
  };
  document.title = `P.R.D. News - ${this.props.category} get daily news about the world for free!`;
}
 
  async updateNews(){ 
    this.props.setProgress(10);
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles, 
      totalResults:parseData.totalResults, 
    }); 
    this.props.setProgress(100);
  }  

  async componentDidMount() {
    this.updateNews(); 
  }   
  
  fetchMoreData = async () => {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat( parseData.articles),
      totalResults:parseData.totalResults,
      page: this.state.page + 1
    });
 };

  render() {
    return (
      <div>
          <h3 className="text-center my-4">{`P.R.D. News - Top Headlines on ${this.props.category}`}</h3>
         
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-lg-4 col-md-6" key={element.url}>
                    <Newsitem
                      title={
                        element.title ? element.title.slice(0, 60) + " ..." : ""
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 80) + " ...." : ""
                      }
                      imgurl={element.urlToImage}
                      url={element.url}
                      author={!element.author?"Unknown":element.author}
                      date={element.publishedAt.slice(0, 10)}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        



      </div>
    );
  }
}

export default News;
