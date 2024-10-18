package com.ritense.weatherextension

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.ritense.document.service.DocumentService
import com.ritense.valtimo.contract.annotation.ProcessBean
import org.pf4j.Extension
import org.pf4j.ExtensionPoint

@Extension
class WeatherService(
    private val documentService: DocumentService
) : ExtensionPoint {

    fun predictWeather(documentId: String): String {
        val weatherPrediction = "Not very sunny today =/"

        documentService.modifyDocument(
            documentService[documentId],
            jacksonObjectMapper().readTree("""{"weatherPrediction":"$weatherPrediction"}""")
        )

        return weatherPrediction
    }

}
