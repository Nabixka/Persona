import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Game from "../components/Game/Game.vue";
import GameDetail from "../components/Game/GameDetail.vue";
import Persona from "../components/Persona/Persona.vue";
import Error from "../components/Error/Error.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/game",
        name: "game",
        component: Game
    },
    {
        path: "/game/:id",
        name: "gameDetail",
        component: GameDetail
    },
    {
        path: "/persona",
        name: "persona",
        component: Persona
    },
    {
        path: "/error",
        name: "error",
        component: Error
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router