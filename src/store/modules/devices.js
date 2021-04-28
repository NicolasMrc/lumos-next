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
        // eslint-disable-next-line no-empty-pattern
        playAnimation: firestoreAction(({}, { deviceId, animationId }) => {
            const animationRef = db.collection('animations').doc(animationId)
            return db
                .collection('devices')
                .doc(deviceId)
                .update({ animation: animationRef })
        }),
        // eslint-disable-next-line no-empty-pattern
        selectColor: firestoreAction(({}, { deviceId, color }) => {
            return db
                .collection('devices')
                .doc(deviceId)
                .update({ color: color })
        }),
        // eslint-disable-next-line no-empty-pattern
        selectGradient: firestoreAction(({}, { deviceId, gradient }) => {
            return db
                .collection('devices')
                .doc(deviceId)
                .update({ gradient: gradient })
        }),
    },
    getters: {
        devices: state =>
            state.devices.map(device => {
                return { ...device, id: device.id }
            }),
    },
}
