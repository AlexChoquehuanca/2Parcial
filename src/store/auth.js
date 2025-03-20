import config from "../config";
import axios from "axios";
import router from '../Routes';

export default {
    namespaced: true,
    state: {
        isFetching: false,
        errorMessage: '',
        user: JSON.parse(localStorage.getItem('user')) || null,
    },
    mutations: {
        LOGIN_REQUEST(state) {
            state.isFetching = true;
            state.errorMessage = '';
        },
        LOGIN_SUCCESS(state, user) {
            state.isFetching = false;
            state.errorMessage = '';
            state.user = user;
        },
        LOGIN_FAILURE(state, errorMessage) {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        LOGOUT(state) {
            state.user = null;
        }
    },
    actions: {
        async loginUser({ commit }, creds) {
            commit('LOGIN_REQUEST');
            try {
                const res = await axios.post(`${config.baseURLApi}/login.php`, creds);
                
                if (res.data.success) { 
                    let user = {
                        email: creds.email, 
                        nombre: res.data.nombre, 
                        rol: res.data.rol 
                    };
                    localStorage.setItem('user', JSON.stringify(user)); 
                    commit('LOGIN_SUCCESS', user);
                    router.push('/app/main/visits');
                } else {
                    commit('LOGIN_FAILURE', 'Credenciales incorrectas');
                }
            } catch (err) {
                if (err.response && err.response.data && err.response.data.error) {
                    commit('LOGIN_FAILURE', err.response.data.error);
                } else {
                    commit('LOGIN_FAILURE', 'Error en el servidor');
                }
            }
        },
        logoutUser({ commit }) {
            localStorage.removeItem('user');
            commit('LOGOUT');
            router.push('/login');
        }
    },
    getters: {
        isAuthenticated: state => !!state.user,
        currentUser: state => state.user,
    }
};