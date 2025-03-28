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
                payload.$toasted.success("Te has registrado exitosamente");
                router.push('/login.php');
            } else {
                dispatch('requestRegister');
                const creds = payload.creds;
                try {
                    await axios.post(`${config.baseURLApi}/register.php`, creds);
                    dispatch('receiveRegister');
                    payload.$toasted.success("Te has registrado exitosamente");
                    router.push('/login.php');
                } catch (err) {
                    console.error("Error del backend:", err.response.data);
                    dispatch('registerError', err.response.data.error);
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