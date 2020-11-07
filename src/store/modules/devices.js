import { firestoreAction } from 'vuexfire'
import { db } from '../../firebase'

export default {
    state: {
        devices: [],
    },
    actions: {
        bindDevices: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('devices', db.collection('devices'))
        }),
        unbindDevices: firestoreAction(({ unbindFirestoreRef }) => {
            unbindFirestoreRef('devices')
        }),
    },
    getters: {
        devices: state =>
            state.devices.map(device => {
                return { ...device, id: device.id }
            }),
    },
}
