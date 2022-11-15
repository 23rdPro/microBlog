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
