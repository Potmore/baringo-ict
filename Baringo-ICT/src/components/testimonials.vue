<template>
    <div class="testimonials">
      <h2>Our Success Stories <span class="celebration">🎉</span></h2>
      <div class="testimonials-container">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
          <img :src="testimonial.image || defaultAvatar" :alt="testimonial.name" class="testimonial-image" />
          <p class="testimonial-text">"{{ testimonial.feedback }}"</p>
          <h3 class="testimonial-name">— {{ testimonial.name }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import "@/assets/styles/testimonials.css"; // Import separate styles
  
  const defaultAvatar = "/assets/images/default-avatar.png"; // Default avatar image
  
  const testimonials = ref([
    {
      name: "Hillary Korir",
      feedback: "Thanks to Baringo World Best Friend ICT Centre, I can now work as a freelancer online!",
      image: "/src/assets/images/hillary.avif",
    },
    {
      name: "Faith Wanjiru",
      feedback: "The cybersecurity training was very practical and insightful!",
      image: "/src/assets/images/faith.jpg",
    },
    {
      name: "John Ochieng",
      feedback: "I started my own digital marketing business after completing the Ajira Digital Program!",
      image: "/src/assets/images/john.webp",
    },
  ]);
  </script>
  