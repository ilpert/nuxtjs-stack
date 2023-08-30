<script setup>
const {
  data: usersData,
  isFetching: pending,
  error,
} = await useLazyFetch(`https://dummyjson.com/users?limit=10`, {
  transform: (_users) => {
    return _users.users;
  },
});
</script>

<template>
  <p v-if="pending">Fetching...</p>
  <pre v-else-if="error">Could not load users: {{ error.data }}</pre>

  <section v-else class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          Our Team
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them.
        </p>
      </div>
      <div class="flex flex-wrap -m-2">
        <div
          v-for="user of usersData"
          :key="user.id"
          class="p-2 lg:w-1/3 md:w-1/2 w-full"
        >
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
          >
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              :src="user.image"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">
                {{ user.firstName }}
              </h2>
              <p class="text-gray-500">UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <NuxtLink to="/">Back home</NuxtLink>
  <!-- <div>
    <p>
      Result of <code>https://dummyjson.com/products/</code
      ><input type="number" v-model="id" />
    </p>
    <p>
      <button @click="id--">Previous</button> -
      <button @click="id++">Next</button>
    </p>
    <p v-if="pending">Fetching...</p>
    <pre v-else-if="error">{{ error }}</pre>
    <pre v-else>{{ product }}</pre>
    <NuxtLink to="/">Back home</NuxtLink>
  </div> -->
</template>
