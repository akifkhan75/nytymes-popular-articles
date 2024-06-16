export interface I_Article {
    id: number;
    title: string;
    abstract: string;
    byline: string;
    published_date: string;
    media?: I_Media[];
  }

  interface I_Media {
    caption: string;
    'media-metadata': I_MetaData[];
  }

  interface I_MetaData {
    url: string;
  }