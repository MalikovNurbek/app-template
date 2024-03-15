<template>
  <header class="site-header">
    <div class="site-identity">
      <h1><NuxtLink to="/">Site Name</NuxtLink></h1>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: #111111;
}

.site-header {
  border-bottom: 1px solid #ccc;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
}

.site-identity h1 {
  font-size: 1.5em;
  margin: 0.6em 0;
  display: inline-block;
}
</style>
