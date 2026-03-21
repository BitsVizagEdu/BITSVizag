@echo off
REM Copy woman professional icon to static folder
REM Source: Copilot cache, Destination: static folder

setlocal enabledelayedexpansion

set "SOURCE=C:\Users\rangu\AppData\Roaming\Code\User\globalStorage\github.copilot-chat\copilot-cli-images\1774092643985-6ae2a8ia.png"
set "DEST=C:\Users\rangu\BITSVizag\static\woman-professional-icon.png"

if exist "!SOURCE!" (
    copy "!SOURCE!" "!DEST!" /Y
    if !errorlevel! equ 0 (
        echo.
        echo ✓ Successfully copied woman-professional-icon.png to static folder
        echo Source: !SOURCE!
        echo Destination: !DEST!
    ) else (
        echo ✗ Failed to copy file
    )
) else (
    echo ✗ Source file not found: !SOURCE!
)

pause
