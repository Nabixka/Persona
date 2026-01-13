<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const API_URL = import.meta.env.VITE_API_URL

    const game = ref({})
    const loading = ref(true)
    const error = ref(null)
    const route = useRoute()

    const getGame = async () => {
        try{
            const id = route.params.id
            const res = await fetch(`${API_URL}/game/${id}`)
            const list = await res.json()

            game.value = list.data
        }
        catch(err){
            error.value = err.message
        }
    }

    onMounted(() => {
        getGame()
    })
</script>

<template>
    <div>
        <router-link to="/">Back</router-link>
        <h1>{{ game.name }}</h1>
    </div>
</template>

<style>

</style>