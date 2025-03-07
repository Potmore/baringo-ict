<template>
    <div class="course-card">
      <img :src="course.image" :alt="course.title" class="course-image" />
      <div class="course-content">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
        <span class="course-duration">⏳ Duration: {{ course.duration }}</span>
        <div class="course-tags">
          <span v-for="tag in course.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <button @click="registerCourse">Enroll Now</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import '@/assets/styles/course-card.css';
  
  defineProps<{
    course: {
      title: string;
      description: string;
      image: string;
      duration: string;
      tags: string[];
    };
  }>();
  
  const registerCourse = () => {
    console.log("Redirecting to course registration...");
  };
  </script>
  