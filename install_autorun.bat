@echo off
set NODE_PATH=C:\Program Files\nodejs\node.exe
set PROJECT_DIR=C:\Projects\Genshin_animation
set TASK_NAME=genshin_wallpaper

schtasks /create /tn "%TASK_NAME%" /tr "cmd /c cd /d %PROJECT_DIR% && npm start" /sc onstart /ru "System" /rl HIGHEST /f
schtasks /run /tn "%TASK_NAME%"

timeout /t 5 /nobreak > NUL
