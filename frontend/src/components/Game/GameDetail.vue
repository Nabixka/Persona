<script setup>
import Navbar from '../Navbar/Navbar.vue';
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const API_URL = import.meta.env.VITE_API_URL
const gameDetail = ref({})
const loading = ref(true)
const error = ref(null)
const router = useRoute()

const getDetail = async () => {
    try {
        const id = router.params.id
        const res = await fetch(`${API_URL}/game/${id}`)
        const json = await res.json()

        gameDetail.value = json.data
    }
    catch (err) {
        error.value = err.message
    }
    finally {
        loading.value = false
    }
}

onMounted(() => {
    getDetail()
})


</script>

<template>
    <div class="flex flex-col gap-10">
        <div class="pt-5">
            <Navbar />
        </div>

        <div v-if="loading" class="flex justify-center h-screen items-center">
            <p class="text-gray-500 text-4xl">Loading</p>
        </div>

        <div v-else-if="error" class="flex justify-center h-screen items-center">
            <p class="text-gray-500 text-4xl">{{ error }}</p>
        </div>

        <div v-else class="pl-25 pr-25">
            <div class="flex border border-white rounded overflow-hidden">
                <div class="w-85 border-r border-white">
                    <img class="h-100 w-full" :src="gameDetail.image">
                </div>
                <div class="w-full grid grid-rows-4">
                    <p class="bg-gray-100 text-white">{{ gameDetail.name }} </p>
                    <p class="bg-gray-500 text-white">{{ gameDetail.name }} </p>
                    <p class="bg-gray-100 text-white">{{ gameDetail.name }} </p>
                    <div class="bg-gray-500 flex items-center">
                        <p class="text-white">{{ gameDetail.name }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>