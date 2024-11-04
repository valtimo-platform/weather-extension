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

import {NgModule} from '@angular/core';
import {WeatherConfigurationComponent} from './components/weather-configuration/weather-configuration.component';
import {CommonModule} from '@angular/common';
import {PLUGINS_TOKEN, PluginTranslatePipeModule} from '@valtimo/plugin';
import {FormModule, InputModule, ParagraphModule} from '@valtimo/components';
import {GetPredictionConfigurationComponent} from './components/get-prediction/get-prediction-configuration.component';
import {weatherPluginSpecification} from "./weather-plugin.specification";

@NgModule({
  declarations: [
    WeatherConfigurationComponent,
    GetPredictionConfigurationComponent,
  ],
  imports: [CommonModule, PluginTranslatePipeModule, FormModule, InputModule, ParagraphModule],
  exports: [
    WeatherConfigurationComponent,
    GetPredictionConfigurationComponent,
  ],
  providers: [
    {
      provide: PLUGINS_TOKEN,
      useValue: [
        weatherPluginSpecification,
      ]
    }
  ]
})
export class WeatherPluginModule {
}
