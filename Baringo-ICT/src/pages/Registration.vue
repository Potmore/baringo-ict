<template>
    <DefaultLayout>
      <div class="registration-page">
        <h1>Register for Training</h1>
        <p>Start your journey to ICT excellence today.</p>
  
        <form @submit.prevent="submitForm" class="registration-form">
          <!-- Name -->
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" v-model="form.name" required placeholder="Enter your full name" />
          </div>
  
          <!-- Email -->
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="form.email" required placeholder="Enter your email" />
          </div>
  
          <!-- Phone -->
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" v-model="form.phone" required placeholder="Enter your phone number" />
          </div>
  
          <!-- National ID -->
          <div class="form-group">
            <label for="id">National ID / Birth Certificate</label>
            <input type="text" id="id" v-model="form.idNumber" required placeholder="Enter your ID or birth certificate number" />
          </div>
  
          <!-- Select Course -->
          <div class="form-group">
            <label for="course">Select Training Program</label>
            <select id="course" v-model="form.course" required>
              <option value="">-- Select a Course --</option>
              <option v-for="course in courses" :key="course" :value="course">{{ course }}</option>
            </select>
          </div>
  
          <!-- Passport Photo Upload -->
          <div class="form-group">
            <label for="photo">Upload Passport-Size Photo (JPG)</label>
            <input type="file" id="photo" @change="handleFileUpload" accept="image/jpeg" required />
          </div>
  
          <!-- Submit Button -->
          <button type="submit" class="btn-submit">Register Now</button>
        </form>
      </div>
    </DefaultLayout>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import DefaultLayout from "@/Layout/DefaultLayout.vue";
  import "@/assets/styles/registration.css"; // Import separate styles
  
  const form = ref({
    name: "",
    email: "",
    phone: "",
    idNumber: "",
    course: "",
    photo: null as File | null,
  });
  
  const courses = [
    "Web Development",
    "Cybersecurity Basics",
    "Ajira Digital Program",
    "Computer Maintenance",
    "Graphic Design & Video Editing",
    "Artificial Intelligence & Cybersecurity",
  ];
  
  const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      form.value.photo = target.files[0];
    }
  };
  
  const submitForm = () => {
    if (!form.value.name || !form.value.email || !form.value.phone || !form.value.idNumber || !form.value.course || !form.value.photo) {
      alert("Please fill in all required fields.");
      return;
    }
  
    alert("Registration successful!");
  };
  </script>
  