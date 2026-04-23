const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['client', 'team', 'admin'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    // Client specific fields
    firstName: String,
    lastName: String,
    address: String,
    city: String,

    // Team specific fields
    companyName: String,
    registrationNumber: String,
    leaderName: String,
    yearsOfExperience: Number,
    services: [String],
    description: String,
    rating: {
        type: Number,
        default: 0,
    },
    completedJobs: {
        type: Number,
        default: 0,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);