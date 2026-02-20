export const HolyricsModel = {
    apiBase: "https://answer-handles-discussions-wooden.trycloudflare.com", 
    token: "1XEPSIzDfKFcXh1K",

    async execute(action) {
        const url = `${this.apiBase}/api/${action}?token=${this.token}`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({}) // O Holyrics exige o corpo JSON
            });

            return response.ok;
        } catch (error) {
            // Em rede móvel, o CORS pode gerar um erro no console, 
            // mas o comando costuma chegar ao PC.
            console.warn("Requisição enviada. Verifique o Holyrics.");
            return true; 
        }
    }
};
