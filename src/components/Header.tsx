import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom"

//компонент хедера
export function Header() {
    const { i18n, t } = useTranslation("header");

    return (
        <header className="bg-blue-500 text-white px-8 py-4 h-20 flex items-center justify-between">
            <p className="font-semibold text-xl">Balance checker</p>
            <div className="flex gap-8 items-center">
                <NavLink to={"/"} className="font-semibold">{t("nav_devices")}</NavLink>
                <div className="text-sm font-medium select-none flex items-center">
                    <button
                        onClick={() => i18n.changeLanguage("en")}
                        className={`cursor-pointer ${i18n.language === "en"
                            ? "text-gray-900 hover:text-black"
                            : "text-white hover:text-gray-200"} `}>
                        EN
                    </button>

                    <span className="mx-1 text-white">/</span>

                    <button
                        onClick={() => i18n.changeLanguage("ru")}
                        className={`cursor-pointer ${i18n.language === "ru"
                            ? "text-gray-900 hover:text-black"
                            : "text-white hover:text-gray-200"} `}>
                        RU
                    </button>
                </div>
            </div>
        </header>
    )
}

