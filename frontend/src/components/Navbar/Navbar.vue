<script setup>

</script>

<template>
        <div class="flex justify-center ">
            <div class="grid grid-cols-3 bg-gray-300 rounded-full overflow-hidden w-2/3 items-center">
                <router-link active-class="bg-black text-white" class="text-center font-bold py-1" to="/">Home</router-link>
                <router-link active-class="bg-black text-white" class="text-center font-bold py-1" to="/game">Games</router-link>
                <router-link active-class="bg-black text-white" class="text-center font-bold py-1" to="/persona">Persona</router-link>
            </div>
        </div>
</template>

<style scoped></style>