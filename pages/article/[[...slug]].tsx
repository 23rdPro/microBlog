import ArticlePage from "@components/ArticlePage";
import { Layout } from "@components/Layout";
import { SideBar } from "@components/SideBar";
import { ArticleDetail } from "@utils/article.interface";
import ContentfulApi from "@utils/contentful.api";
import { NextPage } from "next";
import parameterize from "parameterize";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
import { visit } from "unist-util-visit";


const Article: NextPage<ArticleDetail> = (props) => {
    const { article, detailPage, dSetHtml, toc } = props
    return (
        <Layout detailPage={detailPage}>
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                <ArticlePage 
                 article={article} 
                 detailPage 
                 dSetHtml={dSetHtml} 
                 toc={toc}
                />
            </section>
            <SideBar 
             article={article} 
             detailPage 
             dSetHtml={dSetHtml} 
             toc={toc}
            />
            
        </Layout>
    );
}



export async function getStaticPaths() {
    const posts = await ContentfulApi.getArticles();
    // const paths = posts.map(post => ({ params: { slug: [ post.slug ] }}))
    const paths = posts.map((post) => ({ params: { slug: [ post.slug ] }}))

    return { paths, fallback: false, };
}


export async function getStaticProps({ params }: any) {    
    const article = await (await ContentfulApi.getArticle(params.slug)).pop();
    const toc: Array<object> = [];
    const showdown = require('showdown')
    const converter = new showdown.Converter()
    const mdxToHtmlString = converter.makeHtml(article?.excerpt ?? article?.excerpt)
    const dSetHtml = unified()
     .use(rehypeParse, {
        fragment: true,
     })
     .use(() => {
        return (tree) => {
            visit(tree, 'element', (node) => {
                if (node.tagName === 'h2') {
                    const pk = parameterize((node.children[0] as any).value);
                    node.properties?.id ? node.properties?.id : node.properties?.id 

                    toc.push({
                        pk,
                        title: (node.children[0] as any).value,
                    })

                    node.children.unshift(({
                        type: 'element',
                        tagName: 'a',
                        properties: {
                            href: `#${pk}`,
                            class: "",
                            'aria-hidden': 'true'
                        }
                    } as any))
                    console.log("node", node)
                }; 
            })
        }
     })
     .use(rehypeStringify)
     .processSync(mdxToHtmlString)
     .toString();
    const detailPage = true;

    return {
        props: { article, detailPage, dSetHtml, toc }
    }
}


export default Article
