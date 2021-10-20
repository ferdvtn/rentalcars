<template>
  <div>
    <svg @click="$router.go(-1)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-3 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /> </svg>

    <ul v-if="list.length > 0" class="flex flex-col w-full`">
      <li
        v-for="(li, idx) in list" :key="idx"
        class="px-3 py-5 mb-3 bg-gray-50 shadow"
      >
        <div class="w-full flex items-center space-x-3">
          <img
            :src="require(`~/assets/img/${li.car.image}`)" :alt="`${li.car.image}`"
            class="w-20 h-auto"
          >
          <div class="w-full flex-1">
            <p>{{ li.car.name }}</p>
            <h1 class="font-bold antialiased inline-block">{{ li.car.price }}</h1>
            <p class="text-xs inline-block">/ month</p>
            <ul class="flex text-xs w-full">
              <li class="w-1/2 ml-1">
                <div>From:</div>
                <div>{{ li.car.range.start }}</div>
              </li>
              <li class="w-1/2">
                <div>To:</div>
                <div>{{ li.car.range.end }}</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex justify-end mt-1">
          <svg @click="deleteItem(idx)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> </svg>
        </div>
      </li>
    </ul>
    <h1 v-else class="px-3 font-bold antialiased">Cart is empty</h1>
  </div>
</template>

<script>
export default {
  created() {
    // set cart to store from localStorage
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    if (cart != undefined) {
      this.$store.commit('cars/initCart', {cart})
    }
  },
  computed: {
    list() {
      return this.$store.state.cars.cart
    }
  },
  methods: {
    deleteItem(idx) {
      this.$store.commit('cars/removeFromCart', {idx})
    }
  }
}
</script>