// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PaginatedListProps } from "@utils/article.interface";
import Link from "next/link";

export default function Pagination(params: PaginatedListProps) {
    const { currentPage, totalPages, prevDisabled, nextDisabled } = params;
    const prevPageUrl = currentPage === "2" 
        ? "/articles"
        : `/articles/page/${parseInt(currentPage, 10)-1}`
    ;
    const nextPageUrl = `/articles/page/${parseInt(currentPage, 10)+1}`;

    return (
        <div className="flex items-center py-8">
            {! prevDisabled && (
                <Link href={prevPageUrl} className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
                    {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
                    <span className="ml-2">PREV</span>
                    <span className="ml-3"></span>
                </Link>
            )}
            <div className="bg-white-800 hover:bg-green-900 font-semibold text-green text-sm flex items-center justify-center ml-2">
                {`Page ${currentPage} of ${totalPages}`}
            </div>
            {!nextDisabled && (
                <Link className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3" href={nextPageUrl}
                >
                    <span className="ml-2">NEXT </span>
                    {/* <FontAwesomeIcon icon={faArrowRight} className="ml-2"/> */}
                </Link>
            )}
        </div>
    );
};

