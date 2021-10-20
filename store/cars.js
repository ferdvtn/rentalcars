export const state = () => ({
    categoryId: null,
    list: []
});

export const mutations = {
    setCategoryId(state, payload) {
        state.categoryId = payload.id
    }
};