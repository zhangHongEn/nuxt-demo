<template>
  <div>
    <h1>Nuxt host</h1>

    <p>
      Mode1: <i> {{ runtimeConfig.app.buildId ? ' dev ' : ' prod ' }} mode </i>
    </p>
    <hr />
    {{ dd }}
  </div>
</template>

<script setup>
new Function("name", "return import(name)")('vm')
const runtimeConfig = useRuntimeConfig();
</script>
