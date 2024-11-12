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

import groovy.json.JsonSlurper
import java.time.Instant
import java.util.Properties
import org.jetbrains.kotlin.com.google.common.io.Files
import org.jetbrains.kotlin.com.google.gson.GsonBuilder
import kotlin.io.path.Path

val kotlinLoggingVersion: String by project
val pf4jVersion: String by project
val pf4jSpringVersion: String by project
val valtimoVersion: String by project
val camundaVersion: String by project

plugins {
    // Spring
    id("org.springframework.boot")
    id("io.spring.dependency-management")

    // Kotlin
    kotlin("jvm")
    kotlin("plugin.spring")
    kotlin("plugin.jpa")
    kotlin("plugin.allopen")

    // Other
    kotlin("kapt")
}

kapt {
    correctErrorTypes = true
}

apply(plugin = "kotlin-spring")

repositories {
    mavenCentral()
    maven { url = uri("https://repo.ritense.com/repository/maven-public/") }
    maven { url = uri("https://repo.ritense.com/repository/maven-snapshots/") }
    maven { url = uri("https://s01.oss.sonatype.org/content/groups/staging/") }
    maven { url = uri("https://s01.oss.sonatype.org/content/repositories/snapshots/") }
}

dependencies {
    implementation("com.ritense.valtimo:contract:$valtimoVersion")
    implementation("com.ritense.valtimo:document:$valtimoVersion")
    implementation("com.ritense.valtimo:process-document:$valtimoVersion")
    implementation("com.ritense.valtimo:plugin:$valtimoVersion")
    implementation("org.camunda.bpm:camunda-engine:$camundaVersion")

    implementation("io.github.microutils:kotlin-logging:$kotlinLoggingVersion")

    compileOnly("org.pf4j:pf4j:$pf4jVersion")
    implementation("org.pf4j:pf4j-spring:$pf4jSpringVersion") {
        exclude(group = "org.pf4j", module = "pf4j")
    }
    kapt("org.pf4j:pf4j:$pf4jVersion")

}

val gradleProperties = Properties()
gradleProperties.load(file("gradle.properties").inputStream())
val extensionId: String by gradleProperties
val extensionName: String by gradleProperties
val extensionLogo: String by gradleProperties
val extensionDescription: String by gradleProperties
val extensionClass: String by gradleProperties
val projectVersion: String by gradleProperties
val extensionProvider: String by gradleProperties
val extensionDependencies: String by gradleProperties
val extensionRequires: String by gradleProperties
val extensionLicense: String by gradleProperties

tasks.withType<Jar> {
    manifest {
        attributes["Plugin-Id"] = extensionId
        attributes["Plugin-Description"] = extensionDescription
        attributes["Plugin-Class"] = extensionClass
        attributes["Plugin-Version"] = projectVersion
        attributes["Plugin-Provider"] = extensionProvider
        attributes["Plugin-Dependencies"] = extensionDependencies
        attributes["Plugin-Requires"] = extensionRequires
        attributes["Plugin-License"] = extensionLicense
    }
}

tasks.register<Exec>("npmInstall") {
    group = "npm"
    description = "npm install"
    workingDir = File("frontend")
    commandLine = listOf("npm", "install")
}

tasks.register<Exec>("npmRunBuild") {
    group = "npm"
    description = "npm run build"
    workingDir = File("frontend")
    commandLine = listOf("npm", "run", "build")
}

tasks.register("buildExtensionRepository") {
    group = "build"
    description = "Build a repository folder containing the extension JAR file"
    dependsOn("jar")
    doFirst {
        val jarFile = getFile(layout.buildDirectory.get().toString(), "libs").listFiles()!!.first { it.name.endsWith(".jar") }
        val newJarFile = getFile(projectDir.absolutePath, "repository", "$extensionId-$projectVersion.jar")
        Files.copy(jarFile, newJarFile)
        createRepository(
            extensionsJsonFolder = getFile(projectDir.absolutePath, "repository").absolutePath,
            jarFolder = null
        )
    }
}

tasks.register("publishLocalExtension") {
    group = "publication"
    description = "Publish this extension to your local machine"
    dependsOn("buildExtensionRepository")
    doFirst {
        createRepository(
            extensionsJsonFolder = getFile(System.getProperty("user.home"), ".valtimo_extensions").absolutePath,
            jarFolder = getFile(projectDir.absolutePath, "repository").absolutePath
        )
    }
}

tasks.register("clearLocalExtensionCache") {
    group = "publication"
    description = "Clear all extensions that where published to your local machine"
    doFirst {
        getFile(System.getProperty("user.home"), ".valtimo_extensions").deleteRecursively()
        getFile(projectDir.absolutePath, "repository").deleteRecursively()
    }
}

fun createRepository(extensionsJsonFolder: String, jarFolder: String?) {
    val extensionsFile = getFile(extensionsJsonFolder, "extensions.json").createFile("[]")
    val extensionsJson = JsonSlurper().parseText(extensionsFile.readText()) as MutableList<MutableMap<String, Any>>
    val extensionJson = extensionsJson.firstOrAdd(mutableMapOf()) { it["id"] == extensionId }
    extensionJson["id"] = extensionId
    extensionJson["name"] = extensionName
    extensionJson["logo"] = extensionLogo
    extensionJson["description"] = extensionDescription
    extensionJson["provider"] = extensionProvider
    val releases = extensionJson.getOrPut("releases") { mutableListOf<Any>() } as MutableList<MutableMap<String, Any>>
    val release = releases.firstOrAdd(mutableMapOf()) { it["version"] == projectVersion }
    release["version"] = projectVersion
    release["date"] = Instant.now().toString()
    release["url"] = if (jarFolder != null) {
        getFile(jarFolder, "$extensionId-$projectVersion.jar").absolutePath
    } else {
        "$extensionId-$projectVersion.jar"
    }
    extensionsFile.write(GsonBuilder().setPrettyPrinting().create().toJson(extensionsJson).toString())
}

fun File.createFile(defaultContent: String): File {
    if (!exists()) {
        createNewFile()
        write(defaultContent)
    }
    return this
}

fun File.write(text: String): File {
    writer().use { it.write(text) }
    return this
}

fun getFile(vararg path: String): File {
    return if (path[path.size - 1].contains('.')) {
        file(Path(path[0], *path.copyOfRange(1, path.size - 1))).mkdirs()
        file(Path(path[0], *path.copyOfRange(1, path.size)))
    } else {
        file(Path(path[0], *path.copyOfRange(1, path.size))).also { it.mkdirs() }
    }
}

fun <V> MutableList<V>.firstOrAdd(value: V, predicate: (V) -> Boolean): V {
    val index = indexOfFirst(predicate)
    return if (index == -1) {
        add(value)
        value
    } else {
        get(index)
    }
}