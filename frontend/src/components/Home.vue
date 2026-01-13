<script setup>
import Navbar from './Navbar/Navbar.vue';
</script>

<template>
    <div class="h-screen bg-linear-to-b from-gray-800 to-gray-700">
        <div class="pt-5">
            <Navbar />
        </div>
        <div>
            <h1 class="text-4xl">Ini Home</h1>
            <router-link to="/hello">Ganti Page</router-link>
        </div>
    </div>
</template>

<style scoped></style>