export default {
    name: 'interactionCreate',
    execute: async(client, interaction) => {
        
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return interaction.reply({ content: 'Komut bulunamadı!', ephemeral: true });

        try {
            await command.execute(client, interaction);
        } catch(error) {
            console.log(error);
            await interaction.reply({ content: 'Komut çalıştırılırken bir hata oluştu!', ephemeral: true });
        };
    }
};