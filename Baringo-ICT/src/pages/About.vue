<template>
  <DefaultLayout>
    <div class="about-page">
      <div class="about-hero">
        <h1>About Baringo ICT Center</h1>
        <p>Empowering Baringo through ICT and Innovation since 2013.</p>
      </div>

      <section class="about-content">
        <div class="about-section">
          <h2>Who We Are</h2>
          <p>
            Baringo World Best Friend ICT Centre is a premier training institution dedicated to 
            equipping individuals with essential ICT skills. Since 2013, we have trained over 
            <strong>10,000 students</strong>, fostering digital transformation and entrepreneurship.
          </p>
        </div>

        <div class="about-section">
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Accessibility:</strong> Open to everyone, regardless of background or skill level.</li>
            <li><strong>Innovation & Growth:</strong> We foster creativity and adaptability in an evolving digital world.</li>
            <li><strong>Community Empowerment:</strong> We uplift the youth and local community through technology.</li>
          </ul>
        </div>

        <div class="about-section">
          <h2>Why Train With Us?</h2>
          <ul>
            <li>📜 <strong>Free Training</strong> – Sponsored by Baringo County Government.</li>
            <li>✅ <strong>Recognized Certification</strong> upon course completion.</li>
            <li>🎓 <strong>State-of-the-Art Facilities</strong> – Modern computer labs.</li>
            <li>🌍 <strong>Exchange Programs</strong> – Opportunities to connect with South Korea.</li>
            <li>🚀 <strong>Entrepreneurship Support</strong> – Free business startup guidance.</li>
          </ul>
        </div>

        <div class="about-section">
          <h2>Join Us & Transform Your Future</h2>
          <p>Start your journey to ICT excellence today!</p>
          <router-link to="/registration" class="btn-register">Register Now</router-link>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/Layout/DefaultLayout.vue';
import '@/assets/styles/about.css'; // Import separate styles
</script>
