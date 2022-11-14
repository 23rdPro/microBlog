// import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const TopNav = () => {
    return (
        <nav className="w-full py-4 bg-blue-800 shadow">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
                <nav>
                    <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                        <li><a className="hover:text-gray-300 hover:underline px-4" href="/">Home</a></li>
                    </ul>
                </nav>

                <div className="flex items-center text-lg no-underline text-white pr-6">
                    <a className="" href="https://twitter.com/20thirdPro">
                        {/* <FontAwesomeIcon icon={faTwitter}/> */}
                    </a>
                    <a className="pl-6" href="https://www.linkedin.com/in/23rdpro/">
                        {/* <FontAwesomeIcon icon={faLinkedin}/> */}
                    </a>
                    <a className="pl-6" href="https://github.com/23rdPro">
                        {/* <FontAwesomeIcon icon={faGithub}/> */}
                    </a>
                </div>
            </div>
        </nav>
    );
}