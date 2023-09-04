import { Client, Collection } from 'discord.js';
import { error, terminateWithError, info, loadEvents, loadCommands } from './functions.js';
import config from './config.js';
import 'dotenv/config';

console.clear();

const client = new Client({ intents: 3243773 });

// Atamalar
client.commands = new Collection();
client.config = config;

loadEvents(client); // Olayları yükle
loadCommands(client); // Komutları yükle

client.login(process.env.TOKEN).catch(err => {
    if (err.message === 'An invalid token was provided.') {
        error('Geçersiz token, ".env" dosyasındaki "TOKEN" değişkenini kontrol edin.');
        info('Token: ', process.env.TOKEN || 'Bulunamadı');
    } else {
        terminateWithError('Giriş yapılırken bir hata oluştu:', err);
    };
});