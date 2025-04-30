const admin = require('../config/firebase-config');

exports.verifyToken = async (req, res) => {
    const idToken = req.body.idToken;
    if (!idToken) {
        return res.status(400).json({ error: 'No ID token provided' });
    }
    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        return res.status(200).json({ user: decodedToken });
    } catch (error) {
        return res.status(401).json({ error: 'Invalid ID token' });
    }
};
