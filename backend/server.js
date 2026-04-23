const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Fișierul pentru stocarea datelor
const DB_FILE = path.join(__dirname, 'database.json');

// Inițializează baza de date dacă nu există
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2));
}

// Funcții pentru citire/scriere date
const readData = () => {
    const data = fs.readFileSync(DB_FILE);
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// Ruta principală
app.get('/', (req, res) => {
    res.json({ message: 'AC Marketplace API is running', status: 'online' });
});

// Înregistrare Client
app.post('/api/auth/register/client', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, address, city } = req.body;
        const data = readData();

        // Verifică dacă există deja
        const userExists = data.users.find(u => u.email === email);
        if (userExists) {
            return res.status(400).json({ message: 'Utilizatorul există deja' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creează utilizator nou
        const newUser = {
            id: Date.now().toString(),
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
            address,
            city,
            role: 'client',
            createdAt: new Date().toISOString()
        };

        data.users.push(newUser);
        writeData(data);

        // Generează token
        const token = jwt.sign({ id: newUser.id, email: newUser.email }, 'secret_key_2024', { expiresIn: '7d' });

        res.status(201).json({
            success: true,
            token,
            user: {
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                phone: newUser.phone,
                role: newUser.role
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Eroare server', error: error.message });
    }
});

// Înregistrare Echipă (Instalator)
app.post('/api/auth/register/team', async (req, res) => {
    try {
        const {
            companyName,
            registrationNumber,
            email,
            phone,
            password,
            leaderName,
            yearsOfExperience,
            services,
            city,
            address,
            description,
        } = req.body;

        const data = readData();

        // Verifică dacă există deja
        const userExists = data.users.find(u => u.email === email);
        if (userExists) {
            return res.status(400).json({ message: 'Utilizatorul există deja' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creează utilizator nou
        const newUser = {
            id: Date.now().toString(),
            companyName,
            registrationNumber,
            email,
            phone,
            password: hashedPassword,
            leaderName,
            yearsOfExperience: parseInt(yearsOfExperience),
            services,
            city,
            address,
            description,
            role: 'team',
            rating: 0,
            completedJobs: 0,
            createdAt: new Date().toISOString()
        };

        data.users.push(newUser);
        writeData(data);

        // Generează token
        const token = jwt.sign({ id: newUser.id, email: newUser.email }, 'secret_key_2024', { expiresIn: '7d' });

        res.status(201).json({
            success: true,
            token,
            user: {
                id: newUser.id,
                companyName: newUser.companyName,
                email: newUser.email,
                phone: newUser.phone,
                role: newUser.role
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Eroare server', error: error.message });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = readData();

        // Caută utilizatorul
        const user = data.users.find(u => u.email === email);
        if (!user) {
            return res.status(401).json({ message: 'Email sau parolă incorecte' });
        }

        // Verifică parola
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: 'Email sau parolă incorecte' });
        }

        // Generează token
        const token = jwt.sign({ id: user.id, email: user.email }, 'secret_key_2024', { expiresIn: '7d' });

        res.json({
            success: true,
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                ...(user.role === 'client' && {
                    firstName: user.firstName,
                    lastName: user.lastName
                }),
                ...(user.role === 'team' && {
                    companyName: user.companyName
                })
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Eroare server' });
    }
});

// Get current user (protejat)
app.get('/api/auth/me', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        const decoded = jwt.verify(token, 'secret_key_2024');
        const data = readData();
        const user = data.users.find(u => u.id === decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const { password, ...userWithoutPassword } = user;
        res.json({ success: true, user: userWithoutPassword });
    } catch (error) {
        res.status(401).json({ message: 'Not authorized' });
    }
});

// Get all users (doar pentru testare)
app.get('/api/users/all', (req, res) => {
    const data = readData();
    const users = data.users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
    res.json({ success: true, count: users.length, users });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`\n✅ Serverul rulează cu succes!`);
    console.log(`📍 API disponibil la: http://localhost:${PORT}`);
    console.log(`📝 Datele se salvează în: ${DB_FILE}\n`);
});