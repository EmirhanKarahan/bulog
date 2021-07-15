import React from 'react'
import { connect } from 'react-redux';
import ArticlePreview from './ArticlePreview'

const ArticleList = ({articles}) => {
    return articles.map((article) => <ArticlePreview key={article.id} {...article} />)
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    };
};

export default connect(mapStateToProps)(ArticleList)