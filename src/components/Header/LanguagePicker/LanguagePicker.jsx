import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguagePicker = () => {
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
      i18n.changeLanguage(lang);
    }
    return (
        <div>
            <nav className="languagepicker">
                <button  className="languagepicker__item" onClick={() => handleClick('en')}>
                    English
         </button>
                <button className="languagepicker__item"  onClick={() => handleClick('uk')}>
                    Ukrainian
         </button>
                <button className="languagepicker__item" onClick={() => handleClick('ru')}>
                    Russian
         </button>
            </nav>
        </div>
    )
}

export default LanguagePicker;
