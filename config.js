export default {
    Voice_Channel: {
        Join: false,
        Channel_ID: '',
        Self_Mute: false,
        Self_Deaf: false
    },
    Status: 'online',
    Activity: {
        Name: '❤ alper.dev',
        Type: 'Playing'
    }
};


/**
 * Bot yapılandırma nesnesi.
 * @typedef {Object} BotConfig
 */
/**
 * Bot için ses kanalı yapılandırma ayarları.
 * @typedef {Object} VoiceChannelConfig
 * @property {boolean} [Join=false] - Bot'un başlangıçta bir ses kanalına katılıp katılmayacağını belirtir.
 * @property {string} [Channel_ID=''] - Bot'un katılması gereken ses kanalının ID'si ('Join': true, ise).
 * @property {boolean} [Self_Mute=false] - Bot'un kanala katıldığında kendini sessize alıp almayacağını belirtir.
 * @property {boolean} [Self_Deaf=false] - Bot'un kanala katıldığında kendini duyumsuz (sağır) yapıp yapmayacağını belirtir.
 */
/**
 * Bot aktivite ayarları.
 * @typedef {Object} ActivityConfig
 * @property {string} Name - Bot'un aktivitesinin adı.
 * @property {string} [Type='Playing'] - Aktivite türü (örn. 'Playing', 'Listening' vs.).
 */
/**
 * Bot için ana yapılandırma nesnesi.
 * @type {BotConfig}
 * @property {VoiceChannelConfig} Voice_Channel - Bot için ses kanalı ayarları.
 * @property {string} [Status='online'] - Bot'un durumu (örn. 'online', 'idle' vs.).
 * @property {ActivityConfig} Activity - Bot'un aktivite ayarları.
 */