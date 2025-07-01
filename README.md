# 📝 Todo List App

Une application web de gestion de tâches avec 3 statuts : À faire, En cours, Terminé.

## 🚀 Stack technique

- 🖥️ Frontend : React + Vite + Material UI
- 🛠️ Backend : Node.js + Express + Mongoose
- 🗄️ Base de données : MongoDB
- 🎨 UI : Oui

---

## 📦 Installation

### 🔧 Backend

```bash
cd backend
npm install
npm run dev
```

### 🌐 Frontend

```bash
cd frontend
npm install
npm run start
```

---

## 📂 Structure

```
backend/
│
├── models/        # Schéma Mongoose
├── controllers/   # Logique des routes
├── routes/        # Routes Express
├── utils/         # Fonctions utilitaires (ex: filterObject)
└── app.js       # Point d’entrée du serveur

frontend/
│
├── components/    # Composants réutilisables
├── pages/         # Page principale Todo
├── services/      # Axios config pour backend
└── App.js        # App React
```

---

## ✅ Fonctionnalités

- Ajouter / modifier / supprimer une tâche
- Changement de statut (todo → doing → done)
- Affichage par colonnes
- Interface responsive
- Mode clair / sombre

---


## 📄 Licence

Ce projet est open-source. Fais-en ce que tu veux 🤘
