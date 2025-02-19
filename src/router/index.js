import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import Home from "@/views/home/home.vue";
import Profile from "@/views/profile/Profile.vue";
import Board from "@/views/board/board.vue";
import { getAuth, signOut } from "firebase/auth";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // auth
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    
    // sidebar
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/board",
      name: "board",
      component: Board,
      meta: { requiresAuth: true }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: { requiresAuth: true }
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  await authStore.fetchUser(getAuth())
  if (to.meta.requiresAuth && !authStore.user) {
    next('/login')
  } else {
    next()
  }
})


export default router;
