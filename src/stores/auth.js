import { defineStore } from 'pinia';
import { onAuthStateChanged, signOut } from "firebase/auth";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    async fetchUser(auth) {
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          this.user = user;
          resolve(user);
        });
      });
    },
    async logout(auth) {
      await signOut(auth);
      this.user = null;
    }
  }
});
