<template>
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1 ">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto rounded-lg"
              src="/images/logo.png"
              alt="Company Logo"
            />
          </a>
          <p class="font-mono text-md font-semibold items-center justify-center ms-2 mt-1">Collab Board</p>
        </div>
      </nav>
    </header>
    <slot></slot>
  </template>
  
  <script setup></script>
  