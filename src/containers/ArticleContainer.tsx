import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api/nytymes';
import { I_Article } from '../types/type';
import ArticleList from '../components/ArticleList';

const ArticleContainer: React.FC = () => {
  const [articles, setArticles] = useState<I_Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
    };

    getArticles();
  }, []);

  return <ArticleList articles={articles} />;
};

export default ArticleContainer;
