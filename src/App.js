
import './App.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';
import hiTranslation from './locales/hi.json';
import deTranslation from './locales/de.json';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import Search from './components/search/search';
import { useState } from 'react';
import  Forecast from './components/forecast/forecast';
import LanguageSelector from './components/language-selector/language-selector';


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
    hi: { translation: hiTranslation },
    de: { translation: deTranslation }
  },
  lng: 'en', //  to Set the default language
  fallbackLng: 'en', // Fallback language if translation is missing
  interpolation: { escapeValue: false }
});


function App() {

  const { t } = useTranslation();
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {



    const [lat, lon] = searchData.value.split('');

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {

        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });

      })

      .catch((err) => console.log(err));
  }
  console.log(currentWeather);
  console.log(forecast);




  return (

    <I18nextProvider i18n={i18n}>
      <div className="container">
        <h1>{t('app.title')}</h1>
        <Search
          onSearchChange={handleOnSearchChange}
        />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
        <LanguageSelector />
      </div>
    </I18nextProvider>
  );
}

export default App;

