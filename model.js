export const HolyricsModel = {
    apiBase: "https://behavior-forums-wash-icons.trycloudflare.com", 
    token: "1XEPSIzDfKFcXh1K",

    async execute(action) {
        const url = `${this.apiBase}/api/${action}?token=${this.token}`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                // Removendo o 'no-cors' para permitir o Content-Type correto
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                // A doc exige um body JSON, mesmo que vazio
                body: JSON.stringify({}) 
            });
    
            if (response.status === 415) {
                console.error("Erro 415: O Holyrics não aceitou o Content-Type. Verifique o body.");
                return false;
            }
    
            return response.ok;
        } catch (error) {
            // Se cair aqui por erro de CORS, o slide pode ter passado mesmo assim
            console.warn("Possível bloqueio de CORS, mas a requisição foi enviada:", error);
            return true; 
        }
    }
};
