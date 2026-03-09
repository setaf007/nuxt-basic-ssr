<!-- layouts/default.vue -->
<template>
    <div class="min-h-screen flex flex-col">
        <header class="p-4 border-b flex justify-between items-center">
            <NuxtLink to="/" class="font-bold text-lg">
                Mini Sephora
            </NuxtLink>

            <nav class="space-x-4">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/products">Products</NuxtLink>
            </nav>
        </header>

        <main class="p-4 flex-1">
            <NuxtPage />
        </main>

        <footer class="p-4 border-t text-sm text-gray-500">
            Nuxt 3 SSR demo by Md Taskin Hossain.
        </footer>
    </div>
</template>