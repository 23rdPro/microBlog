import Footer from "@components/Footer";
import { Header } from "@components/Header";
import { renderToString } from 'react-dom/server'
import { SideBar } from "@components/SideBar";
import { TextHeader } from "@components/TextHeader";
import { TopicNav } from "@components/TopicNav";
import { TopNav } from "@components/TopNav";
import { pageProps } from "@utils/article.interface";

export const Layout = ({ children, home }: pageProps) => {
    // const contentString = renderToString(children);
    return (
        <>
            <Header />
            <TopNav />
            <TextHeader />
            {/* <TopicNav /> */}
            <div className="container mx-auto flex flex-wrap py-6">
                {children}
                {/* <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                    {children}
                </section> */}
                {/* {home ? null : <SideBar />} */}
            </div>
            {/* <Footer /> */}
        </>
    );
}