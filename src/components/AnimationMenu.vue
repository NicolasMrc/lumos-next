<template>
    <div class="grid grid-cols-6 gap-3">
        <div :class="{'bg-green-300': selected === animation.id}" @click="$emit('play', animation)" class="hover:bg-green-200 cursor-pointer h-24 border-gray-200 border rounded pa-3" v-for="(animation, index) in animations" :key="`${index}_animation`">
            {{ animation.name }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AnimationMenu',
    props: {
        selected: {
            type: String,
            required: false
        }
    },
    computed: {
        ...mapGetters(['animations']),
    },
}
</script>

<style scoped></style>
