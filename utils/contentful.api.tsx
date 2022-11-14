import { ArticleDetail, BlogPostCollections, ItemProps } from "./article.interface";
import { paginationConfig } from "./article.service";



export default class ContentfulApi {

  static async makeCall(query: string, variables={}){
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`
    const fetchOpts = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    };
    const response = await fetch(fetchUrl, fetchOpts).then((resp) => resp.json());
    const data: BlogPostCollections = response.data.blogPostCollection 
      ? response.data.blogPostCollection 
      : []
    ;
    // return {
    //   props: { data }
    // };
    return data
    console.log("__----______---____---if we must use props error")

  };

  static async getArticlesTotal(){
    const query = `{
      blogPostCollection{
        total
      }
    }`;
    const response = await this.makeCall(query);
    const total: number = response.total ? response.total : 0;
    return total
    // const articlesTotal = response.props.posts.total ? response.props.posts.total : 0;
    // return articlesTotal;
  };

  static async getArticle(slug: Array<string>) {
    const query = `query GetArticleBySlug($slug: String!){
      blogPostCollection(limit: 1, where: {slug: $slug}) {
        items {
          sys {
            id
          }
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          articleImage {
            sys {
              id
            }
            url
            title
            description
            width
            height
          }
          date
          title
          author
          slug
          excerpt
          body {
            json
            links {
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on BlogPost {
                    title
                    slug
                  }
                }
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on Note {
                    description
                    note
                  }
                  ... on CodeBlock {
                    language
                    description
                    code
                  }
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on Author {
                    name
                    summary
                    github
                    linkedIn
                    twitter
                    image {
                      title
                      url
                      width
                      height
                      description
                      size
                    }
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                  size
                }
              }
            }
          }
        }
      }
    }`;
    const variables = { slug: slug.pop() };
    const response = await this.makeCall(query, variables);
    const article = response.items ? response.items : [];
    return article;

    // const env = process.env.SPACE_ID
    

    // const variables = { slug: slug.pop() }
    // const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${env}`
    // const fetchOpts = {
    //   method: "POST",
    //   headers: {
    //     Authorization: "Bearer " + process.env.ACCESS_TOKEN,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ query, variables }),
    // };

    // const response = await fetch(fetchUrl, fetchOpts).then((resp) => (resp.json()));
    // const post = response.data.blogPostCollection 
    //   ? response.data.blogPostCollection 
    //   : []
    // ;
    // return { props: { post }}
    
  };

  static async getArticles(){
    const query = `{
      blogPostCollection(limit: 10) {
        total
        items {
          sys {
            id
          }
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          date
          title
          slug
          excerpt
          body {
            json
            links {
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on BlogPost {
                    title
                    slug
                  }
                }
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on Note {
                    description
                    note
                  }
                  ... on CodeBlock {
                    language
                    description
                    code
                  }
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on Author {
                    name
                    summary
                    github
                    linkedIn
                    twitter
                    image {
                      title
                      url
                      width
                      height
                      description
                      size
                    }
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                  size
                }
              }
            }
          }
        }
      }
    }`;

    const response = await this.makeCall(query)
    const articles: Array<ItemProps> = response.items ? response.items : [];
    // const articles = response.props.posts.items 
    //   ? response.props.posts.items
    //   : []
    // ;
    return articles;
  };

  static async getPaginatedArticles(page: number) {
    const skipPage = page === 1 ? 0 : page - 1;
    const skip = skipPage > 0 ? paginationConfig.pagination.perPage*skipPage : 0;
    const query = `{
      blogPostCollection(limit:${paginationConfig.pagination.perPage}, skip:${skip}, order:date_DESC) {
        total
        items {
          sys {
            id
          }
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          date
          title
          slug
          excerpt
          author
          articleImage {
            sys {
              id
            }
            url
            title
            description
            width
            height
          }
        }
      }
    }`;
    const response = await this.makeCall(query);
    const paginatedArticles = response ? response : { total: 0, items: [] } ;
    return paginatedArticles;
  };

  // static async getArticlesSummary(page: number){
  //   const skipMultiplier = page === 1 ? 0 : page - 1;
  //   const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;
  //   const query = `{
  //     blogPostCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: date_DESC){
  //       total
  //       items{
  //         sys{
  //           id
  //         }
  //         contentfulMetadata{
  //           tags{
  //             id
  //             name
  //           }
  //         }
  //         date
  //         title
  //         slug
  //         excerpt
  //       }
  //     }
  //   }`;
  //   const response = await this.makeCall(query)
  //   const paginatedArticleSummary = response.props.posts 
  //     ? response.props.posts 
  //     : { total: 0, items: [] }
  //   ;

  //   return paginatedArticleSummary
  // };
 
};
