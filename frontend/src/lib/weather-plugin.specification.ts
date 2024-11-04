/*
 * Copyright 2015-2022 Ritense BV, the Netherlands.
 *
 * Licensed under EUPL, Version 1.2 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {PluginSpecification} from '@valtimo/plugin';
import {WeatherConfigurationComponent} from './components/weather-configuration/weather-configuration.component';
import {WEATHER_PLUGIN_LOGO_BASE64} from './assets';
import {GetPredictionConfigurationComponent} from './components/get-prediction/get-prediction-configuration.component';

const weatherPluginSpecification: PluginSpecification = {
  pluginId: 'weather',
  pluginConfigurationComponent: WeatherConfigurationComponent,
  pluginLogoBase64: WEATHER_PLUGIN_LOGO_BASE64,
  functionConfigurationComponents: {
    'get-prediction': GetPredictionConfigurationComponent,
  },
  pluginTranslations: {
    nl: {
      "title": "Weer",
      "get-prediction": "Voorspelling ophalen",
      "description": "Voorspel het weer met de Weer-plugin.",
      "configurationTitle": "Configuratienaam",
      "configurationTitleTooltip":
        "De naam van de huidige plugin-configuratie. Onder deze naam is de configuratie in de rest van de applicatie te vinden.",
      "url": "Weer-URL",
      "urlTooltip": "Een URL naar de REST-API van Weer",
      "address": "Adres",
      "addressTooltip": "Het adres."
    },
    en: {
      title: 'Weather',
      'get-prediction': 'Get prediction',
      description: 'Predict the weather with the Weather plugin.',
      configurationTitle: 'Configuration name',
      configurationTitleTooltip:
        'The name of the current plugin configuration. Under this name, the configuration can be found in the rest of the application.',
      url: 'Weather URL',
      urlTooltip: 'A URL to the REST API of Weather',
      address: 'Address',
      addressTooltip: 'The address.',
    },
    de: {
      "title": "Wetter",
      "get-prediction": "Vorhersage abrufen",
      description: 'Predict the weather with the Weather plugin.',
      "configurationTitle": "Konfigurationsname",
      "configurationTitleTooltip":
        "Der Name der aktuellen Plugin-Konfiguration. Unter diesem Namen kann die Konfiguration im restlichen Teil der Anwendung gefunden werden.",
      "url": "Wetter-URL",
      "urlTooltip": "Eine URL zur REST-API des Wetters",
      "address": "Adresse",
      "addressTooltip": "Die Adresse."
    },
  },
};

export {weatherPluginSpecification};
