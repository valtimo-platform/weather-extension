// Background info https://github.com/gradle/gradle/issues/1697
pluginManagement {
    val ideaExt: String by settings
    val springBootVersion: String by settings
    val springDependencyManagementVersion: String by settings
    val kotlinVersion: String by settings
    val kaptVersion: String by settings

    val kotlinLoggingVersion: String by settings
    val pf4jVersion: String by settings
    val pf4jSpringVersion: String by settings
    val camundaVersion: String by settings

    val valtimoVersion: String by settings

    plugins {
        // Idea
        idea
        id("org.jetbrains.gradle.plugin.idea-ext") version ideaExt

        // Spring
        id("org.springframework.boot") version springBootVersion
        id("io.spring.dependency-management") version springDependencyManagementVersion

        // Kotlin
        kotlin("jvm") version kotlinVersion
        kotlin("plugin.spring") version kotlinVersion
        kotlin("plugin.jpa") version kotlinVersion
        kotlin("plugin.allopen") version kotlinVersion

        // Other
        kotlin("kapt") version kaptVersion
    }
}

val projectName: String by settings
rootProject.name = projectName