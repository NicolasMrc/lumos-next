<template>
    <div>
        <div>
            <h1 class="text-white text-2xl pa-4 text-center font-black">LUMOS</h1>
        </div>
        <router-link :to="{ name: 'devices' }">
            <div class="text-white p-3 mx-3 border-b border-indigo-600">
                Devices
            </div>
        </router-link>
        <router-link :to="{ name: 'animations' }">
            <div class="text-white p-3 mx-3 border-b border-indigo-600">
                Animations
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
}
</script>

<style scoped></style>
