import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BehaviorSubject, combineLatest, take } from 'rxjs';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@valtimo/components';
import { FormModule, InputModule, ParagraphModule } from '@valtimo/components';
import * as i3 from '@valtimo/plugin';
import { PluginTranslatePipeModule } from '@valtimo/plugin';

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
class WeatherConfigurationComponent {
    constructor() {
        this.valid = new EventEmitter();
        this.configuration = new EventEmitter();
        this.formValue$ = new BehaviorSubject(null);
        this.valid$ = new BehaviorSubject(false);
    }
    ngOnInit() {
        this.openSaveSubscription();
    }
    ngOnDestroy() {
        this.saveSubscription?.unsubscribe();
    }
    formValueChange(formValue) {
        this.formValue$.next(formValue);
        this.handleValid(formValue);
    }
    handleValid(formValue) {
        const valid = !!(formValue.configurationTitle && formValue.prediction1);
        this.valid$.next(valid);
        this.valid.emit(valid);
    }
    openSaveSubscription() {
        this.saveSubscription = this.save$?.subscribe(save => {
            combineLatest([this.formValue$, this.valid$])
                .pipe(take(1))
                .subscribe(([formValue, valid]) => {
                if (valid) {
                    this.configuration.emit(formValue);
                }
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: WeatherConfigurationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: WeatherConfigurationComponent, selector: "valtimo-weather-configuration", inputs: { save$: "save$", disabled$: "disabled$", pluginId: "pluginId", prefillConfiguration$: "prefillConfiguration$" }, outputs: { valid: "valid", configuration: "configuration" }, ngImport: i0, template: "<!--\n  ~ Copyright 2015-2022 Ritense BV, the Netherlands.\n  ~\n  ~ Licensed under EUPL, Version 1.2 (the \"License\");\n  ~ you may not use this file except in compliance with the License.\n  ~ You may obtain a copy of the License at\n  ~\n  ~ https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12\n  ~\n  ~ Unless required by applicable law or agreed to in writing, software\n  ~ distributed under the License is distributed on an \"AS IS\" basis,\n  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~ See the License for the specific language governing permissions and\n  ~ limitations under the License.\n  -->\n\n<v-form\n  (valueChange)=\"formValueChange($event)\"\n  *ngIf=\"{\n    disabled: disabled$ | async,\n    prefill: prefillConfiguration$ ? (prefillConfiguration$ | async) : null\n  } as obs\"\n>\n  <v-input\n    name=\"configurationTitle\"\n    [title]=\"'configurationTitle' | pluginTranslate: pluginId | async\"\n    [margin]=\"true\"\n    [disabled]=\"obs.disabled\"\n    [defaultValue]=\"obs.prefill?.configurationTitle\"\n    [required]=\"true\"\n    [tooltip]=\"'configurationTitleTooltip' | pluginTranslate: pluginId | async\"\n    [widthPx]=\"350\"\n    placeholder=\"Weather Plugin\"\n  >\n  </v-input>\n  <v-input\n    name=\"prediction1\"\n    [title]=\"'prediction1' | pluginTranslate: pluginId | async\"\n    [fullWidth]=\"true\"\n    [margin]=\"true\"\n    [disabled]=\"obs.disabled\"\n    [defaultValue]=\"obs.prefill?.prediction1\"\n    [required]=\"true\"\n    [tooltip]=\"'prediction1Tooltip' | pluginTranslate: pluginId | async\"\n    placeholder=\"https://www.weather.com/\"\n  >\n  </v-input>\n</v-form>\n", styles: ["/*!\n * Copyright 2015-2022 Ritense BV, the Netherlands.\n *\n * Licensed under EUPL, Version 1.2 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" basis,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FormComponent, selector: "v-form", inputs: ["className"], outputs: ["valueChange"] }, { kind: "component", type: i2.InputComponent, selector: "v-input", inputs: ["name", "type", "title", "titleTranslationKey", "defaultValue", "widthPx", "fullWidth", "margin", "smallMargin", "disabled", "step", "min", "maxLength", "tooltip", "required", "hideNumberSpinBox", "smallLabel", "rows", "clear$", "carbonTheme", "placeholder", "dataTestId"], outputs: ["valueChange"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: i3.PluginTranslatePipe, name: "pluginTranslate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: WeatherConfigurationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'valtimo-weather-configuration', template: "<!--\n  ~ Copyright 2015-2022 Ritense BV, the Netherlands.\n  ~\n  ~ Licensed under EUPL, Version 1.2 (the \"License\");\n  ~ you may not use this file except in compliance with the License.\n  ~ You may obtain a copy of the License at\n  ~\n  ~ https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12\n  ~\n  ~ Unless required by applicable law or agreed to in writing, software\n  ~ distributed under the License is distributed on an \"AS IS\" basis,\n  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~ See the License for the specific language governing permissions and\n  ~ limitations under the License.\n  -->\n\n<v-form\n  (valueChange)=\"formValueChange($event)\"\n  *ngIf=\"{\n    disabled: disabled$ | async,\n    prefill: prefillConfiguration$ ? (prefillConfiguration$ | async) : null\n  } as obs\"\n>\n  <v-input\n    name=\"configurationTitle\"\n    [title]=\"'configurationTitle' | pluginTranslate: pluginId | async\"\n    [margin]=\"true\"\n    [disabled]=\"obs.disabled\"\n    [defaultValue]=\"obs.prefill?.configurationTitle\"\n    [required]=\"true\"\n    [tooltip]=\"'configurationTitleTooltip' | pluginTranslate: pluginId | async\"\n    [widthPx]=\"350\"\n    placeholder=\"Weather Plugin\"\n  >\n  </v-input>\n  <v-input\n    name=\"prediction1\"\n    [title]=\"'prediction1' | pluginTranslate: pluginId | async\"\n    [fullWidth]=\"true\"\n    [margin]=\"true\"\n    [disabled]=\"obs.disabled\"\n    [defaultValue]=\"obs.prefill?.prediction1\"\n    [required]=\"true\"\n    [tooltip]=\"'prediction1Tooltip' | pluginTranslate: pluginId | async\"\n    placeholder=\"https://www.weather.com/\"\n  >\n  </v-input>\n</v-form>\n", styles: ["/*!\n * Copyright 2015-2022 Ritense BV, the Netherlands.\n *\n * Licensed under EUPL, Version 1.2 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" basis,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n"] }]
        }], propDecorators: { save$: [{
                type: Input
            }], disabled$: [{
                type: Input
            }], pluginId: [{
                type: Input
            }], prefillConfiguration$: [{
                type: Input
            }], valid: [{
                type: Output
            }], configuration: [{
                type: Output
            }] } });

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
class GetPredictionConfigurationComponent {
    constructor() {
        this.valid = new EventEmitter();
        this.configuration = new EventEmitter();
        this.formValue$ = new BehaviorSubject(null);
        this.valid$ = new BehaviorSubject(false);
    }
    ngOnInit() {
        this.openSaveSubscription();
    }
    ngOnDestroy() {
        this.saveSubscription?.unsubscribe();
    }
    formValueChange(formValue) {
        this.formValue$.next(formValue);
        this.handleValid(formValue);
    }
    handleValid(formValue) {
        const valid = !!(formValue.prediction2);
        this.valid$.next(valid);
        this.valid.emit(valid);
    }
    openSaveSubscription() {
        this.saveSubscription = this.save$?.subscribe(save => {
            combineLatest([this.formValue$, this.valid$])
                .pipe(take(1))
                .subscribe(([formValue, valid]) => {
                if (valid) {
                    this.configuration.emit(formValue);
                }
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: GetPredictionConfigurationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: GetPredictionConfigurationComponent, selector: "valtimo-get-prediction-configuration", inputs: { save$: "save$", disabled$: "disabled$", pluginId: "pluginId", prefillConfiguration$: "prefillConfiguration$" }, outputs: { valid: "valid", configuration: "configuration" }, ngImport: i0, template: "<!--\n  ~ Copyright 2015-2022 Ritense BV, the Netherlands.\n  ~\n  ~ Licensed under EUPL, Version 1.2 (the \"License\");\n  ~ you may not use this file except in compliance with the License.\n  ~ You may obtain a copy of the License at\n  ~\n  ~ https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12\n  ~\n  ~ Unless required by applicable law or agreed to in writing, software\n  ~ distributed under the License is distributed on an \"AS IS\" basis,\n  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~ See the License for the specific language governing permissions and\n  ~ limitations under the License.\n  -->\n\n<v-form\n  (valueChange)=\"formValueChange($event)\"\n  *ngIf=\"{\n    disabled: disabled$ | async,\n    prefill: prefillConfiguration$ ? (prefillConfiguration$ | async) : null\n  } as obs\"\n>\n  <v-input\n    name=\"prediction2\"\n    [title]=\"'prediction2' | pluginTranslate: pluginId | async\"\n    [margin]=\"true\"\n    [defaultValue]=\"obs.prefill?.prediction2\"\n    [disabled]=\"obs.disabled\"\n    [required]=\"true\"\n    [tooltip]=\"'prediction2Tooltip' | pluginTranslate: pluginId | async\"\n  ></v-input>\n</v-form>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FormComponent, selector: "v-form", inputs: ["className"], outputs: ["valueChange"] }, { kind: "component", type: i2.InputComponent, selector: "v-input", inputs: ["name", "type", "title", "titleTranslationKey", "defaultValue", "widthPx", "fullWidth", "margin", "smallMargin", "disabled", "step", "min", "maxLength", "tooltip", "required", "hideNumberSpinBox", "smallLabel", "rows", "clear$", "carbonTheme", "placeholder", "dataTestId"], outputs: ["valueChange"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: i3.PluginTranslatePipe, name: "pluginTranslate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: GetPredictionConfigurationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'valtimo-get-prediction-configuration', template: "<!--\n  ~ Copyright 2015-2022 Ritense BV, the Netherlands.\n  ~\n  ~ Licensed under EUPL, Version 1.2 (the \"License\");\n  ~ you may not use this file except in compliance with the License.\n  ~ You may obtain a copy of the License at\n  ~\n  ~ https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12\n  ~\n  ~ Unless required by applicable law or agreed to in writing, software\n  ~ distributed under the License is distributed on an \"AS IS\" basis,\n  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~ See the License for the specific language governing permissions and\n  ~ limitations under the License.\n  -->\n\n<v-form\n  (valueChange)=\"formValueChange($event)\"\n  *ngIf=\"{\n    disabled: disabled$ | async,\n    prefill: prefillConfiguration$ ? (prefillConfiguration$ | async) : null\n  } as obs\"\n>\n  <v-input\n    name=\"prediction2\"\n    [title]=\"'prediction2' | pluginTranslate: pluginId | async\"\n    [margin]=\"true\"\n    [defaultValue]=\"obs.prefill?.prediction2\"\n    [disabled]=\"obs.disabled\"\n    [required]=\"true\"\n    [tooltip]=\"'prediction2Tooltip' | pluginTranslate: pluginId | async\"\n  ></v-input>\n</v-form>\n" }]
        }], propDecorators: { save$: [{
                type: Input
            }], disabled$: [{
                type: Input
            }], pluginId: [{
                type: Input
            }], prefillConfiguration$: [{
                type: Input
            }], valid: [{
                type: Output
            }], configuration: [{
                type: Output
            }] } });

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
class WeatherPluginModule {
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
const WEATHER_PLUGIN_LOGO_BASE64 = 'data:image/png;base64,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';

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
/*
 * Public API Surface of weather
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GetPredictionConfigurationComponent, WeatherConfigurationComponent, WeatherPluginModule, weatherPluginSpecification };
//# sourceMappingURL=frontend.mjs.map
