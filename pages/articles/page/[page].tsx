import ArticleList from "@components/ArticleList";
import { Layout } from "@components/Layout";
import { PaginatedListProps } from "@utils/article.interface";
import { pageCount } from "@utils/article.service";
import ContentfulApi from "@utils/contentful.api";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";


const PaginatedArticle: NextPage<PaginatedListProps> = (props: PaginatedListProps) => {
    const { articles, currentPage, totalPages, prevDisabled, nextDisabled } = props

    return (
        <Layout>
            <ArticleList
            articles={articles}
            currentPage={currentPage}
            totalPages={totalPages}
            prevDisabled={prevDisabled}
            nextDisabled={nextDisabled}
            />
        </Layout>
      )
}
export default PaginatedArticle

export const getStaticPaths: GetStaticPaths = async () => {
    const total = await ContentfulApi.getArticlesTotal();
    const totalPages = pageCount(total);
    const paths = [];

    for (let i=2; i<=totalPages; i++) {
        paths.push({ params: { page: i.toString() }});
    }
    return { paths, fallback: false }
};

export const getStaticProps: GetStaticProps = async (params: any) => {
    const paginatedArticles = await ContentfulApi.getPaginatedArticles(params.page);
    const totalPages = pageCount(paginatedArticles.total);
    return {
        props: {
            articles: paginatedArticles,
            currentPage: params.page || null,
            totalPages
        },
    };
}


