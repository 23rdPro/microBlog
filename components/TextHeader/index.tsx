import { logoText, slogan, textHeader } from "utils/article.service"
import styles from "@styles/component.module.css"


export const TextHeader = () => {
    return (
        <header className="w-full container mx-auto">
            <div className={`flex flex-col items-center py-12 ${logoText.variable}`}>
                <a className={`font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl ${styles.logo}`} href="/">
                    <em>{textHeader}</em>
                </a>
                <p className="text-lg text-gray-600">
                    {slogan}
                </p>
            </div>
        </header>
    )
}

