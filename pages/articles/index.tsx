import ArticleList from "@components/ArticleList";
import { Layout } from "@components/Layout";
import { PaginatedListProps } from "@utils/article.interface";
import { pageCount, paginationConfig } from "@utils/article.service";
import ContentfulApi from "@utils/contentful.api";
import { GetStaticProps, NextPage } from "next";

const ArticleIndex: NextPage<PaginatedListProps> = (props: PaginatedListProps) => {
  const { articles, currentPage, totalPages, prevDisabled, nextDisabled } = props;

  return (
    <Layout home>
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList
          articles={articles}
          currentPage={currentPage}
          totalPages={totalPages}
          prevDisabled={prevDisabled}
          nextDisabled={nextDisabled}
        />
      </section>
    </Layout>
  )
}
export default ArticleIndex

export const getStaticProps: GetStaticProps = async () => {
  const paginatedArticles = await ContentfulApi.getPaginatedArticles(1);
  const totalPages = pageCount(paginatedArticles.total/paginationConfig.pagination.perPage);

  return {
    props: {
      articles: paginatedArticles,
      currentPage: "1",
      totalPages,
    }
  }
}


// import { NextPage } from "next";
// import { Layout } from "@components/Layout";
// import ArticleList from "@components/ArticleList";
// import ContentfulApi from "@utils/contentful.api";
// import { pageCount } from "@utils/article.service";

// export default function ArticleIndexPage(props: BlogPageProps) {
//     const { articleSummaries, totalPages, currentPage } = props

//     return (
//         <Layout home>
//             <ArticleList 
//                 articleSummaries={articleSummaries}
//                 totalPages={totalPages}
//                 currentPage={currentPage}
//                 // nextDisabled={nextDisabled}
//                 // prevDisabled={prevDisabled}
//             />
//         </Layout>
//     );
// }


// export async function getStaticProps() {
//     const articleSummaries = await ContentfulApi.getArticlesSummary(1);  
//     const totalPages = pageCount(articleSummaries.total / Config.pagination.pageSize)
//     // const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
//     // const prevDisabled = parseInt(currentPage, 10) === 1; 
//     ;
  
//     return {
//       props: {
//         articleSummaries: articleSummaries.items,
//         totalPages,
//         currentPage: "1",

//       },
//     };
//   }
