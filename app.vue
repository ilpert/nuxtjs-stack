<template>
  <div class="w-full px-8 flex flex-col justify-center">
    <nav class="flex align-center gap-4 p-4">
      <NuxtLink to="/" class="n-link-base"> Home </NuxtLink>
      <NuxtLink to="/blog" class="n-link-base"> Blog </NuxtLink>
      <NuxtLink to="/spa" class="n-link-base">Spa </NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
