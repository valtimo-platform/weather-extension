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
import { NgModule } from '@angular/core';
import { WeatherConfigurationComponent } from './components/weather-configuration/weather-configuration.component';
import { CommonModule } from '@angular/common';
import { PluginTranslatePipeModule } from '@valtimo/plugin';
import { FormModule, InputModule, ParagraphModule } from '@valtimo/components';
import { GetPredictionConfigurationComponent } from './components/get-prediction/get-prediction-configuration.component';
import * as i0 from "@angular/core";
export class WeatherPluginModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: WeatherPluginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: WeatherPluginModule, declarations: [WeatherConfigurationComponent,
            GetPredictionConfigurationComponent], imports: [CommonModule, PluginTranslatePipeModule, FormModule, InputModule, ParagraphModule], exports: [WeatherConfigurationComponent,
            GetPredictionConfigurationComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: WeatherPluginModule, imports: [CommonModule, PluginTranslatePipeModule, FormModule, InputModule, ParagraphModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: WeatherPluginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        WeatherConfigurationComponent,
                        GetPredictionConfigurationComponent,
                    ],
                    imports: [CommonModule, PluginTranslatePipeModule, FormModule, InputModule, ParagraphModule],
                    exports: [
                        WeatherConfigurationComponent,
                        GetPredictionConfigurationComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1wbHVnaW4tbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi93ZWF0aGVyLXBsdWdpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLG9FQUFvRSxDQUFDO0FBQ2pILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RSxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSxvRUFBb0UsQ0FBQzs7QUFhdkgsTUFBTSxPQUFPLG1CQUFtQjsrR0FBbkIsbUJBQW1CO2dIQUFuQixtQkFBbUIsaUJBVDVCLDZCQUE2QjtZQUM3QixtQ0FBbUMsYUFFM0IsWUFBWSxFQUFFLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZUFBZSxhQUV6Riw2QkFBNkI7WUFDN0IsbUNBQW1DO2dIQUcxQixtQkFBbUIsWUFOcEIsWUFBWSxFQUFFLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZUFBZTs7NEZBTWhGLG1CQUFtQjtrQkFYL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osNkJBQTZCO3dCQUM3QixtQ0FBbUM7cUJBQ3BDO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSx5QkFBeUIsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQztvQkFDNUYsT0FBTyxFQUFFO3dCQUNQLDZCQUE2Qjt3QkFDN0IsbUNBQW1DO3FCQUNwQztpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxNS0yMDIyIFJpdGVuc2UgQlYsIHRoZSBOZXRoZXJsYW5kcy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBFVVBMLCBWZXJzaW9uIDEuMiAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHBzOi8vam9pbnVwLmVjLmV1cm9wYS5ldS9jb2xsZWN0aW9uL2V1cGwvZXVwbC10ZXh0LWV1cGwtMTJcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXZWF0aGVyQ29uZmlndXJhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXItY29uZmlndXJhdGlvbi93ZWF0aGVyLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtQbHVnaW5UcmFuc2xhdGVQaXBlTW9kdWxlfSBmcm9tICdAdmFsdGltby9wbHVnaW4nO1xuaW1wb3J0IHtGb3JtTW9kdWxlLCBJbnB1dE1vZHVsZSwgUGFyYWdyYXBoTW9kdWxlfSBmcm9tICdAdmFsdGltby9jb21wb25lbnRzJztcbmltcG9ydCB7R2V0UHJlZGljdGlvbkNvbmZpZ3VyYXRpb25Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9nZXQtcHJlZGljdGlvbi9nZXQtcHJlZGljdGlvbi1jb25maWd1cmF0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFdlYXRoZXJDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICAgIEdldFByZWRpY3Rpb25Db25maWd1cmF0aW9uQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQbHVnaW5UcmFuc2xhdGVQaXBlTW9kdWxlLCBGb3JtTW9kdWxlLCBJbnB1dE1vZHVsZSwgUGFyYWdyYXBoTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIFdlYXRoZXJDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICAgIEdldFByZWRpY3Rpb25Db25maWd1cmF0aW9uQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVyUGx1Z2luTW9kdWxlIHt9XG4iXX0=