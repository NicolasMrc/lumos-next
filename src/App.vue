<template>
    <div>
        <div class="fixed bg-indigo-600 px-3 py-2 h-12 w-screen">
            <div class="flex text-white">
                <h1 class="text-xl">LUMOS</h1>
            </div>
        </div>
        <div id="side" class="fixed mt-12 bg-white w-56  border-gray-400">
            <sidebar></sidebar>
        </div>
        <div class="ml-56 pt-12">
            <div class="container mx-auto pt-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './components/sidebar'
import {mapActions} from 'vuex'
export default {
    name: 'App',
    components: { Sidebar },
    created() {
        this.bindAnimations()
        this.bindDevices()
    },
    methods:{
        ...mapActions(['bindAnimations', 'bindDevices']),
    }
}
</script>

<style>
html {
    background-color: #f4f4f4;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

#side {
    height: calc(100vh - 3rem);
}
</style>
