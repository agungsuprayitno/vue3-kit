<script setup lang="ts">
import 'bootstrap'
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
</script>

<template>
  <AppHeader />
    <router-view />
  <AppFooter />
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
</style>
