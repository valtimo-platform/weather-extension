package com.ritense.weatherextension

import com.ritense.document.service.DocumentService
import com.ritense.valtimo.contract.annotation.ProcessBean
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class WeatherConfiguration {

    @ProcessBean
    @Bean
    fun weatherService(documentService: DocumentService): WeatherService {
        return WeatherService(documentService)
    }
}