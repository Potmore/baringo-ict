import { defineStore } from 'pinia';

// Define the main store
export const useMainStore = defineStore('main', {
  state: () => ({
    user: null as { name: string; email: string } | null, // User info (if logged in)
    selectedCourse: null as string | null, // Store selected course
  }),
  actions: {
    setUser(user: { name: string; email: string }) {
      this.user = user;
    },
    logout() {
      this.user = null;
    },
    selectCourse(course: string) {
      this.selectedCourse = course;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user, // Returns true if user is logged in
  },
});
