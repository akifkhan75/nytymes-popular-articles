import React from 'react';
import { Link } from 'react-router-dom';
import { I_Article } from '../types/type';
import { ArticleCard, ArticleDetails, ArticleHeading, ArticleInfo, ArticlesWrapper } from './styled';

interface ArticleListProps {
    articles: I_Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {

    if (!articles) {
        return <div>Loading...</div>;
    }

    return (
        <ArticlesWrapper>
            {articles.map(article => {
                // const articleImage = article?.media && article.media[0].media-metadata;
                return (
                    <ArticleCard key={article.id} style={{ marginBottom: '10px' }}>
                        <Link to={`/article/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ArticleInfo>{article.byline}</ArticleInfo>
                            <ArticleHeading>{article.title}</ArticleHeading>
                            <ArticleDetails>{article.abstract}</ArticleDetails>
                            <ArticleInfo>Published On: {article.published_date}</ArticleInfo>
                        </Link>
                    </ArticleCard>
                )
            })}
        </ArticlesWrapper>
    );
};

export default ArticleList;
