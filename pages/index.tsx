import type { NextPage } from 'next'
import { BlogPageProps } from 'utils/article.types';
import ArticleList from '@components/ArticleList';
import Pagination from '@components/ArticleList/Pagination';
import { Config, pageCount } from 'utils/article.service';
import ContentfulApi from 'utils/contentful.api';
import { Layout } from '@components/Layout';
import ArticleIndexPage from './articles';
// import NextSeo from 'next-seo';


const Home: NextPage<BlogPageProps> = (props) => {
  const { articleSummaries, totalPages, currentPage } = props

  return (
    <Layout home>
      <ArticleList 
        articleSummaries={articleSummaries}
        totalPages={totalPages}
        currentPage={currentPage}
       
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const articleSummaries = await ContentfulApi.getArticlesSummary(1);  
  const totalPages = pageCount(articleSummaries.total / Config.pagination.pageSize)
  // const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  // const prevDisabled = parseInt(currentPage, 10) === 1; 
  ;

  return {
    props: {
      articleSummaries: articleSummaries.items,
      totalPages,
      currentPage: "1",
      nextDisabled: false,
      prevDisabled: false,
    },
  };
}

export async function getStaticPaths() {
  const article = await ContentfulApi.getArticle('violin')
  // console.log("_________+++++++++++++++++++==============")
  // console.log(article)

  return {
    props: {}
  }
}

export default Home