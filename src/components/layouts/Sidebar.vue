<template>
    <div class="w-64 h-screen bg-violet-700 text-white flex flex-col font-mono text-sm">
        <div class="flex items-center ms-4 mt-4" style="cursor: pointer;">
            <a href="#" class="-m-1.5 p-1.5">
                <img class="h-8 w-auto rounded-lg" src="/images/logo.png" alt="Company Logo" />
            </a>
            <p class="font-mono text-lg font-semibold ms-2 mt-1">
                Collab Board
            </p>
        </div>
        <nav class="flex-1 p-4">
            <ul class="space-y-6">
                <li v-for="item in menuItems" :key="item.text" class="mb-3">
                    <a :href="item.link" class="block p-3 rounded font-extralight hover:bg-violet-500 hover:rounded-lg">
                        {{ item.text }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const menuItems = [
    { text: "Dashboard", link: "#" },
    { text: "Board", link: "#" },
    { text: "Settings", link: "#" },
    { text: "Logout", link: "#" },
];
</script>
