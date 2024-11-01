import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { PluginConfigurationComponent, PluginConfigurationData } from '@valtimo/plugin';
import { Observable } from 'rxjs';
import { WeatherConfig } from '../../models';
import * as i0 from "@angular/core";
export declare class WeatherConfigurationComponent implements PluginConfigurationComponent, OnInit, OnDestroy {
    save$: Observable<void>;
    disabled$: Observable<boolean>;
    pluginId: string;
    prefillConfiguration$: Observable<WeatherConfig>;
    valid: EventEmitter<boolean>;
    configuration: EventEmitter<PluginConfigurationData>;
    private saveSubscription;
    private readonly formValue$;
    private readonly valid$;
    ngOnInit(): void;
    ngOnDestroy(): void;
    formValueChange(formValue: WeatherConfig): void;
    private handleValid;
    private openSaveSubscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<WeatherConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WeatherConfigurationComponent, "valtimo-weather-configuration", never, { "save$": { "alias": "save$"; "required": false; }; "disabled$": { "alias": "disabled$"; "required": false; }; "pluginId": { "alias": "pluginId"; "required": false; }; "prefillConfiguration$": { "alias": "prefillConfiguration$"; "required": false; }; }, { "valid": "valid"; "configuration": "configuration"; }, never, never, false, never>;
}
//# sourceMappingURL=weather-configuration.component.d.ts.map