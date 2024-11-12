/*
 * Copyright 2015-2024 Ritense BV, the Netherlands.
 *
 *  Licensed under EUPL, Version 1.2 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" basis,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

package com.ritense.weatherextension

import com.ritense.plugin.annotation.Plugin
import com.ritense.plugin.annotation.PluginAction
import com.ritense.plugin.annotation.PluginActionProperty
import com.ritense.plugin.annotation.PluginProperty
import com.ritense.processdocument.service.ValueResolverDelegateService
import com.ritense.processlink.domain.ActivityTypeWithEventName
import org.camunda.bpm.engine.delegate.DelegateExecution
import org.pf4j.Extension
import org.pf4j.ExtensionPoint

@Extension
@Plugin(
    key = "weather",
    title = "Weather checker",
    description = "Check the weather"
)
class WeatherPlugin(
    private val valueResolverDelegateService: ValueResolverDelegateService
) : ExtensionPoint {

    @PluginProperty(key = "url", secret = false)
    lateinit var url: String

    @PluginAction(
        key = "get-prediction",
        title = "Get Prediction",
        description = "Predict the weather",
        activityTypes = [ActivityTypeWithEventName.SERVICE_TASK_START, ActivityTypeWithEventName.CALL_ACTIVITY_START]
    )
    fun getPrediction(
        execution: DelegateExecution,
        @PluginActionProperty address: String,
    ) {
        val weatherPrediction = "Not very sunny in: '$address'. Also url: '$url'"
        valueResolverDelegateService.handleValue(execution, "doc:weatherPrediction", weatherPrediction)
    }
}