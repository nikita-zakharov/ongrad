export default {
    'SET_COUNTER'(state, value) {
        state.counter += value
    },
    'SET_CLIENT'(state, client) {
        state.clients.push(client)
    }
}