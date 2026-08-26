@echo off
title City King Spices Website
echo ========================================================
echo        Starting City King Spices Website
echo            (Sah Food Industries, Siliguri)
echo ========================================================
echo.

cd /d "%~dp0"

if not exist node_modules (
    echo [INFO] Installing required packages for the first time...
    call npm install --no-audit --no-fund
    if %errorlevel% neq 0 (
        echo [ERROR] Installation failed. Please ensure Node.js is installed.
        pause
        exit /b %errorlevel%
    )
)

echo.
echo [INFO] Launching Development Server...
echo [INFO] Opening website in your default browser...
echo.

start "" "http://localhost:8080"
npm run dev

pause
