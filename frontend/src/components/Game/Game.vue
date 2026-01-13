<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router"
import Navbar from '../Navbar/Navbar.vue';

const API_URL = import.meta.env.VITE_API_URL

const games = ref([])
const loading = ref(true)
const error = ref(null)
const router = useRouter()

const getGame = async () => {
    try{
        const res = await fetch(`${API_URL}/game`)
        if(!res.ok) throw new Error('Gagal Fetch Data')
        
        const list = await res.json()

        games.value = list.data
    }
    catch(err){
        error.value = err.message
    }
    finally{
        loading.value = false
    }
}

const detail = (id) => {
    router.push(`game/${id}`)
}

onMounted(() => {
    getGame()
})

</script>

<template>
    <Navbar />
    <div v-if="loading" class="flex justify-center align-center items-center h-screen">
        <h1 class="text-6xl text-gray-400 font-bold">Loading...</h1>
    </div>

    <div v-else-if="error"></div>

    <div v-else>
        <div v-for="game in games" :key="game.id">
            <h1>{{ game.name }}</h1>
        </div>
    </div>
</template>

<style scoped>

</style>