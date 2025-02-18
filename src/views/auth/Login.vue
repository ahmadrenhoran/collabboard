<template>
  <AuthLayout>
    <div
      class="flex h-screen items-center justify-center px-6 py-12 lg:px-8 font-mono"
    >
      <div
        class="bg-white rounded-xl border p-6 border-slate-100 mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
      >
        <div
          class="flex flex-col items-center text-center gap-2 justify-center mb-4"
        >
          <img src="/images/login.png" alt="alt" width="150" height="100" />
          <h1 class="font-semibold text-xl">Sign In</h1>
          <p class="text-gray-500 text-sm">Let's manage your project with us</p>
        </div>

        <form @submit.prevent="singinWithEmailAndPassword" class="space-y-6">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-400 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm/6 font-medium text-gray-900"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-400 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button style="cursor: pointer;"
              type="submit"
              class="flex w-full justify-center rounded-md bg-violet-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
            >
              Sign in
            </button>
          </div>    
        </form>
        <div>
            <button style="cursor: pointer;" @click="goToRegister"
              class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold mt-2"
            >
              Create Account
            </button>
          </div>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from "@/layouts/AuthLayout.vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFirebaseAuth } from "vuefire";

const auth = useFirebaseAuth();
const email = ref("");
const password = ref("");
const router = useRouter();

const singinWithEmailAndPassword = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log("User login:", userCredential.user);
    router.push("/");
  } catch (error) {
    console.error("Error during registration:", error.message);
  }
};

const goToRegister = () => router.push('/register')
</script>
