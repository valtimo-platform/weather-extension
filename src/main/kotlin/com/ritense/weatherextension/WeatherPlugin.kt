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
import com.ritense.processlink.domain.ActivityTypeWithEventName
import mu.KotlinLogging
import org.camunda.bpm.engine.delegate.DelegateExecution
import org.pf4j.Extension
import org.pf4j.ExtensionPoint

@Extension
@Plugin(
    key = "weather",
    title = "Weather checker",
    description = "Check the weather"
)
class WeatherPlugin: ExtensionPoint {

    @PluginProperty(key = "prediction1", secret = false)
    lateinit var prediction1: String

    @PluginAction(
        key = "get-statustype",
        title = "Get Statustype",
        description = "Retrieve the statustype and save it in a process variable",
        activityTypes = [ActivityTypeWithEventName.SERVICE_TASK_START, ActivityTypeWithEventName.CALL_ACTIVITY_START]
    )
    fun getPrediction(
        execution: DelegateExecution,
        @PluginActionProperty prediction2: String,
    ) {
        logger.info { "Prediction1: $prediction1" }
        logger.info { "Prediction2: $prediction2" }
    }

    companion object {
        private val logger = KotlinLogging.logger {}
    }
}