<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'

// App.vue
// const user = useCurrentUser()
// const router = useRouter()
// const route = useRoute()

// watch(user, async (currentUser, previousUser) => {
//   if (
//     !currentUser &&
//     previousUser &&
//     isCurrentRouteAuthenticated(route)
//   ) {
//     return router.push({ name: 'login' })
//   }

//   if (currentUser && typeof route.query.redirect === 'string') {
//     return router.push(route.query.redirect)
//   }
// })
</script>

<template>
  <RouterView />
</template>
