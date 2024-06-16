import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import { I_Article } from '../types/type';

const articles: I_Article[] = [
  { id: 1, title: 'Article 1', abstract: 'Abstract 1', byline: 'Byline 1', published_date: '2021-01-01' },
  { id: 2, title: 'Article 2', abstract: 'Abstract 2', byline: 'Byline 2', published_date: '2021-01-02' },
];

test('renders articles and links to details page', () => {
  render(
    <Router>
      <ArticleList articles={articles} />
    </Router>
  );

  articles.forEach(article => {
    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.abstract)).toBeInTheDocument();
    const linkElement = screen.getByText(article.title).closest('a');
    expect(linkElement).toHaveAttribute('href', `/article/${article.id}`);
  });
});
