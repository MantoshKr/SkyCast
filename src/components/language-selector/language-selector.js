import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <select value={i18n.language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="hi">Hindi</option>
            <option value="de">German</option>
        </select>
    );
}


export default LanguageSelector;