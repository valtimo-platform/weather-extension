import java.io.PrintWriter
import java.util.Properties
import org.jetbrains.kotlin.com.google.common.io.Files
import org.jetbrains.kotlin.incremental.createDirectory

val kotlinLoggingVersion: String by project
val pf4jVersion: String by project
val pf4jSpringVersion: String by project
val valtimoVersion: String by project

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

    implementation("io.github.microutils:kotlin-logging:$kotlinLoggingVersion")

    compileOnly("org.pf4j:pf4j:$pf4jVersion")
    implementation("org.pf4j:pf4j-spring:$pf4jSpringVersion") {
        exclude(group = "org.pf4j", module = "pf4j")
    }
    kapt("org.pf4j:pf4j:$pf4jVersion")

}

val gradleProperties = Properties()
gradleProperties.load(file("gradle.properties").inputStream())
tasks.withType<Jar> {
    manifest {
        attributes["Plugin-Id"] = gradleProperties["extensionId"]
        attributes["Plugin-Class"] = gradleProperties["extensionClass"]
        attributes["Plugin-Version"] = gradleProperties["extensionVersion"]
        attributes["Plugin-Provider"] = gradleProperties["extensionProvider"]
        attributes["Plugin-Dependencies"] = gradleProperties["extensionDependencies"]
    }
}

tasks.register("buildAndPublishToStore") {
    dependsOn("jar")
    doFirst {
        val storeDir = file(projectDir.absolutePath + "/store/").also { it.mkdirs() }
        val storeJarsDir = file(storeDir.absolutePath + "/jars/").also { it.mkdirs() }
        val jarFile = file(buildDir.absolutePath + "/libs/").listFiles()!!.first { it.name.endsWith(".jar") }
        val toJarFile = file(storeJarsDir.absolutePath +"/"+ jarFile.name)
        Files.copy(jarFile, toJarFile)

        val storeIndexWriter = PrintWriter(storeDir.absolutePath + "/index.json")
        storeIndexWriter.println("""[{"id":"${gradleProperties["extensionId"]}","name":"${gradleProperties["projectName"]}","version":"${gradleProperties["extensionVersion"]}","path":"/${toJarFile.name}"}]""")
        storeIndexWriter.close()
    }
}