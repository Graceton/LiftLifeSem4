const admin = require('../config/firebase-config');
const db = admin.firestore();
const usersCollection = db.collection('users');

exports.getUserProfile = async (req, res) => {
    try {
        const doc = await usersCollection.doc(req.params.id).get();
        if (!doc.exists) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUserProfile = async (req, res) => {
    try {
        const docRef = usersCollection.doc(req.params.id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ error: 'User not found' });
        }
        await docRef.update(req.body);
        const updatedDoc = await docRef.get();
        res.status(200).json({ id: updatedDoc.id, ...updatedDoc.data() });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserProgress = async (req, res) => {
    try {
        const progressDoc = await usersCollection.doc(req.params.id).collection('progress').doc('current').get();
        if (!progressDoc.exists) {
            return res.status(404).json({ error: 'User progress not found' });
        }
        res.status(200).json(progressDoc.data());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUserProgress = async (req, res) => {
    try {
        const progressRef = usersCollection.doc(req.params.id).collection('progress').doc('current');
        await progressRef.set(req.body, { merge: true });
        const updatedProgress = await progressRef.get();
        res.status(200).json(updatedProgress.data());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
