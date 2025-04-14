const protocol = 'http:';
const hostname = window.location.hostname;
const host = `${hostname}:5000`;

const CONFIG = {
  apiBaseUrlAnalyzeText: `${protocol}//${host}`,
  apiTimeout: 15000,
};
console.log(CONFIG.apiBaseUrlAnalyzeText);
export { CONFIG };
