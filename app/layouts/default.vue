<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-store-white text-store-gray-900">
    <!-- Header -->
    <header class="bg-store-black text-store-white shadow-2xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <NuxtLink to="/" class="text-3xl font-bold flex items-center space-x-3 hover:scale-105 transition-transform">
            <span class="text-2xl">🛍️</span>
            <span>Mini store</span>
          </NuxtLink>
          
          <nav class="hidden md:flex space-x-10">
            <NuxtLink to="/" class="text-lg hover:text-store-gold hover:underline underline-offset-4 transition-all duration-300 py-2">Home</NuxtLink>
            <NuxtLink to="/products" class="text-lg hover:text-store-gold hover:underline underline-offset-4 transition-all duration-300 py-2">Products</NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-store-gray-900 text-store-white py-12 mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-lg opacity-90">
          Nuxt 3 SSR demo for store SWE prep • Md Taskin Hossain • March 2026
        </p>
      </div>
    </footer>
  </div>
</template>
