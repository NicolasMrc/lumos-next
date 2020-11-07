<template>
    <div>
        <p v-for="(animation, index) in animations" :key="`${index}_animation`">{{animation.name}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AnimationMenu',
    computed: {
        ...mapGetters(['animations']),
    },
}
</script>

<style scoped></style>
