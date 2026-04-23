🌬️ TopClimat Platform

Dezvoltat de Cerempei Stefan — AC CTI

O platformă web modernă pentru conectarea clienților cu echipe specializate în montaj, mentenanță și servicii pentru aparate de aer condiționat, cu sistem de booking, plăți și management complet.

📋 Cuprins
Descriere
Funcționalități
Structura proiectului
Instalare și rulare
Cum funcționează
Roluri utilizatori
Sistem de plăți
Dashboard-uri
Principii tehnice
📖 Descriere

TopClimat este o aplicație web full-stack care facilitează interacțiunea dintre clienți și echipe de instalatori AC. Platforma permite:

găsirea rapidă a echipelor disponibile
trimiterea cererilor de lucru
alegerea echipei preferate
plata serviciilor (inclusiv în rate)

Platforma acționează ca un marketplace, obținând comision din fiecare tranzacție realizată.

✨ Funcționalități
🔍 Pentru clienți
Căutare echipe după locație și servicii
Vizualizare profil echipă (recenzii, galerie, rating)
Trimitere cerere de job
Selectare ofertă din partea echipelor
Urmărire status job (tracking)
Sistem de plăți online și în rate
Istoric comenzi și plăți
👷 Pentru echipe
Creare profil profesional
Primire cereri de job
Trimitere oferte către clienți
Gestionare joburi active și finalizate
Calendar și programări
Vizualizare venituri
Gestionare membri echipă
🛠️ Pentru admin
Management utilizatori
Management echipe
Monitorizare joburi
Control comisioane
Analytics și rapoarte
Administrare plăți
📁 Structura proiectului
frontend/
backend/
database/
Frontend (React)
components/
pages/
services/
hooks/
store (Redux)
routes/
Backend (API)
autentificare
management utilizatori
joburi și oferte
plăți
notificări
Database
users
teams
jobs
payments
reviews
🚀 Instalare și rulare
Cerințe
Node.js
npm / yarn
MySQL / PostgreSQL
Frontend
cd frontend
npm install
npm start
Backend
cd backend
npm install
npm run dev
🎯 Cum funcționează
Clientul creează o cerere de job
Echipele primesc notificare și trimit oferte
Clientul alege echipa dorită
Se stabilește programarea
Se efectuează lucrarea
Plata este procesată
Platforma reține comision (ex: 20%)
👥 Roluri utilizatori
👤 Client
creează cereri
alege echipe
plătește servicii
👷 Echipa
primește joburi
trimite oferte
execută lucrări
🛡️ Admin
controlează platforma
gestionează utilizatori și plăți
💳 Sistem de plăți
Plăți online securizate
Opțiune de plată în rate
Istoric tranzacții
Generare facturi
📊 Dashboard-uri
Client Dashboard
joburi active
istoric
favorite
plăți
Team Dashboard
cereri primite
joburi active
venituri
calendar
Admin Dashboard
analytics
utilizatori
comisioane
rapoarte
🔧 Principii tehnice
Frontend: React + Redux
Backend: Node.js / Express
Bază de date: SQL
Arhitectură modulară și scalabilă
API REST
WebSocket pentru notificări în timp real
Validare și securitate (auth, roles)
🌟 Obiectiv

Crearea unei platforme scalabile care să devină un punct central pentru servicii HVAC, conectând eficient cererea cu oferta și automatizând procesul de colaborare.

🔗 Link-uri utile

📦 Repository GitHub:
👉 https://github.com/StefanCerempei/topclimat
