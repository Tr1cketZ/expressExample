const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Configurar o middleware de proxy
app.use('/api', createProxyMiddleware({
    target: 'http://exemplo.com', // Alvo para onde as requisições serão redirecionadas
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Remove o prefixo '/api' da requisição
    },
}));

app.listen(PORT, () => {
    console.log(`Servidor proxy rodando em http://localhost:${PORT}`);
});
