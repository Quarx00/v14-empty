import { readdir, readdirSync } from 'fs';
import Config from './config.js';
import { joinVoiceChannel } from '@discordjs/voice';
import { REST, Routes } from 'discord.js';


export function print() {
    console.log.apply(console, arguments);
};
export function terminateWithError(msg, err) {
    console.log('\x1b[31m❌  ' + msg + '\x1b[0m');
    console.log(err);
    process.exit(1);
};
export function errorWithMessage(msg, err) {
    console.log('\x1b[31m❌  ' + msg + '\x1b[0m');
    console.log(err);
};
export function error(...args) {
    console.log('\x1b[31m❌  ' + args.join('') + '\x1b[0m');
};
export function success(...args) {
    console.log('\x1b[32m✅  ' + args.join('') + '\x1b[0m');
};
export function info(...args) {
    console.log('\x1b[94mℹ️  ' + args.join('') + '\x1b[0m');
};


export async function loadEvents(client) {
    readdirSync('./events').forEach(async file => {
        const event = await import(`./events/${file}`).then(e => e.default);
        if (!event.name || typeof event.name !== 'string') {
            terminateWithError(`"events/${file}" dosyasındaki "name" özelliği geçersiz.`, '');
        };
        if (!event.execute || typeof event.execute !== 'function') {
            terminateWithError(`"events/${file}" dosyasındaki "execute" özelliği geçersiz.`, '');
        };
        client.on(event.name, (...args) => event.execute(client, ...args));
    });
};


export async function loadCommands(client) {
    readdirSync('./commands').forEach(async file => {
        const command = await import(`./commands/${file}`).then(c => c.default);
        if (!command.data || typeof command.data !== 'object') {
            terminateWithError(`"commands/${file}" dosyasındaki "data" özelliği geçersiz.`, '');
        };
        if (!command.execute || typeof command.execute !== 'function') {
            terminateWithError(`"commands/${file}" dosyasındaki "execute" özelliği geçersiz.`, '');
        };
        client.commands.set(command.data.name, command);
    });
};


export function validateStatus(s) {
    return ['online', 'idle', 'dnd', 'invisible'].includes(s) ? s : 'online';
};
export function validateActivityName(name) {
    return name && typeof name === 'string' && name.trim() !== '' ? name : '❤ alper.dev';
};
export function validateActivityType(type) {
    return ['Playing', 'Watching', 'Listening'].includes(type) ? type : 'Playing';
};


export function joinChannel(client) {
    let channel = client.channels.cache.get(Config.Voice_Channel_ID);
    if (!channel) return error('Ses kanalı bulunamadı, konfigürasyon dosyasındaki "Voice_Channel:Channel_ID" özelliğini kontrol edin.');
    try {
        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guildId,
            adapterCreator: channel.guild.voiceAdapterCreator
        });
        success(`"${channel.name}" isimli ses kanalına bağlanıldı!`);
    } catch (e) { errorWithMessage('Ses kanalına bağlanırken hata oluştu:', e); };
};


export async function registerCommands(client) {
    const commands = client.commands.map(c => c.data);
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    try {
        info('Eğik çizgi (/) komutları yeniden yükleniyor.');
        await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
        success('Eğik çizgi (/) komutları başarıyla kaydedildi.');
    } catch (err) { errorWithMessage('Komutlar kaydedilirken bir hata oluştu:', err); };
};