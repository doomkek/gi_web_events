@echo off

set NODE_PATH=C:\Users\username\scoop\apps\nodejs\current\node.exe
set INSTALL_DIR=C:\Projects\Genshin_animation
set TASK_NAME=genshin_wallpaper


echo $TaskName = "%TASK_NAME%">"%TEMP%\install_task.ps1"
echo $NodePath = "%NODE_PATH%">>"%TEMP%\install_task.ps1"
echo $ScriptPath = "%INSTALL_DIR%\server.js">>"%TEMP%\install_task.ps1"
echo $WorkingDirectory = "%INSTALL_DIR%">>"%TEMP%\install_task.ps1"

echo $Action = New-ScheduledTaskAction -Execute "$NodePath" -Argument "$ScriptPath" -WorkingDirectory "$WorkingDirectory">>"%TEMP%\install_task.ps1"
echo $Trigger = New-ScheduledTaskTrigger -AtLogOn>>"%TEMP%\install_task.ps1"
echo Register-ScheduledTask -TaskName "$TaskName" -Action $Action -Trigger $Trigger -RunLevel Highest -User "System" -Force>>"%TEMP%\install_task.ps1"

powershell -ExecutionPolicy Bypass -File "%TEMP%\install_task.ps1"

timeout /t 3 /nobreak > NUL
schtasks /run /tn "%TASK_NAME%"

del "%TEMP%\install_task.ps1"