import { HolyricsModel } from './model.js';

const App = {
    init() {
        this.bindEvents();
        console.log("HolyControl Iniciado com API Oficial");
    },

    bindEvents() {
        // Mapeamento dos botões para os comandos da documentação
        document.getElementById('next-btn').addEventListener('click', () => this.trigger('ActionNext'));
        document.getElementById('prev-btn').addEventListener('click', () => this.trigger('ActionPrevious'));
        document.getElementById('clear-btn').addEventListener('click', () => this.trigger('CloseCurrentPresentation'));
        
        // Extras: Black Screen (F10) e Wallpaper (F8)
        document.getElementById('black-btn')?.addEventListener('click', () => this.trigger('ToggleF10'));
    },

    async trigger(command) {
        const statusEl = document.getElementById('connection-status');
        statusEl.innerText = "ENVIANDO...";
        statusEl.className = "sending";

        const success = await HolyricsModel.execute(command);

        if (success) {
            statusEl.innerText = "ONLINE";
            statusEl.className = "online";
        } else {
            statusEl.innerText = "ERRO DE CONEXÃO";
            statusEl.className = "error";
        }
    }
};

App.init();