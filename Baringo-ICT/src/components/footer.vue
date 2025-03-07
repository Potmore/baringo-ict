<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section about">
          <h2>Baringo ICT Center</h2>
          <p>Empowering communities through ICT, one step at a time.</p>
        </div>
  
        <div class="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:worldbestfriendke@gmail.com">worldbestfriendke@gmail.com</a></p>
          <p>Phone: <a href="tel:0752550257">0752 550 257</a></p>
          <p>Location: Kabarnet-Iten Road, Opp. Kaptimbor Junction</p>
        </div>
  
        <div class="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/courses">Courses</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul> 
        </div>
      </div>
  
      <div class="footer-bottom">
        <p>&copy; 2025 Baringo ICT Center. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import '@/assets/styles/footer.css'; // Import separate styles
  </script>
  