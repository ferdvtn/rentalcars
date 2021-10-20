export const state = () => ({
    cart: [],
    categoryId: null,
    list: []
});

export const mutations = {
    setCategoryId(state, payload) {
        state.categoryId = payload.id
    },
    initCart(state, payload) {
        state.cart = payload.cart
    },
    addToCart(state, payload) {
        const newItem = {
            car: payload.item
        }

        state.cart.push(newItem)

        window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeFromCart(state, payload) {
        state.cart.splice(payload.idx, 1)

        window.localStorage.setItem('cart', JSON.stringify(state.cart))
    }
};