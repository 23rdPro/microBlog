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


// import ArticleList from "@components/ArticleList";
// import ContentfulApi from "@utils/contentful.api";
// import { pageCount } from "@utils/article.service";
// import Home from "@pages/index";



// export default function ArticleIndex(props: BlogPageProps){
//     const { articleSummaries, totalPages, currentPage } = props
//     return (
//         <ArticleList 
//             articleSummaries={articleSummaries}
//             totalPages={totalPages}
//             currentPage={currentPage}
//             // nextDisabled={nextDisabled}
//             // prevDisabled={prevDisabled}
//         />
//     );
// }


// export async function getStaticPaths() {
//     const totalArticles = await ContentfulApi.getArticlesTotal();
//     const totalPages = pageCount(totalArticles / Config.pagination.pageSize + 1);

//     const paths = [];

//     for (let page=2; page<= totalPages; page++){
//         paths.push({ params: { page: page.toString() } });
//     }
//     return {
//         paths,
//         fallback: false,
//     };
// }


// export async function getStaticProps({ params }: any) {
//     const articleSummaries = await ContentfulApi.getArticlesSummary(params.page);
//     const totalPages = pageCount(articleSummaries.total / Config.pagination.pageSize);

//     return {
//         props: {
//             articleSummaries: articleSummaries.items,
//             totalPages,
//             currentPage: params.page,
//         },
        
//     };
// }