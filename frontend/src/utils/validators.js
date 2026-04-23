// frontend/src/utils/validators.js
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
};

export const validatePassword = (password) => {
    return password.length >= 6;
};

export const validateJobRequest = (data) => {
    const errors = {};
    if (!data.acType) errors.acType = 'Tipul AC este obligatoriu';
    if (!data.location) errors.location = 'Locația este obligatorie';
    if (!data.budget || data.budget < 100) errors.budget = 'Bugetul minim este 100 RON';
    return errors;
};