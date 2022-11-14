// import { extractDate } from "@utils/article.service";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PaginatedListProps } from "@utils/article.interface"
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";
import ReactMarkdown from "react-markdown";


export default function ArticleList(params: PaginatedListProps) {
    const { articles, totalPages, currentPage } = params;
    const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
    const prevDisabled = parseInt(currentPage, 10) === 1;

    return (
        <>
            {articles.items.map((article) => (
                <article key={article.sys.id} className="flex flex-col shadow my-4">
                    <Link href={`article/${article.slug}`} className="hover:opacity-75">
                        {/* <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" /> */}
                        <Image 
                            alt={article.title}
                            src={article.articleImage.url}
                            height={100}
                            width={900}
                            style={{
                                maxWidth: '100%',
                                height: '100%'
                            }}
                        />
                    </Link>
                    <div className="bg-white flex flex-col justify-start p-6" >
                        {/* <Link href={`article/${article.slug}`} className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</Link> */}
                        <Link href={`article/${article.slug}`} className="text-2xl font-bold hover:text-gray-700 pb-4 prose-headings:prose-blue">
                            <ReactMarkdown>{article.title}</ReactMarkdown>
                        </Link>
                        {/* <p className="text-sm pb-3">
                            By <Link href="https://twitter.com/20thirdPro" className="font-semibold hover:text-blue-800">
                                    <FontAwesomeIcon icon={faTwitter} className="ml-1"/>
                                    <span className="ml-1">
                                        <ReactMarkdown>{article.author}</ReactMarkdown>
                                    </span>
                                </Link> On <time dateTime={extractDate(article.date)}>
                                    {extractDate(article.date)}
                                </time>
                        </p> */}
                        <Link href={`article/${article.slug}`} className="pb-2 prose">
                            <ReactMarkdown>{article.excerpt}</ReactMarkdown>
                        </Link>
                        <Link href={`article/${article.slug}`} className="uppercase text-gray-800 hover:text-black">
                            {/* Continue Reading <FontAwesomeIcon icon={faArrowRight} />          */}
                        </Link>
                    </div>
                </article>
            ))}
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
                articles={articles}
            />
        </>
    );
}
