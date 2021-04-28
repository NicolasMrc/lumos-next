<template>
    <div>
        <div>
            <h1 class="text-2xl">Vos appareils</h1>
        </div>
        <div class="mt-5 flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr class="bg-white">
                                    <th
                                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Animation
                                    </th>
                                    <th
                                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Intensity
                                    </th>
                                    <th
                                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50"></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <device-item
                                    v-for="(device, index) in devices"
                                    :device="device"
                                    :key="`${index}_device`"
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DeviceItem from '../components/DeviceItem'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Devices',
    components: { DeviceItem },
    computed: {
        ...mapGetters(['devices']),
    },
    methods: {
        ...mapActions(['bindDevices', 'unbindDevices', 'bindAnimations']),
    },
    mounted() {
        this.bindDevices()
        this.bindAnimations()
    },
}
</script>
