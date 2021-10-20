<template>
    <div>
      <ul class="w-full flex flex-wrap justify-center items-start">
        <li
          v-for="car in listCars" :key="car.id"
          class="w-1/2 h-auto p-2"
        >
          <NuxtLink
            :to="`/cars/${car.id}`"
            class="relative w-full h-full block rounded-lg overflow-hidden bg-white shadow-md"
          >
            <img
              :src="require(`~/assets/img/car-${car.id}.jpg`)" :alt="`car-${car.id}.jpg`"
              class="w-full h-24 object-cover object-center"
            >
            <div class="p-2 z-10">
              <h3>{{ car.name }}</h3>
              <p class="text-xs opacity-80">{{ categoryName(car.category) }}</p>
              <p class="mt-3 font-bold antialiased inline">Rp. {{ car.price }}</p>
              <p class="text-xs opacity-80 inline">/ m</p>
            </div>

            <div class="text-xs flex justify-center items-center space-x-1 absolute top-1 left-1 bg-gradient-to-r from-pink-500 to-purple-500 py-1 px-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-yellow-300" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /> </svg>
              <span class="text-white">{{ car.rating }}</span>
            </div>

            <div v-if="car.best_seller" class="absolute top-20 right-1 z-0">
              <img class="w-10 h-auto" src="~/assets/img/best-seller.png" alt="best-seller.png">
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
</template>

<script>
import { cars, categories } from '~/assets/data.js'

export default {
  data() {
      return {
          categories: categories
      }
  },
  methods: {
    categoryName(id) {
      const category = this.categories.find((each) => {
        return each.id == id;
      });

      return category.name;
    }
  },
  computed: {
    listCars() {
      let list = cars;
      const selectedCategory = this.$store.state.cars.categoryId
      if (selectedCategory != null) {
        list = cars.filter((car) => car.category == selectedCategory );
      }

      return list;
    }
  }
}
</script>