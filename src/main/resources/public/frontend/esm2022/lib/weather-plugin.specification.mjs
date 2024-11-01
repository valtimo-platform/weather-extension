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
import { WeatherConfigurationComponent } from './components/weather-configuration/weather-configuration.component';
import { WEATHER_PLUGIN_LOGO_BASE64 } from './assets';
import { GetPredictionConfigurationComponent } from './components/get-prediction/get-prediction-configuration.component';
const weatherPluginSpecification = {
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
            configurationTitleTooltip: 'De naam van de huidige plugin-configuratie. Onder deze naam kan de configuratie in de rest van de applicatie teruggevonden worden.',
            token: 'Token',
            tokenTooltip: 'Authenticatie token met vereiste scopes.',
            channel: 'Kanaal',
            channelTooltip: 'Kanaal, privégroep of chatkanaal om een bericht naar te verzenden. Dit kan een gecodeerde ID of een naam zijn. Zie hieronder voor meer details.',
            channels: 'Kanalen',
            channelsTooltip: "Door komma's gescheiden lijst met kanaalnamen of ID's waar het bestand zal worden gedeeld.",
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
            configurationTitleTooltip: 'The name of the current plugin configuration. Under this name, the configuration can be found in the rest of the application.',
            token: 'Token',
            tokenTooltip: 'Authentication token bearing required scopes.',
            channel: 'Channel',
            channelTooltip: 'Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See below for more details.',
            channels: 'Channels',
            channelsTooltip: 'Comma-separated list of channel names or IDs where the file will be shared.',
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
            configurationTitleTooltip: 'Der Name der aktuellen Plugin-Konfiguration. Unter diesem Namen ist die Konfiguration im Rest der Anwendung zu finden.',
            token: 'Token',
            tokenTooltip: 'Authentifizierungstoken mit erforderlichen scopes.',
            channel: 'Channel',
            channelTooltip: 'Kanal, private Gruppe oder IM-Kanal, an den die Nachricht gesendet werden soll. Kann eine codierte ID oder ein Name sein. Siehe unten für weitere Details.',
            channels: 'Kanäle',
            channelsTooltip: 'Durch Komma getrennte Liste von Kanalnamen oder IDs, wo die Datei geteilt wird.',
            message: 'Kommentar',
            messageTooltip: 'Der Nachrichtentext.',
            filename: 'Dateiname',
            filenameTooltip: 'Der Dateiname der Datei.',
        },
    },
};
export { weatherPluginSpecification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1wbHVnaW4uc3BlY2lmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvd2VhdGhlci1wbHVnaW4uc3BlY2lmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUdILE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLG9FQUFvRSxDQUFDO0FBQ2pILE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSxvRUFBb0UsQ0FBQztBQUV2SCxNQUFNLDBCQUEwQixHQUF3QjtJQUN0RCxRQUFRLEVBQUUsU0FBUztJQUNuQiw0QkFBNEIsRUFBRSw2QkFBNkI7SUFDM0QsZ0JBQWdCLEVBQUUsMEJBQTBCO0lBQzVDLCtCQUErQixFQUFFO1FBQy9CLGdCQUFnQixFQUFFLG1DQUFtQztLQUN0RDtJQUNELGtCQUFrQixFQUFFO1FBQ2xCLEVBQUUsRUFBRTtZQUNGLEtBQUssRUFBRSxTQUFTO1lBQ2hCLGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQywwQkFBMEIsRUFBRSw4QkFBOEI7WUFDMUQsR0FBRyxFQUFFLGFBQWE7WUFDbEIsVUFBVSxFQUFFLHVDQUF1QztZQUNuRCxXQUFXLEVBQUUsNENBQTRDO1lBQ3pELGtCQUFrQixFQUFFLGtCQUFrQjtZQUN0Qyx5QkFBeUIsRUFDdkIsb0lBQW9JO1lBQ3RJLEtBQUssRUFBRSxPQUFPO1lBQ2QsWUFBWSxFQUFFLDBDQUEwQztZQUN4RCxPQUFPLEVBQUUsUUFBUTtZQUNqQixjQUFjLEVBQ1osaUpBQWlKO1lBQ25KLFFBQVEsRUFBRSxTQUFTO1lBQ25CLGVBQWUsRUFDYiw0RkFBNEY7WUFDOUYsT0FBTyxFQUFFLFNBQVM7WUFDbEIsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNELEVBQUUsRUFBRTtZQUNGLEtBQUssRUFBRSxTQUFTO1lBQ2hCLGdCQUFnQixFQUFFLGNBQWM7WUFDaEMsMEJBQTBCLEVBQUUsd0JBQXdCO1lBQ3BELEdBQUcsRUFBRSxhQUFhO1lBQ2xCLFVBQVUsRUFBRSxrQ0FBa0M7WUFDOUMsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxrQkFBa0IsRUFBRSxvQkFBb0I7WUFDeEMseUJBQXlCLEVBQ3ZCLCtIQUErSDtZQUNqSSxLQUFLLEVBQUUsT0FBTztZQUNkLFlBQVksRUFBRSwrQ0FBK0M7WUFDN0QsT0FBTyxFQUFFLFNBQVM7WUFDbEIsY0FBYyxFQUNaLHdIQUF3SDtZQUMxSCxRQUFRLEVBQUUsVUFBVTtZQUNwQixlQUFlLEVBQ2IsNkVBQTZFO1lBQy9FLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLGNBQWMsRUFBRSxtQkFBbUI7WUFDbkMsUUFBUSxFQUFFLFVBQVU7WUFDcEIsZUFBZSxFQUFFLDJCQUEyQjtTQUM3QztRQUNELEVBQUUsRUFBRTtZQUNGLEtBQUssRUFBRSxTQUFTO1lBQ2hCLGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQywwQkFBMEIsRUFBRSw0QkFBNEI7WUFDeEQsR0FBRyxFQUFFLGFBQWE7WUFDbEIsVUFBVSxFQUFFLGtDQUFrQztZQUM5QyxXQUFXLEVBQUUseURBQXlEO1lBQ3RFLGtCQUFrQixFQUFFLG9CQUFvQjtZQUN4Qyx5QkFBeUIsRUFDdkIsd0hBQXdIO1lBQzFILEtBQUssRUFBRSxPQUFPO1lBQ2QsWUFBWSxFQUFFLG9EQUFvRDtZQUNsRSxPQUFPLEVBQUUsU0FBUztZQUNsQixjQUFjLEVBQ1osNEpBQTRKO1lBQzlKLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLGVBQWUsRUFDYixpRkFBaUY7WUFDbkYsT0FBTyxFQUFFLFdBQVc7WUFDcEIsY0FBYyxFQUFFLHNCQUFzQjtZQUN0QyxRQUFRLEVBQUUsV0FBVztZQUNyQixlQUFlLEVBQUUsMEJBQTBCO1NBQzVDO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTUtMjAyMiBSaXRlbnNlIEJWLCB0aGUgTmV0aGVybGFuZHMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgRVVQTCwgVmVyc2lvbiAxLjIgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwczovL2pvaW51cC5lYy5ldXJvcGEuZXUvY29sbGVjdGlvbi9ldXBsL2V1cGwtdGV4dC1ldXBsLTEyXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1BsdWdpblNwZWNpZmljYXRpb259IGZyb20gJ0B2YWx0aW1vL3BsdWdpbic7XG5pbXBvcnQge1dlYXRoZXJDb25maWd1cmF0aW9uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlci1jb25maWd1cmF0aW9uL3dlYXRoZXItY29uZmlndXJhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtXRUFUSEVSX1BMVUdJTl9MT0dPX0JBU0U2NH0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IHtHZXRQcmVkaWN0aW9uQ29uZmlndXJhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2dldC1wcmVkaWN0aW9uL2dldC1wcmVkaWN0aW9uLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50JztcblxuY29uc3Qgd2VhdGhlclBsdWdpblNwZWNpZmljYXRpb246IFBsdWdpblNwZWNpZmljYXRpb24gPSB7XG4gIHBsdWdpbklkOiAnd2VhdGhlcicsXG4gIHBsdWdpbkNvbmZpZ3VyYXRpb25Db21wb25lbnQ6IFdlYXRoZXJDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICBwbHVnaW5Mb2dvQmFzZTY0OiBXRUFUSEVSX1BMVUdJTl9MT0dPX0JBU0U2NCxcbiAgZnVuY3Rpb25Db25maWd1cmF0aW9uQ29tcG9uZW50czoge1xuICAgICdnZXQtcHJlZGljdGlvbic6IEdldFByZWRpY3Rpb25Db25maWd1cmF0aW9uQ29tcG9uZW50LFxuICB9LFxuICBwbHVnaW5UcmFuc2xhdGlvbnM6IHtcbiAgICBubDoge1xuICAgICAgdGl0bGU6ICdXZWF0aGVyJyxcbiAgICAgICdnZXQtcHJlZGljdGlvbic6ICdCZXJpY2h0IHBsYWF0c2VuJyxcbiAgICAgICdnZXQtcHJlZGljdGlvbi13aXRoLWZpbGUnOiAnQmVyaWNodCBwbGFhdHNlbiBtZXQgYmVzdGFuZCcsXG4gICAgICB1cmw6ICdXZWF0aGVyIFVSTCcsXG4gICAgICB1cmxUb29sdGlwOiAnRWVuIFVSTCBuYWFyIGRlIFJFU1QgQVBJIHZhbiBXZWF0aGVyLicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1B1YmxpY2VlciBiZXJpY2h0ZW4gbWV0IGRlIFdlYXRoZXIgcGx1Z2luLicsXG4gICAgICBjb25maWd1cmF0aW9uVGl0bGU6ICdDb25maWd1cmF0aWVuYWFtJyxcbiAgICAgIGNvbmZpZ3VyYXRpb25UaXRsZVRvb2x0aXA6XG4gICAgICAgICdEZSBuYWFtIHZhbiBkZSBodWlkaWdlIHBsdWdpbi1jb25maWd1cmF0aWUuIE9uZGVyIGRlemUgbmFhbSBrYW4gZGUgY29uZmlndXJhdGllIGluIGRlIHJlc3QgdmFuIGRlIGFwcGxpY2F0aWUgdGVydWdnZXZvbmRlbiB3b3JkZW4uJyxcbiAgICAgIHRva2VuOiAnVG9rZW4nLFxuICAgICAgdG9rZW5Ub29sdGlwOiAnQXV0aGVudGljYXRpZSB0b2tlbiBtZXQgdmVyZWlzdGUgc2NvcGVzLicsXG4gICAgICBjaGFubmVsOiAnS2FuYWFsJyxcbiAgICAgIGNoYW5uZWxUb29sdGlwOlxuICAgICAgICAnS2FuYWFsLCBwcml2w6lncm9lcCBvZiBjaGF0a2FuYWFsIG9tIGVlbiBiZXJpY2h0IG5hYXIgdGUgdmVyemVuZGVuLiBEaXQga2FuIGVlbiBnZWNvZGVlcmRlIElEIG9mIGVlbiBuYWFtIHppam4uIFppZSBoaWVyb25kZXIgdm9vciBtZWVyIGRldGFpbHMuJyxcbiAgICAgIGNoYW5uZWxzOiAnS2FuYWxlbicsXG4gICAgICBjaGFubmVsc1Rvb2x0aXA6XG4gICAgICAgIFwiRG9vciBrb21tYSdzIGdlc2NoZWlkZW4gbGlqc3QgbWV0IGthbmFhbG5hbWVuIG9mIElEJ3Mgd2FhciBoZXQgYmVzdGFuZCB6YWwgd29yZGVuIGdlZGVlbGQuXCIsXG4gICAgICBtZXNzYWdlOiAnQmVyaWNodCcsXG4gICAgICBtZXNzYWdlVG9vbHRpcDogJ0RlIGJlcmljaHR0ZWtzdC4nLFxuICAgIH0sXG4gICAgZW46IHtcbiAgICAgIHRpdGxlOiAnV2VhdGhlcicsXG4gICAgICAnZ2V0LXByZWRpY3Rpb24nOiAnUG9zdCBtZXNzYWdlJyxcbiAgICAgICdnZXQtcHJlZGljdGlvbi13aXRoLWZpbGUnOiAnUG9zdCBtZXNzYWdlIHdpdGggZmlsZScsXG4gICAgICB1cmw6ICdXZWF0aGVyIFVSTCcsXG4gICAgICB1cmxUb29sdGlwOiAnQSBVUkwgdG8gdGhlIFJFU1QgQVBJIG9mIFdlYXRoZXInLFxuICAgICAgZGVzY3JpcHRpb246ICdQb3N0IG1lc3NhZ2VzIHdpdGggdGhlIFdlYXRoZXIgcGx1Z2luLicsXG4gICAgICBjb25maWd1cmF0aW9uVGl0bGU6ICdDb25maWd1cmF0aW9uIG5hbWUnLFxuICAgICAgY29uZmlndXJhdGlvblRpdGxlVG9vbHRpcDpcbiAgICAgICAgJ1RoZSBuYW1lIG9mIHRoZSBjdXJyZW50IHBsdWdpbiBjb25maWd1cmF0aW9uLiBVbmRlciB0aGlzIG5hbWUsIHRoZSBjb25maWd1cmF0aW9uIGNhbiBiZSBmb3VuZCBpbiB0aGUgcmVzdCBvZiB0aGUgYXBwbGljYXRpb24uJyxcbiAgICAgIHRva2VuOiAnVG9rZW4nLFxuICAgICAgdG9rZW5Ub29sdGlwOiAnQXV0aGVudGljYXRpb24gdG9rZW4gYmVhcmluZyByZXF1aXJlZCBzY29wZXMuJyxcbiAgICAgIGNoYW5uZWw6ICdDaGFubmVsJyxcbiAgICAgIGNoYW5uZWxUb29sdGlwOlxuICAgICAgICAnQ2hhbm5lbCwgcHJpdmF0ZSBncm91cCwgb3IgSU0gY2hhbm5lbCB0byBzZW5kIG1lc3NhZ2UgdG8uIENhbiBiZSBhbiBlbmNvZGVkIElELCBvciBhIG5hbWUuIFNlZSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLicsXG4gICAgICBjaGFubmVsczogJ0NoYW5uZWxzJyxcbiAgICAgIGNoYW5uZWxzVG9vbHRpcDpcbiAgICAgICAgJ0NvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGNoYW5uZWwgbmFtZXMgb3IgSURzIHdoZXJlIHRoZSBmaWxlIHdpbGwgYmUgc2hhcmVkLicsXG4gICAgICBtZXNzYWdlOiAnTWVzc2FnZScsXG4gICAgICBtZXNzYWdlVG9vbHRpcDogJ1RoZSBtZXNzYWdlIHRleHQuJyxcbiAgICAgIGZpbGVuYW1lOiAnRmlsZW5hbWUnLFxuICAgICAgZmlsZW5hbWVUb29sdGlwOiAnVGhlIGZpbGVuYW1lIG9mIHRoZSBmaWxlLicsXG4gICAgfSxcbiAgICBkZToge1xuICAgICAgdGl0bGU6ICdXZWF0aGVyJyxcbiAgICAgICdnZXQtcHJlZGljdGlvbic6ICdLb21tZW50YXIgcG9zdGVuJyxcbiAgICAgICdnZXQtcHJlZGljdGlvbi13aXRoLWZpbGUnOiAnS29tbWVudGFyIG1pdCBEYXRlaSBwb3N0ZW4nLFxuICAgICAgdXJsOiAnV2VhdGhlciBVUkwnLFxuICAgICAgdXJsVG9vbHRpcDogJ0RpZSBVUkwgenVyIFJFU1QgQVBJIHZvbiBXZWF0aGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmVyw7ZmZmVudGxpY2hlbiBTaWUgTmFjaHJpY2h0ZW4gbWl0IGRlbSBXZWF0aGVyLVBsdWdpbi4nLFxuICAgICAgY29uZmlndXJhdGlvblRpdGxlOiAnS29uZmlndXJhdGlvbnNuYW1lJyxcbiAgICAgIGNvbmZpZ3VyYXRpb25UaXRsZVRvb2x0aXA6XG4gICAgICAgICdEZXIgTmFtZSBkZXIgYWt0dWVsbGVuIFBsdWdpbi1Lb25maWd1cmF0aW9uLiBVbnRlciBkaWVzZW0gTmFtZW4gaXN0IGRpZSBLb25maWd1cmF0aW9uIGltIFJlc3QgZGVyIEFud2VuZHVuZyB6dSBmaW5kZW4uJyxcbiAgICAgIHRva2VuOiAnVG9rZW4nLFxuICAgICAgdG9rZW5Ub29sdGlwOiAnQXV0aGVudGlmaXppZXJ1bmdzdG9rZW4gbWl0IGVyZm9yZGVybGljaGVuIHNjb3Blcy4nLFxuICAgICAgY2hhbm5lbDogJ0NoYW5uZWwnLFxuICAgICAgY2hhbm5lbFRvb2x0aXA6XG4gICAgICAgICdLYW5hbCwgcHJpdmF0ZSBHcnVwcGUgb2RlciBJTS1LYW5hbCwgYW4gZGVuIGRpZSBOYWNocmljaHQgZ2VzZW5kZXQgd2VyZGVuIHNvbGwuIEthbm4gZWluZSBjb2RpZXJ0ZSBJRCBvZGVyIGVpbiBOYW1lIHNlaW4uIFNpZWhlIHVudGVuIGbDvHIgd2VpdGVyZSBEZXRhaWxzLicsXG4gICAgICBjaGFubmVsczogJ0thbsOkbGUnLFxuICAgICAgY2hhbm5lbHNUb29sdGlwOlxuICAgICAgICAnRHVyY2ggS29tbWEgZ2V0cmVubnRlIExpc3RlIHZvbiBLYW5hbG5hbWVuIG9kZXIgSURzLCB3byBkaWUgRGF0ZWkgZ2V0ZWlsdCB3aXJkLicsXG4gICAgICBtZXNzYWdlOiAnS29tbWVudGFyJyxcbiAgICAgIG1lc3NhZ2VUb29sdGlwOiAnRGVyIE5hY2hyaWNodGVudGV4dC4nLFxuICAgICAgZmlsZW5hbWU6ICdEYXRlaW5hbWUnLFxuICAgICAgZmlsZW5hbWVUb29sdGlwOiAnRGVyIERhdGVpbmFtZSBkZXIgRGF0ZWkuJyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IHt3ZWF0aGVyUGx1Z2luU3BlY2lmaWNhdGlvbn07XG4iXX0=