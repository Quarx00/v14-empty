@echo off
:loop
npm start
echo Bir hata olustu, yeniden baslatiliyor...
timeout /t 5
goto loop