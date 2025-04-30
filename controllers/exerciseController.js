const admin = require('../config/firebase-config');
const db = admin.firestore();
const exercisesCollection = db.collection('exercises');

exports.createExercise = async (req, res) => {
    try {
        const data = req.body;
        const docRef = await exercisesCollection.add(data);
        res.status(201).json({ id: docRef.id, ...data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllExercises = async (req, res) => {
    try {
        const snapshot = await exercisesCollection.get();
        const exercises = [];
        snapshot.forEach(doc => {
            exercises.push({ id: doc.id, ...doc.data() });
        });
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getExerciseById = async (req, res) => {
    try {
        const doc = await exercisesCollection.doc(req.params.id).get();
        if (!doc.exists) {
            return res.status(404).json({ error: 'Exercise not found' });
        }
        res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateExercise = async (req, res) => {
    try {
        const docRef = exercisesCollection.doc(req.params.id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ error: 'Exercise not found' });
        }
        await docRef.update(req.body);
        const updatedDoc = await docRef.get();
        res.status(200).json({ id: updatedDoc.id, ...updatedDoc.data() });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteExercise = async (req, res) => {
    try {
        const docRef = exercisesCollection.doc(req.params.id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ error: 'Exercise not found' });
        }
        await docRef.delete();
        res.status(200).json({ message: 'Exercise deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
