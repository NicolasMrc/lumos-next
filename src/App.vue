<template>
    <div id="inspire">
        <sidebar></sidebar>
        <div class="mt-6 container mx-auto">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Sidebar from './components/sidebar'
export default {
    name: 'App',
    components: { Sidebar },
    data: () => ({ drawer: null }),
    created() {
        this.bindAnimations()
        this.bindDevices()
    },
    methods: {
        ...mapActions(['bindAnimations', 'bindDevices']),
    },
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
