import config from "../config";
import axios from "axios";
import router from '../Routes';

export default {
    namespaced: true,
    state: {
        isFetching: false,
        errorMessage: '',
    },
    mutations: {
        REGISTER_REQUEST(state) {
            state.isFetching = true;
        },
        REGISTER_SUCCESS(state) {
            state.isFetching = false;
            state.errorMessage = '';
        },
        REGISTER_FAILURE(state, payload) {
            state.isFetching = false;
            state.errorMessage = payload;
        },
    },
    actions: {
        async registerUser({ dispatch }, payload) {
            console.log("Datos enviados:", payload.creds);

            if (!config.isBackend) {
                router.push('/login');
            } else {
                dispatch('requestRegister');
                const creds = payload.creds;

                try {
                    const response = await axios.post(`${config.baseURLApi}/register.php`, creds, {
                        headers: { "Content-Type": "application/json" }
                    });

                    console.log("Respuesta del servidor:", response.data);

                    // Verifica que la respuesta tenga 'success' antes de continuar
                    if (response.data && response.data.message === 'Usuario registrado con éxito') {
                        dispatch('receiveRegister');
                        router.push('login');
                    } else {
                        throw new Error(response.data.error || "Error inesperado en el servidor");
                    }
                } catch (err) {
                    console.error("Error del backend:", err.response && err.response.data ? err.response.data : err.message);
                }
            }
        },
        requestRegister({ commit }) {
            commit('REGISTER_REQUEST');
        },
        receiveRegister({ commit }) {
            commit('REGISTER_SUCCESS');
        },
        registerError({ commit }, payload) {
            commit('REGISTER_FAILURE', payload);
        },
    },
};
