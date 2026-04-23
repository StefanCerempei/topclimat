const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    phone: String,
    role: String,
    firstName: String,
    lastName: String,
    city: String,
});

const User = mongoose.model('User', userSchema);

const createTestUser = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        const testUser = new User({
            firstName: 'Stefan',
            lastName: 'Test',
            email: 'stefan@test.ro',
            password: await bcrypt.hash('123456', 10),
            phone: '0722123456',
            city: 'Bucuresti',
            role: 'client'
        });

        await testUser.save();
        console.log('✅ Test user created successfully!');
        console.log('Email: stefan@test.ro');
        console.log('Password: 123456');

        await mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error.message);
    }
};

createTestUser();