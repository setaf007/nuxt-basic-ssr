<!-- pages/index.vue -->
 <script setup lang="ts">
 import { products } from '~/data/products'

 const featured = products.slice(0,2)
</script>

<template>
    <section>
        <h1 class="text-2xl font-bold mb-2">
            Welcome to our store!
        </h1>
        <p class="mb-4">
            This is a minimal Nuxt 3 SSR demo: Homepage, Product list, and product detail page
        </p>

        <h2 class="text-xl font-semibold mb-2">
            Featured Products
        </h2>
        <div class="grid gap-4 md:grid-cols-2">
            <article v-for="product in featured" :key="product.id" 
            class="border rounded p-3">
                <h3 class="font-semibold mb-1">
                    {{ product.name }}
                </h3>
                <p class="text-sm text-gray-600 mb-1">
                    {{ product.brand }}
                </p>
                <p class="font-medium mb-2">
                    ${{ product.price }}
                </p>
                <NuxtLink :to="`/products/${product.id}`" class="text-blue-600 hover:underline">
                    View Details
                </NuxtLink>
            </article>
        </div>

        <div class="mt-6">
            <NuxtLink to="/products" class="text-blue-600 hover:underline">
                View All Products
            </NuxtLink>
        </div>
    </section>
</template>