export default {

    showUserSearchInput({commit}) {
        commit('setVisibility', { componentName: 'userSearchInput', value: true });
    },

    closeUserSearchInput({commit}) {
        commit('setVisibility', { componentName: 'userSearchInput', value: false });
    },

    doSearch({dispatch, getters, state}, searchString) {
        const users = [ ...getters.users ];

        const regexp = new RegExp(searchString.trim(), 'i');
        const filtered = users.filter((item) => regexp.test(item.email));

        dispatch('paginateUsers', filtered)
            .then(() => {
                const txt = `Показано ${filtered.length}.`
                dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.5}, { root: true });
            });
    },
}
