<template>
    <div>
      <Header />
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import Header from '@/components/header.vue';
  import Footer from '@/components/footer.vue';
  </script>
  
  <style scoped>
  main {
    padding: 20px;
  }
  </style>
  