# Discord.js v14 Temel Altyapı

Bu repo, Discord.js'in v14 sürümü için temel bir altyapı içermektedir. Projede ECMAScript 6 (ES6) kullanılmıştır.

## 🚀 Başlangıç

Botun yapılandırmasını `config.js` dosyası üzerinden gerçekleştirebilirsiniz. Botun tokenini `.env` dosyasından ayarlayın.


### 💻 Windows için Kurulum

1. **Node.js Kurulumu**:
   - Eğer bilgisayarınızda Node.js kurulu değilse, [Node.js resmi web sitesi](https://nodejs.org/) üzerinden LTS sürümünü indirin ve kurun.
   - Kurulum tamamlandıktan sonra komut istemcisini (Powershell) açın ve `node -v` ile Node.js'in başarılı bir şekilde kurulup kurulmadığını kontrol edin.

2. **Projenin Kurulumu**:
   - Altyapıyı başlatmak için `start.bat` dosyasını çalıştırın.
   - Proje durdurulduğunda otomatik olarak yeniden başlatmak isterseniz `keepAlive.bat` dosyasını çalıştırın.

### 📱 Android için Kurulum

1. Termux uygulamasını [Google Play Store](https://play.google.com/store/apps/details?id=com.termux) üzerinden indirin ve yükleyin.
2. Uygulamayı açtıktan sonra aşağıdaki komutları sırasıyla girin:
    ```
   pkg update -y && pkg upgrade -y
   ```
    ```
   pkg install git nodejs -y
   ```
    ```
   git clone https://github.com/alper-dev/REPO_NAME
   ```
    ```
   cd v14-basic
   ```
    ```
   npm install
   ```
    ```
   npm start
   ```
