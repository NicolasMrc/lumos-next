<template>
    <div class="bg-white rounded p-4">
        <div class="flex justify-center">
            <div
                class="inline-block w-1 h-2"
                v-for="(led, ledIndex) in currentStep"
                :key="`${ledIndex}_object`"
                :style="{ backgroundColor: led.color }"
            ></div>
        </div>
        <div class="mt-4 text-gray-700">
            <span>{{ animation.name }}</span>
        </div>
        <div class="mt-4 flex justify-end">
            <button type="button" @click="preview" class="w-1/2 px-3 w-full text-center bg-indigo-500 text-white rounded">
                preview
            </button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations} from 'vuex'

export default {
    name: 'Animation',
    props: {
        animation: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapGetters(['animationPreview']),
        currentStep() {
            return this.play ? this.animation.steps[this.currentIndex] : this.animation.steps[0]
        },
        play() {
            return this.animationPreview === this.animation.id
        },
    },
    data() {
        return {
            currentIndex: 0,
        }
    },
    methods: {
        ...mapMutations(['playPreview']),
        nextStep() {
            this.currentIndex = (this.currentIndex += 1) % 60
            if (this.play) {
                setTimeout(this.nextStep, 50)
            }
        },
        preview() {
            this.playPreview(this.animation.id)
            setTimeout(this.nextStep, 50)
        },
    },
}
</script>
