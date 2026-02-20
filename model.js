export const HolyricsModel = {
    apiBase: "https://needier-makenzie-unseethed.ngrok-free.dev", 
    token: "1XEPSIzDfKFcXh1K",

    async execute(action) {
        const url = `${this.apiBase}/api/${action}?token=${this.token}`;
        
        try {
            const response = await fetch(url, {
                method: 'POST', // O Holyrics exige POST
                headers: {
                    'Content-Type': 'text/plain', 
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify({})
            });

            return response.ok;
        } catch (error) {
            console.warn("Requisição enviada, mas sem resposta legível. Cheque o slide.");
            return true; 
        }
    }
};
