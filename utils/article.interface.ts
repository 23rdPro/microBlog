import { ReactNode } from "react";


export interface BlogPostCollections {
    total: number;
    items: Array<ItemProps>;
    // limit: number;  todo
    // skip: number;

};

export interface ItemProps {
    [keys: string]: any;
};

export interface Article extends BlogPostCollections{
    sys: {
        id: string;
    };
    date: string;
    title: string;
    articleImage: {
        sys: { id: string };
        url: string;
        title: string;
        width: string;
        height: string
        description: string;
    };
    slug: string;
    body: string;
    excerpt: string;
    author: string;
    contentfulMetadata: {
        tags: Array<object>;
    };
};


export interface Author {
    name: string;
    phone: string;
    shortBio: string;
    title: string;
    email: string;
    company: string;
    twitter: string;
    facebook: string;
    github: string;
};

export interface PaginatedListProps {
    articles: {
        items: Array<Article>;
    };
    totalPages: string;
    currentPage: string;
    prevDisabled: Boolean;
    nextDisabled: Boolean;
};

export interface ArticleDetail {
    article: Article;
    detailPage: Boolean;
    dSetHtml: string
    toc: Array<object>;
};

export interface pageProps { 
    children?: ReactNode, 
    home?: Boolean, 
    detailPage?: Boolean,
}; 
