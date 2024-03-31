@echo off
python --version

echo Running on http://localhost:8000/play/offline.html
python -m http.server
