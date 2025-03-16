<template>
  <DefaultLayout>
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to Baringo ICT Center</h1>
          <p>Empowering communities through ICT and Innovation.</p>
          <div class="hero-cta">
            Join our free ICT training programs and transform your future today!
          </div>
          <router-link to="/registration" class="btn-register">Register Now</router-link>
        </div>
      </section>

      <!-- About Section -->
      <section class="About-section">
        <div class="About-us">
          <h2>Ready to Transform Your Future with Digital Skills? 🚀</h2>
          <p>
            At Baringo World Best Friend ICT Centre, we are committed to driving digital transformation and economic 
            growth in Baringo County. Since 2013, we have provided free ICT training to over 10,000 individuals, 
            equipping them with essential digital skills in computer literacy, programming, cybersecurity, and entrepreneurship.
            Our mission is to bridge the digital divide, foster innovation, and create opportunities for youth and professionals alike.
            Join us in shaping the future of technology—where learning meets opportunity.
          </p>
        </div>
      </section>

      <!-- Courses Section -->
      <section class="home-section">
        <h3>Our Popular Courses</h3>
        <div class="courses-container">
          <CourseCard v-for="course in topCourses" :key="course.title" :course="course" />
        </div>
        <router-link to="/courses" class="btn-view-all">View All Courses</router-link>
      </section>

      <!-- Upcoming Events Section -->
      <section class="events-section">
        <div class="events-wrapper fade-in" ref="eventsSection">
          <h3>Upcoming Events</h3>
          <div class="events-container">
            <!-- Image Section -->
            <div class="events-image">
              <img src="/src/assets/images/events-banner.jpg" alt="Upcoming Events" />
            </div>
            <!-- Events List -->
            <div class="events-list">
              <ul>
                <li v-for="event in upcomingEvents" :key="event.title">
                  <strong>{{ event.title }}</strong> - {{ event.date }} | {{ event.location }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- Call-to-Action Section -->
      <section class="cta-section">
        <h2>Take the First Step Towards Your Tech Career!</h2>
        <p>Join thousands of learners who have transformed their lives with our free ICT training.</p>
        <router-link to="/registration" class="btn-register">Get Started Today</router-link>
      </section>

      <!-- Testimonials Section -->
      <section class="home-section testimonials-section">
        <Testimonials />
      </section>
            <!-- Partners & Sponsors Section -->
            <Partners />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DefaultLayout from '@/Layout/DefaultLayout.vue';
import CourseCard from '@/components/CourseCard.vue';
import Testimonials from '@/components/testimonials.vue';
import Partners from '@/components/Partners.vue';
import '@/assets/styles/home.css';

// List of top courses
const topCourses = ref([
  {
    title: "Web Development",
    description: "Learn HTML, CSS, and JavaScript to build modern websites.",
    image: "/src/assets/images/web-development.jpeg",
    duration: "3 Months",
    tags: ["Free Training", "Certification"],
  },
  {
    title: "Cybersecurity Basics",
    description: "Understand how to protect online data and prevent threats.",
    image: "/src/assets/images/cybersecurity.jpeg",
    duration: "2 Months",
    tags: ["Free", "Hands-on Labs"],
  },
  {
    title: "Ajira Digital Program",
    description: "Gain skills in freelancing, digital marketing, and online work.",
    image: "/src/assets/images/ajira-digital.jpeg",
    duration: "6 Weeks",
    tags: ["Remote Learning", "Freelancing"],
  },
]);
// Make the image reactive
const imageSection = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    },
    { threshold: 0.3 } // Trigger animation when 30% of the image is visible
  );

  if (imageSection.value) {
    observer.observe(imageSection.value);
  }
});
// List of upcoming events
const upcomingEvents = ref([
  { title: "Web Dev Bootcamp", date: "March 25, 2025", location: "Baringo ICT Center" },
  { title: "Cybersecurity Awareness Day", date: "April 10, 2025", location: "Online Webinar" }
]);
</script>
