import { firestoreAction } from 'vuexfire'
import { db } from '../../firebase'

export default {
    state: {
        animations: [],
        animationPreview: null,
    },
    mutations: {
        playPreview(state, animationId) {
            state.animationPreview = animationId
        },
    },
    actions: {
        bindAnimations: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('animations', db.collection('animations'))
        }),
        unbindAnimations: firestoreAction(({ unbindFirestoreRef }) => {
            unbindFirestoreRef('animations')
        }),
        addAnimation: firestoreAction((context, animation) => {
            const newAnimation = { ...animation }
            newAnimation.steps = JSON.stringify(newAnimation.steps)
            return db.collection('animations').add(newAnimation)
        }),
    },
    getters: {
        animationPreview: state => state.animationPreview,
        animations: state =>
            state.animations.map(a => {
                const animation = { ...a, id: a.id }
                animation.steps = JSON.parse(animation.steps)
                return animation
            }),
    },
}
