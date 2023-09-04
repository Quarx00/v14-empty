import { SlashCommandBuilder } from 'discord.js';

const data = new SlashCommandBuilder()
.setName('ping')
.setDescription('Botun gecikme süresini görüntüle');


const execute = (client, interaction) => {

    interaction.reply(`🏓 Pong! ${client.ws.ping} ms`);
    
};

export default { data, execute };