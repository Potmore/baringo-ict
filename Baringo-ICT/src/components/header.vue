<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="Baringo ICT Center Logo" />
      </router-link>
    </div>

    <nav :class="{'nav-active': menuOpen}">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/courses">Courses</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/registration" class="btn-register">Register</router-link></li>
      </ul>
    </nav>

    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "@/assets/styles/header.css"; // Import separate styles

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
