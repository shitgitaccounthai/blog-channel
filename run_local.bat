@echo off
rem Simple script to serve the site locally
rem Requires Python installed and added to PATH
cd /d "%~dp0"
python -m http.server 8000
pause
