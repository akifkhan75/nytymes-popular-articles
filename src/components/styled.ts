import { Link } from "react-router-dom";
import styled from "styled-components";

export const ArticleCard = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    flex: 30% 0 0;
    border-bottom: solid 1px #DFDFDF;
`;

export const ArticlesWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1280px;
    margin: 0 auto;
`;

export const ArticleContent = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-item: flex-start;
    gap: 20px;
`

export const ArticleHeading = styled.h2`
    font-size: 1.375rem;
    line-height: 1.15em;
    margin: 0;
    color: #121212;
    text-align: left;
`;

export const ArticleDetails = styled.p`
    color: #5A5A5A;
    font-size: 0.875rem;
    letter-spacing: 0.1px;
    line-height: 1.1875rem;
    text-align: left
`;

export const ArticleInfo = styled.p`
    font-family: nyt-franklin, helvetica, arial, sans-serif;
    font-size: 0.625rem;
    line-height: 1.25em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0;
    color: #727272;
    text-align: left;
`;

export const ArticleDetailsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px
`