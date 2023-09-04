import Config from '../config.js';
import { ActivityType } from 'discord.js';
import { success, validateActivityName, validateStatus, validateActivityType, joinChannel, registerCommands } from '../functions.js';

export default {
    name: 'ready',
    execute: client => {
        
        success(`${client.user.tag} olarak giriş yapıldı!`);

        const status = validateStatus(Config.Status);
        const name = validateActivityName(Config.Activity.Name);
        const type = validateActivityType(Config.Activity.Type);

        client.user.setStatus(status); // Botun durumunu ayarla
        client.user.setActivity(name, { type: ActivityType[type] }); // Botun etkinliğini ayarla

        if (Config.Join_Voice_Channel) joinChannel(client); // Ses kanalına katıl

        registerCommands(client); // Komutları kaydet
        
    }
};