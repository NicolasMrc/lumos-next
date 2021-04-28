<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white rounded pa-3 shadow-xs flex flex-col" v-if="device">
            <h1 class="text-2xl">{{ device.name }}</h1>
            <div class="mt-4 pt-4 border-t border-gray-200">
                <p>Allumé : {{ device.on }}</p>
                <p>Intensité : {{ device.intensity }}%</p>
                <p>Color : {{ device.color }}</p>
                <p>Animation : {{ device.animation.name }}</p>
            </div>
            <div>
                <div
                    @click="pickColor(color.hex)"
                    v-for="(color, index) in colors"
                    :key="`${index}_object`"
                    :class="color.tailwind + ' ' + (device.color === color.hex ? color.selected : color.unselected)"
                    class="border-4 cursor-pointer mr-1 inline-block h-8 w-8 rounded-lg shadow-sm"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import chroma from 'chroma-js'

export default {
    name: 'Device',
    mounted() {
        if (!this.device) {
            this.bindDevices()
        }
    },
    data() {
        return {
            colors: [
                {
                    selected: 'border-blue-200',
                    unselected: 'border-blue-400',
                    tailwind: 'bg-blue-400',
                    hex: '0x3B82F6',
                },
                {
                    selected: 'border-indigo-200',
                    unselected: 'border-indigo-400',
                    tailwind: ' bg-indigo-400',
                    hex: '0x6366F1',
                },
                {
                    selected: 'border-yellow-200',
                    unselected: 'border-yellow-400',
                    tailwind: 'bg-yellow-400',
                    hex: '0xEAB308',
                },
                {
                    selected: 'border-red-200',
                    unselected: 'border-red-400',
                    tailwind: ' bg-red-400',
                    hex: '0xEF4444',
                },
                {
                    selected: 'border-pink-200',
                    unselected: 'border-pink-400',
                    tailwind: ' bg-pink-400',
                    hex: '0xEC4899',
                },
                {
                    selected: 'border-green-200',
                    unselected: 'border-green-400',
                    tailwind: ' bg-green-400',
                    hex: '0x22C55E',
                },
            ],
        }
    },
    created(){
        const gradient = chroma.scale(['yellow', '008ae5']);
        console.log(gradient(0.1))
        console.log(gradient(0.2))
        console.log(gradient(0.8))
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
        ...mapActions(['bindDevices', 'unbindDevices', 'playAnimation', 'selectColor']),
        play(animation) {
            this.playAnimation({ deviceId: this.device.id, animationId: animation.id })
        },
        pickColor(hex) {
            if (hex !== this.device.color) {
                this.selectColor({ deviceId: this.device.id, color: hex })
            }
        },
    },
}
</script>
