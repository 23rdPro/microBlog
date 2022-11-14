// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="w-full bg-white pb-12">
            <div className="w-full container mx-auto flex flex-col items-center">
                <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
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
        </footer>
    );
}