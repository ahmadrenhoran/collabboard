<template>
  <AuthLayout>
    <div class="flex min-h-full items-center justify-center px-6 py-12 lg:px-8 font-mono">
      <div class="bg-white rounded-xl border p-6 border-slate-100 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="flex flex-col items-center text-center gap-2 justify-center mb-4">
          <img src="/images/register.png" alt="alt" width="150" height="100" />
          <h1 class="font-semibold text-xl">Sign In</h1>
          <p class="text-gray-500 text-sm">Let's manage your project with us</p>
        </div>

        <form @submit.prevent="signupWithEmailAndPassword" class="space-y-6">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
            <div class="mt-2">
              <input v-model="email.value.value" type="email" name="email" id="email" autocomplete="email" required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-400 sm:text-sm/6" />
            </div>
            <ErrorMessage name="email" class="text-xs text-red-500"/>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input v-model="password.value.value" type="password" name="password" id="password" autocomplete="current-password"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-400 sm:text-sm/6" />
            </div>
            <ErrorMessage name="password" class="text-xs text-red-500"/>
          </div>

          <div>
            <button style="cursor: pointer;" type="submit"
              class="flex w-full justify-center rounded-md bg-violet-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400">
              Getting Started
            </button>
          </div>
        </form>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from "@/layouts/AuthLayout.vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFirebaseAuth } from "vuefire";
import { useForm, useField, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useToast } from "vue-toastification";

const toast = useToast();

const scheme = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required")
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character'),
});

const { handleSubmit } = useForm({
  validationSchema: scheme
})

const auth = useFirebaseAuth();
const email = useField("email");
const password = useField("password");

const router = useRouter();

const signupWithEmailAndPassword = handleSubmit(async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value.value,
      password.value.value
    );
    console.log("User created:", userCredential.user);
    toast.success("Login success!");
    router.push("/");
  } catch (error) {
    console.error("Error during registration:", error.message);
    if (error.code === "auth/invalid-credential") {
      toast.error("Incorrect email or password!", { timeout: false });
    } else if (error.code === "auth/too-many-requests") {
      toast.error("Too many failed attempts. Try again later.");
    } else {
      toast.error("Login failed! Please try again.");
    }
  }
});
</script>
