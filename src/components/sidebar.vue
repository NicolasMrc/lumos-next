<template>
    <div>
        <router-link :to="{ name: 'devices' }">
            <div class="p-3 mx-3 border-b border-gray-200">
                Devices
            </div>
        </router-link>
        <router-link :to="{ name: 'animations' }">
            <div class="p-3 mx-3 border-b border-gray-200">
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
