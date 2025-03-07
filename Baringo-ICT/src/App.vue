<template>
  <div id="app">
    <Header />
    <main>
      <router-view /> <!-- This renders the current page -->
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>

<style>
/* Global Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: #f9f9f9;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-top: 70px; /* Adjust for fixed header */
}
</style>
