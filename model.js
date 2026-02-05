export const HolyricsModel = {
    apiBase: "https://proposal-dialog-marketplace-province.trycloudflare.com", 
    token: "1XEPSIzDfKFcXh1K",

    async execute(action) {
        // Para evitar o bloqueio de CORS em POST, vamos usar o token na URL 
        // conforme a documentação que você enviou permitia no modo local.
        const url = `${this.apiBase}/api/${action}?token=${this.token}`;
        
        try {
            await fetch(url, {
                method: 'POST',
                mode: 'no-cors', // Isso ignora o erro de CORS do navegador
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });

            // Como usamos no-cors, o fetch não retorna se deu certo ou não.
            // Para o MVP, vamos assumir que enviou.
            return true; 
        } catch (error) {
            console.error("Erro de rede:", error);
            return false;
        }
    }
};
