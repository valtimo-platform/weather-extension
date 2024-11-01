import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FunctionConfigurationComponent, FunctionConfigurationData } from '@valtimo/plugin';
import { Observable } from 'rxjs';
import { GetPredictionConfig } from '../../models';
import * as i0 from "@angular/core";
export declare class GetPredictionConfigurationComponent implements FunctionConfigurationComponent, OnInit, OnDestroy {
    save$: Observable<void>;
    disabled$: Observable<boolean>;
    pluginId: string;
    prefillConfiguration$: Observable<GetPredictionConfig>;
    valid: EventEmitter<boolean>;
    configuration: EventEmitter<FunctionConfigurationData>;
    private saveSubscription;
    private readonly formValue$;
    private readonly valid$;
    ngOnInit(): void;
    ngOnDestroy(): void;
    formValueChange(formValue: GetPredictionConfig): void;
    private handleValid;
    private openSaveSubscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetPredictionConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GetPredictionConfigurationComponent, "valtimo-get-prediction-configuration", never, { "save$": { "alias": "save$"; "required": false; }; "disabled$": { "alias": "disabled$"; "required": false; }; "pluginId": { "alias": "pluginId"; "required": false; }; "prefillConfiguration$": { "alias": "prefillConfiguration$"; "required": false; }; }, { "valid": "valid"; "configuration": "configuration"; }, never, never, false, never>;
}
//# sourceMappingURL=get-prediction-configuration.component.d.ts.map