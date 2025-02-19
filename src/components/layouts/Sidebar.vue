<template>
    <div class="w-80 h-screen bg-violet-600 text-white flex flex-col font-mono text-sm">
        <!-- Logo -->
        <div class="flex items-center ms-4 mt-4 cursor-pointer">
            <a href="#" class="-m-1.5 p-1.5">
                <img class="h-8 w-auto rounded-lg" src="/images/logo.png" alt="Company Logo" />
            </a>
            <p class="font-mono text-lg font-semibold ms-2 mt-1">Collab Board</p>
        </div>

        <nav class="flex-1 flex flex-col p-4">
            <!-- Menu Utama -->
            <ul class="space-y-4">
                <li v-for="item in menuItems" :key="item.text">
                    <router-link
                        :to="item.link"
                        class="flex items-center p-3 rounded-lg transition duration-200"
                        :class="{
                            'bg-violet-800 font-semibold': route.path === item.link,
                            'hover:bg-violet-700': route.path !== item.link
                        }"
                    >
                        <component :is="item.icon" class="w-5 h-5 mr-3" />
                        {{ item.text }}
                    </router-link>
                </li>
            </ul>

            <!-- Menu Bawah -->
            <ul class="mt-auto space-y-4">
                <li v-for="item in bottomMenu" :key="item.text">
                    <router-link
                        v-if="item.text !== 'Logout'"
                        :to="item.link"
                        class="flex items-center p-3 rounded-lg transition duration-200"
                        :class="{
                            'bg-violet-800 font-semibold': route.path === item.link,
                            'hover:bg-violet-700': route.path !== item.link
                        }"
                    >
                        <component :is="item.icon" class="w-5 h-5 mr-3" />
                        {{ item.text }}
                    </router-link>

                    <button
                        v-else
                        @click.prevent="handleLogout"
                        class="w-full flex items-center p-3 rounded-lg transition duration-200 hover:bg-violet-700" style="cursor: pointer;"
                    >
                        <component :is="item.icon" class="w-5 h-5 mr-3" />
                        {{ item.text }}
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getAuth, signOut } from 'firebase/auth'; 
import { Home, LayoutDashboard, LogOut, User } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();
const auth = getAuth();

const menuItems = [
    { text: "Dashboard", link: "/", icon: Home },
    { text: "Board", link: "/board", icon: LayoutDashboard },
];

const bottomMenu = [
    { text: "Profile", link: "/profile", icon: User },
    { text: "Logout", link: "#", icon: LogOut },
];

const handleLogout = async () => {
    try {
        await signOut(auth); 
        console.log("User logged out successfully.");
        router.push("/login"); 
    } catch (error) {
        console.error("Logout failed:", error);
    }
};
</script>
