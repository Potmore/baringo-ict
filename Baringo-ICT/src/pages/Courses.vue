<template>
  <DefaultLayout>
    <div class="courses-page">
      <div class="courses-hero">
        <h1>Our Courses & Programs</h1>
        <p>Learn practical ICT skills, get certified, and enhance your career opportunities.</p>
      </div>

      <section class="courses-content">
        <div class="courses-container">
          <CourseCard 
            v-for="course in courses" 
            :key="course.title" 
            :course="course"
          />
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/Layout/DefaultLayout.vue';
import CourseCard from '@/components/CourseCard.vue';
import '@/assets/styles/courses.css'; // Import separate styles

const courses = [
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
  {
    title: "Computer Maintenance",
    description: "Learn hardware fundamentals, troubleshooting, and networking.",
    image: "/assets/images/computer-maintenance.jpg",
    duration: "4 Months",
    tags: ["Practical Training", "Certification"],
  },
  {
    title: "Graphic Design & Video Editing",
    description: "Master tools like Photoshop, Illustrator, and Premiere Pro.",
    image: "/assets/images/graphic-design.jpg",
    duration: "3 Months",
    tags: ["Creative Skills", "Certification"],
  },
  {
    title: "Artificial Intelligence & Cybersecurity",
    description: "Explore AI-powered security solutions and ethical hacking techniques.",
    image: "/assets/images/ai-cybersecurity.jpg",
    duration: "5 Months",
    tags: ["Advanced", "Cybersecurity"],
  },
];
</script>
