const express = require('express');
const path = require('path');
const admin = require('./config/firebase-config');
const serviceAccount = require('./config/serviceAccountKey.json');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to verify Firebase ID Tokens
async function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
    const idToken = authHeader.split('Bearer ')[1];
    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
}

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./routes/auth');
const exerciseRoutes = require('./routes/exercises');
const userRoutes = require('./routes/users');
const staticPagesRoutes = require('./routes/staticPages');

app.use('/api/auth', authRoutes);
app.use('/api/exercises', authenticateToken, exerciseRoutes);
app.use('/api/users', authenticateToken, userRoutes);
app.use('/', staticPagesRoutes);

// Basic route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Test route to check Firebase Admin connection
app.get('/firebase-test', async (req, res) => {
    try {
        const projectId = serviceAccount.project_id; // Ensure this is correctly accessed
        res.send(`Firebase Admin is connected! Project ID: ${projectId}`);
    } catch (error) {
        res.status(500).send('Firebase Admin connection failed: ' + error.message);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
