<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import { useCurrentUser } from 'vuefire'
import { watch } from 'vue'

// App.vue
const user = useCurrentUser()
const router = useRouter()
const route = useRoute()

// watch(user, async (currentUser, previousUser) => {
//   if (
//     !currentUser &&
//     previousUser &&
//     isCurrentRouteAuthenticated(route)
//   ) {
//     return router.push('/login')
//   } else {
//     return router.push('/')
//   }
// })
</script>

<template>
  <RouterView />
</template>
