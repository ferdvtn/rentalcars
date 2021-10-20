<template>
  <div>
    <img :src="require(`~/assets/img//${car.image}`)" :alt="`${car.image}`">
    <div class="p-5">
      <h1 class="text-2xl font-bold antialiased inline">Rp. {{ car.price }}</h1>
      <p class="text-sm inline">/ week</p>
      <p>{{ car.name }}</p>
      <hr class="my-3">
      <div class="info mb-3">
        <div class="font-bold mb-1">Information</div>
        <ul>
          <li>Category : {{ getCategoryName(car.category) }}</li>
          <li>Customer rating : {{ car.rating }}</li>
          <li>Best Seller: {{ car.best_seller ? 'Yes' : 'No' }}</li>
        </ul>
      </div>
      <div class="desc mb-3">
        <div class="font-bold mb-1">Description</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis ipsum inventore delectus? Soluta nam consequuntur, officia, dolorum at natus molestias praesentium blanditiis ipsam nemo quae pariatur tenetur laborum, inventore repellat animi unde delectus officiis qui beatae et itaque autem aliquam voluptates. Recusandae non ipsam debitis nostrum expedita facere autem.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos cupiditate dignissimos velit obcaecati! Soluta exercitationem voluptates quo mollitia deserunt.</div>
      </div>

      <div class="font-bold mb-4">Select Range</div>
      <DatePicker @range="getRange" />

      <div class="mt-5 w-full">
        <button v-on:click="addToCart" class="w-full p-4 rounded-md bg-green-500 text-gray-100">
          <span>Add to cart</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { cars, categories } from '~/assets/data.js'

export default {
  data() {
    return {
      car: [],
      range: {}
    }
  },
  beforeMount() {
    this.car = cars.find((eachCars) => {
      return eachCars.id == this.$route.params.id
    });
  },
  methods: {
    getCategoryName(id) {
      return categories.find((category) => category.id == id).name
    },
    getRange(res) {
      return this.range = res
    },
    addToCart() {
      if (this.range.start == undefined) {
        window.alert('Please select range of date');
      } else {
        this.$store.commit('cars/addToCart', {
          item: {
            ...this.car,
            range: this.range
          }
        })

        window.alert('Item added to cart succesfully\nYou\'ll be redirected to cart');
        this.range = {}

        // redirect to cart
        this.$router.push('/cart');
      }
    }
  }
}
</script>