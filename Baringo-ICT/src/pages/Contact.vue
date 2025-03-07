<template>
    <DefaultLayout>
      <div class="contact-page">
        <h1>Contact Us</h1>
        <p>Have questions? We're here to help!</p>
  
        <div class="contact-container">
          <!-- Contact Form -->
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="Enter your name" />
            </div>
  
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required placeholder="Enter your email" />
            </div>
  
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" v-model="form.message" required placeholder="Type your message"></textarea>
            </div>
  
            <button type="submit" class="btn-submit">Send Message</button>
          </form>
  
          <!-- Contact Details -->
          <div class="contact-details">
            <h2>Get in Touch</h2>
            <p>Email: <a href="mailto:worldbestfriendke@gmail.com">worldbestfriendke@gmail.com</a></p>
            <p>Phone: <a href="tel:0752550257">0752 550 257</a></p>
            <p>Location: Kabarnet-Iten Road, Opp. Kaptimbor Junction</p>
  
            <!-- Google Map Embed -->
            <iframe
              class="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.901234567890!2d35.743462!3d0.491362"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </DefaultLayout>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import DefaultLayout from "@/Layout/DefaultLayout.vue";
  import "@/assets/styles/contact.css"; // Import separate styles
  
  const form = ref({
    name: "",
    email: "",
    message: "",
  });
  
  const submitForm = () => {
    if (!form.value.name || !form.value.email || !form.value.message) {
      alert("Please fill in all fields.");
      return;
    }
  
    alert("Message sent successfully!");
    form.value = { name: "", email: "", message: "" }; // Reset form
  };
  </script>
  