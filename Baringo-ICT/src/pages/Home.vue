<template>
  <DefaultLayout>
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Empowering Baringo Through ICT and Innovation</h1>
          <p>Join our free ICT training programs and transform your future today.</p>
          <router-link to="/registration" class="btn-register">Register Now</router-link>
        </div>
      </section>

      <!-- Courses Section -->
      <section class="home-section">
        <h2>Our Popular Courses</h2>
        <div class="courses-container">
          <CourseCard 
            v-for="course in topCourses" 
            :key="course.title" 
            :course="course"
          />
        </div>
        <router-link to="/courses" class="btn-view-all">View All Courses</router-link>
      </section>

      <!-- Testimonials Section -->
      <section class="home-section testimonials-section">
        <h2>What Our Students Say</h2>
        <Testimonials />
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/Layout/DefaultLayout.vue';
import CourseCard from '@/components/CourseCard.vue';
import Testimonials from '@/components/testimonials.vue';
import '@/assets/styles/home.css'; // Import separate styles

const topCourses = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, and JavaScript to build modern websites.",
    image: "/assets/images/web-development.jpg",
    duration: "3 Months",
    tags: ["Free Training", "Certification"],
  },
  {
    title: "Cybersecurity Basics",
    description: "Understand how to protect online data and prevent threats.",
    image: "/assets/images/cybersecurity.jpg",
    duration: "2 Months",
    tags: ["Free", "Hands-on Labs"],
  },
  {
    title: "Ajira Digital Program",
    description: "Gain skills in freelancing, digital marketing, and online work.",
    image: "/assets/images/ajira-digital.jpg",
    duration: "6 Weeks",
    tags: ["Remote Learning", "Freelancing"],
  },
];
</script>
