import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticles } from '../api/nytymes';
import { I_Article } from '../types/type';
import { ArticleDetails, ArticleDetailsWrapper, ArticleHeading, ArticleInfo, ArticlesWrapper } from './styled';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<I_Article | null>(null);

  useEffect(() => {
    const getArticle = async () => {
      const articles = await fetchArticles();
      const selectedArticle = articles.find(article => article.id === Number(id));
      setArticle(selectedArticle || null);
    };

    getArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const articleImage = article.media && article.media[0] ? article.media[0]['media-metadata'][2].url : '';
  const caption = article.media && article.media[0] ? article.media[0].caption : '';
  return (
    <ArticlesWrapper>
      <ArticleDetailsWrapper>

        <img src={articleImage} alt="Article Image." />

        <div>
          <ArticleHeading>{article.title}</ArticleHeading>
          <ArticleDetails>{article.abstract}</ArticleDetails>
          <ArticleDetails>{caption}</ArticleDetails>
          <ArticleInfo>{article.byline}</ArticleInfo>
          <ArticleInfo>{article.published_date}</ArticleInfo>
        </div>
      </ArticleDetailsWrapper>
    </ArticlesWrapper>
  );
};

export default ArticleDetailPage;
