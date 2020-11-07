<template>
    <div class="flex flex-col" v-if="device">
        <h1 class="text-2xl">{{ device.name }}</h1>
        <div>
            <p>{{device.on}}</p>
            <p>{{device.intensity}}</p>
            <p>{{device.state}}</p>
            <p>{{device.color}}</p>
            <p>{{device.animation}}</p>
            <p>{{device.gradient}}</p>
        </div>
        <div>
            <animation-menu></animation-menu>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters}  from 'vuex'
    import AnimationMenu from '../components/AnimationMenu'

export default {
    name: 'Device',
    components: {AnimationMenu},
    mounted() {
        if (!this.device) {
            this.bindDevices()
        }
    },
    destroyed() {
        this.unbindDevices()
    },
    computed: {
        ...mapGetters(['animations']),
        device() {
            return this.$store.getters.devices.find(d => d.id === this.$route.params.id)
        },
    },
    methods: {
        ...mapActions(['bindDevices', 'unbindDevices']),
    },
}
</script>
