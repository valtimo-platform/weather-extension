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
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@valtimo/components";
import * as i3 from "@valtimo/plugin";
export class GetPredictionConfigurationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXByZWRpY3Rpb24tY29uZmlndXJhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZ2V0LXByZWRpY3Rpb24vZ2V0LXByZWRpY3Rpb24tY29uZmlndXJhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZ2V0LXByZWRpY3Rpb24vZ2V0LXByZWRpY3Rpb24tY29uZmlndXJhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhGLE9BQU8sRUFBQyxlQUFlLEVBQUUsYUFBYSxFQUE0QixJQUFJLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7O0FBUXBGLE1BQU0sT0FBTyxtQ0FBbUM7SUFMaEQ7UUFZWSxVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDM0Qsa0JBQWEsR0FBNEMsSUFBSSxZQUFZLEVBQTZCLENBQUM7UUFHaEcsZUFBVSxHQUFHLElBQUksZUFBZSxDQUE2QixJQUFJLENBQUMsQ0FBQztRQUNuRSxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7S0FpQy9EO0lBL0JDLFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQThCO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxTQUE4QjtRQUNoRCxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkQsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2IsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFVLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQTVDVSxtQ0FBbUM7bUdBQW5DLG1DQUFtQyxtUUMxQmhELHNxQ0FpQ0E7OzRGRFBhLG1DQUFtQztrQkFML0MsU0FBUzsrQkFDRSxzQ0FBc0M7OEJBT3ZDLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQUNJLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE1LTIwMjIgUml0ZW5zZSBCViwgdGhlIE5ldGhlcmxhbmRzLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIEVVUEwsIFZlcnNpb24gMS4yICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cHM6Ly9qb2ludXAuZWMuZXVyb3BhLmV1L2NvbGxlY3Rpb24vZXVwbC9ldXBsLXRleHQtZXVwbC0xMlxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGdW5jdGlvbkNvbmZpZ3VyYXRpb25Db21wb25lbnQsIEZ1bmN0aW9uQ29uZmlndXJhdGlvbkRhdGF9IGZyb20gJ0B2YWx0aW1vL3BsdWdpbic7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCB0YWtlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7R2V0UHJlZGljdGlvbkNvbmZpZ30gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmFsdGltby1nZXQtcHJlZGljdGlvbi1jb25maWd1cmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dldC1wcmVkaWN0aW9uLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nZXQtcHJlZGljdGlvbi1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdldFByZWRpY3Rpb25Db25maWd1cmF0aW9uQ29tcG9uZW50XG4gIGltcGxlbWVudHMgRnVuY3Rpb25Db25maWd1cmF0aW9uQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveVxue1xuICBASW5wdXQoKSBzYXZlJCE6IE9ic2VydmFibGU8dm9pZD47XG4gIEBJbnB1dCgpIGRpc2FibGVkJCE6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIEBJbnB1dCgpIHBsdWdpbklkITogc3RyaW5nO1xuICBASW5wdXQoKSBwcmVmaWxsQ29uZmlndXJhdGlvbiQhOiBPYnNlcnZhYmxlPEdldFByZWRpY3Rpb25Db25maWc+O1xuICBAT3V0cHV0KCkgdmFsaWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGNvbmZpZ3VyYXRpb246IEV2ZW50RW1pdHRlcjxGdW5jdGlvbkNvbmZpZ3VyYXRpb25EYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RnVuY3Rpb25Db25maWd1cmF0aW9uRGF0YT4oKTtcblxuICBwcml2YXRlIHNhdmVTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcmVhZG9ubHkgZm9ybVZhbHVlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R2V0UHJlZGljdGlvbkNvbmZpZyB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIHJlYWRvbmx5IHZhbGlkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3BlblNhdmVTdWJzY3JpcHRpb24oKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc2F2ZVN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGZvcm1WYWx1ZUNoYW5nZShmb3JtVmFsdWU6IEdldFByZWRpY3Rpb25Db25maWcpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1WYWx1ZSQubmV4dChmb3JtVmFsdWUpO1xuICAgIHRoaXMuaGFuZGxlVmFsaWQoZm9ybVZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVmFsaWQoZm9ybVZhbHVlOiBHZXRQcmVkaWN0aW9uQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgdmFsaWQgPSAhIShmb3JtVmFsdWUucHJlZGljdGlvbjIpO1xuXG4gICAgdGhpcy52YWxpZCQubmV4dCh2YWxpZCk7XG4gICAgdGhpcy52YWxpZC5lbWl0KHZhbGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlblNhdmVTdWJzY3JpcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5zYXZlU3Vic2NyaXB0aW9uID0gdGhpcy5zYXZlJD8uc3Vic2NyaWJlKHNhdmUgPT4ge1xuICAgICAgY29tYmluZUxhdGVzdChbdGhpcy5mb3JtVmFsdWUkLCB0aGlzLnZhbGlkJF0pXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKFtmb3JtVmFsdWUsIHZhbGlkXSkgPT4ge1xuICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmVtaXQoZm9ybVZhbHVlISk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPCEtLVxuICB+IENvcHlyaWdodCAyMDE1LTIwMjIgUml0ZW5zZSBCViwgdGhlIE5ldGhlcmxhbmRzLlxuICB+XG4gIH4gTGljZW5zZWQgdW5kZXIgRVVQTCwgVmVyc2lvbiAxLjIgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIH4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICB+IFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICB+XG4gIH4gaHR0cHM6Ly9qb2ludXAuZWMuZXVyb3BhLmV1L2NvbGxlY3Rpb24vZXVwbC9ldXBsLXRleHQtZXVwbC0xMlxuICB+XG4gIH4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICB+IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbiAgfiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgfiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIH4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gIC0tPlxuXG48di1mb3JtXG4gICh2YWx1ZUNoYW5nZSk9XCJmb3JtVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICpuZ0lmPVwie1xuICAgIGRpc2FibGVkOiBkaXNhYmxlZCQgfCBhc3luYyxcbiAgICBwcmVmaWxsOiBwcmVmaWxsQ29uZmlndXJhdGlvbiQgPyAocHJlZmlsbENvbmZpZ3VyYXRpb24kIHwgYXN5bmMpIDogbnVsbFxuICB9IGFzIG9ic1wiXG4+XG4gIDx2LWlucHV0XG4gICAgbmFtZT1cInByZWRpY3Rpb24yXCJcbiAgICBbdGl0bGVdPVwiJ3ByZWRpY3Rpb24yJyB8IHBsdWdpblRyYW5zbGF0ZTogcGx1Z2luSWQgfCBhc3luY1wiXG4gICAgW21hcmdpbl09XCJ0cnVlXCJcbiAgICBbZGVmYXVsdFZhbHVlXT1cIm9icy5wcmVmaWxsPy5wcmVkaWN0aW9uMlwiXG4gICAgW2Rpc2FibGVkXT1cIm9icy5kaXNhYmxlZFwiXG4gICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgIFt0b29sdGlwXT1cIidwcmVkaWN0aW9uMlRvb2x0aXAnIHwgcGx1Z2luVHJhbnNsYXRlOiBwbHVnaW5JZCB8IGFzeW5jXCJcbiAgPjwvdi1pbnB1dD5cbjwvdi1mb3JtPlxuIl19