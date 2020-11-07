<template>
    <tr>
        <td class="px-6 py-4 whitespace-no-wrap">
            <div class="flex items-center">
                <div>
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ device.name }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                        {{ device.type }}
                    </div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap">
            <div class="flex items-center text-sm leading-5 text-gray-900">
                <div class="w-6 h-6 inline-block rounded-full" :style="{ backgroundColor: device.color }"></div>
                <span class="ml-3 text-gray-600">
                    {{ device.color }}
                </span>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap">
            <div class="flex items-center text-sm leading-5 text-gray-900">
                <div class="w-6 h-6 inline-block rounded-full" :style="{ backgroundColor: device.color }"></div>
                <span class="ml-3 text-gray-600">
                    {{ device.animation }}
                </span>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap">
            <div class="flex items-center text-sm leading-5 text-gray-500">
                <div class="text-sm leading-5">
                    {{ device.intensity }}
                </div>
                <span class="opacity-50">%</span>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap">
            <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                :class="{
                    'bg-green-100 text-green-800': device.status === 'active',
                    'bg-red-100 text-red-800': device.status === 'inactive',
                }"
            >
                {{ device.status }}
            </span>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
            <button type="button" class="text-indigo-600 hover:text-indigo-900" @click="select">Edit</button>
        </td>
    </tr>
</template>

<script>

export default {
    name: 'DeviceItem',
    props: {
        device: {
            type: Object,
            required: true,
        },
    },
    methods:{
        select(){
            this.$router.push({name: 'device', params: {id: this.device.id}})
        }
    }
}
</script>
