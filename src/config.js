const hostApi = "http://localhost"; // Siempre apunta a localhost
const portApi = ""; // El puerto 80 es el predeterminado para HTTP, por lo que lo dejamos vacío
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`; // Apunta a la carpeta 'api' de tu backend PHP
const redirectUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000/light-blue-vue" : "https://demo.flatlogic.com/light-blue-vue/";

const colors = {
  blue: '#3979f6',
  green: '#47822B',
  orange: '#da9734',
  red: '#c93c3c',
  purple: '#a700ae',
  dark: '#040620',
  teal: '#4179CF',
  pink: '#e671b8',
  gray: '#d6dee5',
  default: '#474D84',
  textColor: '#b4b5bf',
  gridLineColor: '#040620'
};

const app = {
  themeColors: [
    ['dark', "#333964"],
    ['light', "#0A0417"],
    ['sea', "#4A4657"],
    ['sky', "#3A3847"],
    ['rain', "#3846AA"],
    ['middle', "#edf8ff"],
  ],
}

export default {
  colors: {
    ...colors,
    white: "#fff"
  },
  app,
  hostApi,
  portApi,
  baseURLApi,
  redirectUrl,
  remote: "http://localhost/api", // Ajustado para reflejar baseURLApi
  isBackend: true,
};