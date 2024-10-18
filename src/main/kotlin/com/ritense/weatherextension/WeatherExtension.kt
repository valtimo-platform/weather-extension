package com.ritense.weatherextension

import org.pf4j.PluginWrapper
import org.pf4j.spring.SpringPlugin
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.AnnotationConfigApplicationContext

class WeatherExtension(wrapper: PluginWrapper) : SpringPlugin(wrapper) {

    override fun start() {
        println("WeatherExtension.start()")
        println("System.getenv(): " + System.getenv().entries.joinToString { "${it.key}=${it.value}" })
    }

    override fun stop() {
        println("WeatherExtension.stop()")
        super.stop()
    }

    override fun createApplicationContext(): ApplicationContext {
        getWrapper().
        val applicationContext = AnnotationConfigApplicationContext()
        applicationContext.classLoader = getWrapper().pluginClassLoader
        applicationContext.register(WeatherConfiguration::class.java)
        applicationContext.refresh()
        return applicationContext
    }

}
