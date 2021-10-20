<template>
    <div class="flex flex-wrap justify-center items-center p-2">
        <button v-for="category in categories" :key="category.id" @click="setCategory(category.id)" class="py-2 px-5 m-1 text-sm font-semibold text-gray-600 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-md hover:shadow" to="#">
            {{ category.name }}
        </button>
    </div>
</template>

<script>
import { categories } from '~/assets/data.js';

export default {
    data() {
        return {
            categories: categories
        }
    },
    methods: {
        setCategory(id) {
            this.$store.commit('cars/setCategoryId', {id})
        }
    }
}
</script>