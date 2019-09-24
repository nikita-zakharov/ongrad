export default {
    increment(store, value) {
        store.commit('SET_COUNTER', value)
    }
}