export default {

    state: {
        typeinValidationRequired: false,
        alarmingInputs: {}, // ключ - имя input'а, значение - true, в компоненте для показа alarm стил
        typeinErrors: {}, // ключ - имя input'а, значение - массив ошибок
    },

    getters: {
        isAlarmingInput: (state) => (key) => state.alarmingInputs[key],
        typeinValidationRequired: (state) => state.typeinValidationRequired,
        typeinErrors: (state) => (key) =>  {
            const errors = state.typeinErrors;
            if (key) {
                if (errors.hasOwnProperty(key)) {
                    return errors[key][0];
                }
            }
            return '';
        },
    },

    mutations: {
        enableTypeinValidation: (state) => {
            state.typeinValidationRequired = true;
        },
        disableTypeinValidation: (state) => {
            state.typeinValidationRequired = false;
        },

        setTypeinErrors: (state, errors) => {
            state.typeinErrors = { ...errors };
        },
        resetTypeinErrors: (state) => {
            state.typeinErrors = {};
        },

        setAlarmingInputs: (state, validationErrors) => {
            state.alarmingInputs = {};
            Object.keys(validationErrors).forEach((key) => {
                state.alarmingInputs[key] = true;
            });
        },
        resetAlarmingInputs: (state) => {
            state.alarmingInputs = {};
        },
    },

    actions: {
        resetTypeinErrors({ commit }) {
            commit('resetTypeinErrors');
        },
    },
};
