export const HolyricsModel = {
    apiBase: "http://localhost:8091", 
    token: "UZZUVA0LSsgfhLqw",

    async execute(action) {
        const url = `${this.apiBase}/api/${action}?token=${this.token}`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // A documentação pede um corpo JSON, mesmo que vazio
                body: JSON.stringify({})
            });

            return response.ok;
        } catch (error) {
            console.error("Erro na comunicação:", error);
            return false;
        }
    }
};