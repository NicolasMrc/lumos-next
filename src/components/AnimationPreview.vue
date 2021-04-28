<template>
    <div>
        <div
            class="inline-block w-1 h-2"
            v-for="(led, ledIndex) in steps[0]"
            :key="`${ledIndex}_object`"
            :style="{ backgroundColor: led.color }"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'AnimationPreview',
    props: {
        steps: {
            type: Array,
            required: true,
        },
    },
}
</script>
