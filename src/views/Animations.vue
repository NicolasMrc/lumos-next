<template>
    <div class="grid grid-cols-4 gap-3">
        <animation v-for="(animation, index) in animations" :key="`${index}_animation`" :animation="animation"></animation>
    </div>
</template>

<script>
import Animation from '../components/Animation'
import {mapGetters} from 'vuex'

export default {
    name: 'Animations',
    components: { Animation },
    computed:{
        ...mapGetters(['animations']),
    },
}
</script>
