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
      title: 'Weather',
      'get-prediction': 'Bericht plaatsen',
      'get-prediction-with-file': 'Bericht plaatsen met bestand',
      url: 'Weather URL',
      urlTooltip: 'Een URL naar de REST API van Weather.',
      description: 'Publiceer berichten met de Weather plugin.',
      configurationTitle: 'Configuratienaam',
      configurationTitleTooltip:
        'De naam van de huidige plugin-configuratie. Onder deze naam kan de configuratie in de rest van de applicatie teruggevonden worden.',
      token: 'Token',
      tokenTooltip: 'Authenticatie token met vereiste scopes.',
      channel: 'Kanaal',
      channelTooltip:
        'Kanaal, privégroep of chatkanaal om een bericht naar te verzenden. Dit kan een gecodeerde ID of een naam zijn. Zie hieronder voor meer details.',
      channels: 'Kanalen',
      channelsTooltip:
        "Door komma's gescheiden lijst met kanaalnamen of ID's waar het bestand zal worden gedeeld.",
      message: 'Bericht',
      messageTooltip: 'De berichttekst.',
    },
    en: {
      title: 'Weather',
      'get-prediction': 'Post message',
      'get-prediction-with-file': 'Post message with file',
      url: 'Weather URL',
      urlTooltip: 'A URL to the REST API of Weather',
      description: 'Post messages with the Weather plugin.',
      configurationTitle: 'Configuration name',
      configurationTitleTooltip:
        'The name of the current plugin configuration. Under this name, the configuration can be found in the rest of the application.',
      token: 'Token',
      tokenTooltip: 'Authentication token bearing required scopes.',
      channel: 'Channel',
      channelTooltip:
        'Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See below for more details.',
      channels: 'Channels',
      channelsTooltip:
        'Comma-separated list of channel names or IDs where the file will be shared.',
      message: 'Message',
      messageTooltip: 'The message text.',
      filename: 'Filename',
      filenameTooltip: 'The filename of the file.',
    },
    de: {
      title: 'Weather',
      'get-prediction': 'Kommentar posten',
      'get-prediction-with-file': 'Kommentar mit Datei posten',
      url: 'Weather URL',
      urlTooltip: 'Die URL zur REST API von Weather',
      description: 'Veröffentlichen Sie Nachrichten mit dem Weather-Plugin.',
      configurationTitle: 'Konfigurationsname',
      configurationTitleTooltip:
        'Der Name der aktuellen Plugin-Konfiguration. Unter diesem Namen ist die Konfiguration im Rest der Anwendung zu finden.',
      token: 'Token',
      tokenTooltip: 'Authentifizierungstoken mit erforderlichen scopes.',
      channel: 'Channel',
      channelTooltip:
        'Kanal, private Gruppe oder IM-Kanal, an den die Nachricht gesendet werden soll. Kann eine codierte ID oder ein Name sein. Siehe unten für weitere Details.',
      channels: 'Kanäle',
      channelsTooltip:
        'Durch Komma getrennte Liste von Kanalnamen oder IDs, wo die Datei geteilt wird.',
      message: 'Kommentar',
      messageTooltip: 'Der Nachrichtentext.',
      filename: 'Dateiname',
      filenameTooltip: 'Der Dateiname der Datei.',
    },
  },
};

export {weatherPluginSpecification};
