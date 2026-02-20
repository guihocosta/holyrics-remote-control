export const HolyricsModel = {
    apiBase: "https://needier-makenzie-unseethed.ngrok-free.dev", 
    token: "1XEPSIzDfKFcXh1K",

    async execute(action) {
        const url = `${this.apiBase}/api/${action}?token=${this.token}`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true' 
                },
                body: JSON.stringify({})
            });

            return response.ok;
        } catch (error) {
            console.error("Erro de conexão. O Ngrok está aberto no PC?", error);
            return false;
        }
    }
};
