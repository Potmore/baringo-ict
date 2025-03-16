<template>
    <section class="partners-section">
      <h3>Our Partners</h3>
      <div class="partners-wrapper">
        <!-- Duplicate logos to create a seamless loop -->
        <div class="partners-container">
          <div class="partner-logo" v-for="(partner, index) in partners.concat(partners)" :key="index">
            <img :src="partner.logo" :alt="partner.name" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const partners = [
    { name: "Google", logo: "/src/assets/images/google-logo.png" },
    { name: "Microsoft", logo: "/src/assets/images/microsoft-logo.avif" },
    { name: "IBM", logo: "/src/assets/images/ibm-logo.webp" },
    { name: "Ajira Digital", logo: "/src/assets/images/ajira-logo.png" },
    { name: "Safaricom", logo: "/src/assets/images/safaricom-logo.png" },
    { name: "Huawei", logo: "/src/assets/images/huawei-logo.png" }
  ];
  </script>
  
  <style scoped>
 .partners-section {
  background: #f8f9fa;
  padding: 60px 20px;
  text-align: center;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

/* Continuous scrolling container */
.partners-container {
  display: flex;
  align-items: center;
  gap: 30px;
  animation: scrollPartners 10s linear infinite;
  width: max-content;
}

/* Duplicate logos for continuous effect */
.partners-container:hover {
  animation-play-state: paused; /* Pause on hover */
}

/* Partner logo styling */
.partner-logo img {
  width: 100px;
  height: auto;
  opacity: 0.8;
  transition: transform 0.3s ease-in-out, opacity 0.3s;
}

.partner-logo img:hover {
  transform: scale(1.1);
  opacity: 1;
}

/* Scrolling animation */
@keyframes scrollPartners {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* Mobile Optimization */
@media (max-width: 768px) {
  .partner-logo img {
    width: 70px; /* Smaller logos for mobile */
  }
  .partners-container {
    animation-duration: 8s; /* Slightly faster on mobile */
  }
}
</style>