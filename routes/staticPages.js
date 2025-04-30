const express = require('express');
const path = require('path');
const router = express.Router();

const baseDir = path.join(__dirname, '..', 'public');

// Helper function to create route for each HTML file
function createRoute(urlPath, filePath) {
    router.get(urlPath, (req, res) => {
        res.sendFile(path.join(baseDir, filePath));
    });
}

// Routes for HTML files in public directory and subdirectories
// Arm Exercises
createRoute('/arm-exercises/arm_exer_bar_dips', 'Arm Exercises/arm_exer_bar_dips.html');
createRoute('/arm-exercises/arm_exer_archer_pushup', 'Arm Exercises/arm_exer_archer_pushup.html');
createRoute('/arm-exercises/arm_exer_bicep_curl', 'Arm Exercises/arm_exer_bicep_curl.html');
createRoute('/arm-exercises/arm_exer_diamond_pushup', 'Arm Exercises/arm_exer_diamond_pushup.html');
createRoute('/arm-exercises/arm_exer_hammer_curl', 'Arm Exercises/arm_exer_hammer_curl.html');
createRoute('/arm-exercises/arm_exer_muscle_up', 'Arm Exercises/arm_exer_muscle_up.html');
createRoute('/arm-exercises/arm_exer_one_arm_pushup', 'Arm Exercises/arm_exer_one_arm_pushup.html');
createRoute('/arm-exercises/arm_exer_push_up', 'Arm Exercises/arm_exer_push_up.html');
createRoute('/arm-exercises/arm_exer_tricep_dip', 'Arm Exercises/arm_exer_tricep_dip.html');
createRoute('/arm-exercises/arm_exer_tricep_dips', 'Arm Exercises/arm_exer_tricep_dips.html');
createRoute('/arm-exercises/arm_exer', 'Arm Exercises/Arm_Exer.html');
createRoute('/arm-exercises/arm_exer2', 'Arm Exercises/Arm_Exer2.html');

// Calisthenics
createRoute('/calisthenics/calisthenics_exer_front_lever_tucks', 'Calisthenics/calisthenics_exer_front_lever_tucks.html');
createRoute('/calisthenics/calisthenics_exer_handstand_pushups', 'Calisthenics/calisthenics_exer_handstand_pushups.html');
createRoute('/calisthenics/calisthenics_exer_hanging_leg_raises', 'Calisthenics/calisthenics_exer_hanging_leg_raises.html');
createRoute('/calisthenics/calisthenics_exer_incline_pushups', 'Calisthenics/calisthenics_exer_incline_pushups.html');
createRoute('/calisthenics/calisthenics_exer_leg_raises', 'Calisthenics/calisthenics_exer_leg_raises.html');
createRoute('/calisthenics/calisthenics_exer_pike_pushups', 'Calisthenics/calisthenics_exer_pike_pushups.html');
createRoute('/calisthenics/calisthenics_exer_pistol_squats', 'Calisthenics/calisthenics_exer_pistol_squats.html');
createRoute('/calisthenics/calisthenics_exer_planche_leans', 'Calisthenics/calisthenics_exer_planche_leans.html');
createRoute('/calisthenics/calisthenics_exer_squats', 'Calisthenics/calisthenics_exer_squats.html');
createRoute('/calisthenics/calisthenics', 'Calisthenics/Calisthenics.html');
createRoute('/calisthenics/calisthenics2', 'Calisthenics/Calisthenics2.html');

// Core Exercises
createRoute('/core-exercises/core_exer_bicyclecrunch', 'Core Exercises/core_exer_bicyclecrunch.html');
createRoute('/core-exercises/core_exer_crunch', 'Core Exercises/core_exer_crunch.html');
createRoute('/core-exercises/core_exer_dragonflag', 'Core Exercises/core_exer_dragonflag.html');
createRoute('/core-exercises/core_exer_hanginglegraises', 'Core Exercises/core_exer_hanginglegraises.html');
createRoute('/core-exercises/core_exer_leglifts', 'Core Exercises/core_exer_Leglifts.html');
createRoute('/core-exercises/core_exer_planche', 'Core Exercises/core_exer_planche.html');
createRoute('/core-exercises/core_exer_plank', 'Core Exercises/core_exer_plank.html');
createRoute('/core-exercises/core_exer_pushupplank', 'Core Exercises/core_exer_pushupplank.html');
createRoute('/core-exercises/core_exer_toestobar', 'Core Exercises/core_exer_toestobar.html');
createRoute('/core-exercises/core_exer', 'Core Exercises/Core_Exer.html');
createRoute('/core-exercises/core_exer2', 'Core Exercises/Core_Exer2.html');

// Homepage
createRoute('/homepage/homepage', 'Homepage/Homepage.html');
createRoute('/homepage/homepage2', 'Homepage/Homepage2.html');
createRoute('/homepage/login', 'Homepage/Login.html');

// Leg Exercises
createRoute('/leg-exercises/leg_exer_bulgarian', 'Leg Exercises/leg_exer_bulgarian.html');
createRoute('/leg-exercises/leg_exer_calfraises', 'Leg Exercises/leg_exer_calfraises.html');
createRoute('/leg-exercises/leg_exer_jumpsquat', 'Leg Exercises/leg_exer_jumpsquat.html');
createRoute('/leg-exercises/leg_exer_lunges', 'Leg Exercises/leg_exer_lunges.html');
createRoute('/leg-exercises/leg_exer_nordiccurl', 'Leg Exercises/leg_exer_nordiccurl.html');
createRoute('/leg-exercises/leg_exer_pistol', 'Leg Exercises/leg_exer_pistol.html');
createRoute('/leg-exercises/leg_exer_squat', 'Leg Exercises/leg_exer_squat.html');
createRoute('/leg-exercises/leg_exer_stepups', 'Leg Exercises/leg_exer_stepups.html');
createRoute('/leg-exercises/leg_exer_wallsit', 'Leg Exercises/leg_exer_wallsit.html');
createRoute('/leg-exercises/leg_exer', 'Leg Exercises/Leg_Exer.html');
createRoute('/leg-exercises/leg_exer2', 'Leg Exercises/Leg_Exer2.html');

// NavBar
createRoute('/navbar/about', 'NavBar/About.html');
createRoute('/navbar/community', 'NavBar/community.html');
createRoute('/navbar/goals', 'NavBar/Goals.html');
createRoute('/navbar/profile', 'NavBar/Profile.html');
createRoute('/navbar/settings', 'NavBar/Settings.html');
createRoute('/navbar/suggestion', 'NavBar/Suggestion.html');
createRoute('/navbar/workouts', 'NavBar/Workouts.html');

// Pliyometric Exercises
createRoute('/pliyometric-exercises/plyo_exer', 'Pliyometric Exercises/Pliyo_Exer.html');
createRoute('/pliyometric-exercises/plyo_exer_basic_burpees', 'Pliyometric Exercises/plyo_exer_basic_burpees.html');
createRoute('/pliyometric-exercises/plyo_exer_burpees_with_tuck_jump', 'Pliyometric Exercises/plyo_exer_burpees_with_tuck_jump.html');
createRoute('/pliyometric-exercises/plyo_exer_depth_jumps', 'Pliyometric Exercises/plyo_exer_depth_jumps.html');
createRoute('/pliyometric-exercises/plyo_exer_explosive_lunge_jumps', 'Pliyometric Exercises/plyo_exer_explosive_lunge_jumps.html');
createRoute('/pliyometric-exercises/plyo_exer_jump_squats', 'Pliyometric Exercises/plyo_exer_jump_squats.html');
createRoute('/pliyometric-exercises/plyo_exer_lateral_bounds', 'Pliyometric Exercises/plyo_exer_lateral_bounds.html');
createRoute('/pliyometric-exercises/plyo_exer_lateralhops', 'Pliyometric Exercises/plyo_exer_lateralhops.html');
createRoute('/pliyometric-exercises/plyo_exer_plyometric_pushups', 'Pliyometric Exercises/plyo_exer_plyometric_pushups.html');
createRoute('/pliyometric-exercises/plyo_exer_single_leg_box_jumps', 'Pliyometric Exercises/plyo_exer_single_leg_box_jumps.html');

// Yoga Exercises
createRoute('/yoga-exercises/yoga_exer_bridge', 'Yoga Exercises/yoga_exer_bridge.html');
createRoute('/yoga-exercises/yoga_exer_catcow', 'Yoga Exercises/yoga_exer_catcow.html');
createRoute('/yoga-exercises/yoga_exer_child', 'Yoga Exercises/yoga_exer_child.html');
createRoute('/yoga-exercises/yoga_exer_crow', 'Yoga Exercises/yoga_exer_crow.html');
createRoute('/yoga-exercises/yoga_exer_headstand', 'Yoga Exercises/yoga_exer_headstand.html');
createRoute('/yoga-exercises/yoga_exer_kingpigeon', 'Yoga Exercises/yoga_exer_kingpigeon.html');
createRoute('/yoga-exercises/yoga_exer_mountain', 'Yoga Exercises/yoga_exer_mountain.html');
createRoute('/yoga-exercises/yoga_exer_tree', 'Yoga Exercises/yoga_exer_tree.html');
createRoute('/yoga-exercises/yoga_exer_warrior', 'Yoga Exercises/yoga_exer_warrior.html');
createRoute('/yoga-exercises/yoga', 'Yoga Exercises/Yoga.html');
createRoute('/yoga-exercises/yoga2', 'Yoga Exercises/Yoga2.html');

module.exports = router;
