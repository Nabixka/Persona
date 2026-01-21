import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Game from "../components/Game/Game.vue";
import GameDetail from "../components/Game/GameDetail.vue";
import Persona from "../components/Persona/Persona.vue";

const routes = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    { 
        path: '/game',
        name: "name",
        component: Game 
    },
    { 
        path: '/game',
        name: "gameDetail",
        component: GameDetail 
    },
    { 
        path: '/persona', 
        name: "persona",
        component: Persona 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router