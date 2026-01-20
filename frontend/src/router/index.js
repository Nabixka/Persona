import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Game from "../components/Game/Game.vue";
import GameDetail from "../components/Game/GameDetail.vue";
import Persona from "../components/Persona/Persona.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/game', component: Game },
    { path: '/game/:id', component: GameDetail },
    { path: '/persona', component: Persona },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router