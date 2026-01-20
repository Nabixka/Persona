<script setup>
    import Navbar from '../Navbar/Navbar.vue';
    import { ref, onMounted} from 'vue'
    import { useRouter } from 'vue-router'

    const API_URL = import.meta.env.VITE_API_URL
    const router = useRouter()
    
    const games = ref([])
    const loading = ref(true)
    const error = ref(null)

    const getGame = async () => {
        try{
            const res = await fetch(`${API_URL}/game`)
            const json = await res.json()

            games.value = json.data
        }
        catch(err){
            error.value = err.message
        }
        finally{
            loading.value = false
        }
    }

    const navigate = async (id) => {
        router.push(`/game/${id}`)
    }

    onMounted(() => {
        getGame()
    })


</script>

<template>
    <div class="">
        <div class="pt-5">
            <Navbar />
        </div>

        <div v-if="loading" class="flex justify-center h-screen items-center">
            <p class="text-gray-500 text-4xl">Loading</p>
        </div>

        <div v-else-if="error" class="flex justify-center h-screen items-center">
            <p class="text-gray-500 text-4xl">{{ error }}</p>
        </div>

        <div v-else class="pt-5 flex justify-center pb-10">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div @click="navigate(game.id)" v-for="game in games" class="w-45 md:w-50 border border-gray-400 rounded-md flex flex-col overflow-hidden">
                    <img :src="game.image" class="h-75">
                    <div class="bg-linear-to-b from-red-500 to-red-200">
                        <p class="font-bold h-15 text-white justify-center flex align-center items-center">{{ game.name }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped></style>