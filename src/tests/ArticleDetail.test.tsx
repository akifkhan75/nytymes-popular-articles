import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ArticleDetailPage from '../components/ArticleDetailPage';
import { I_Article } from '../types/type';

jest.mock('axios');

const mockArticle: I_Article = {
  id: 1,
  title: 'Article 1',
  abstract: 'Abstract 1',
  byline: 'Byline 1',
  published_date: '2021-01-01',
};

test('renders article details when article is found', async () => {
  (axios.get as jest.Mock).mockResolvedValueOnce({ data: { results: [mockArticle] } });

  render(
    <Router>
      <Routes>
        <Route path="/article/:id" element={<ArticleDetailPage />} />
      </Routes>
    </Router>,
    // { initialEntries: ['/article/1'] }
  );

  await waitFor(() => {
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.byline)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.published_date)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.abstract)).toBeInTheDocument();
  });
});

test('shows loading state initially', () => {
  render(
    <Router>
      <Routes>
        <Route path="/article/:id" element={<ArticleDetailPage />} />
      </Routes>
    </Router>,
    // { initialEntries: ['/article/1'] }
  );

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
