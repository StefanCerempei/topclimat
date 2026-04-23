// frontend/src/utils/constants.js
export const USER_ROLES = {
    CLIENT: 'client',
    TEAM: 'team',
    ADMIN: 'admin',
};

export const JOB_STATUS = {
    PENDING: 'pending',
    ACCEPTED: 'accepted',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
};

export const PAYMENT_STATUS = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed',
    REFUNDED: 'refunded',
};

export const INSTALLMENT_PLANS = [
    { id: 1, name: '3 rate fără dobândă', months: 3, interestRate: 0 },
    { id: 2, name: '6 rate cu dobândă 0%', months: 6, interestRate: 0 },
    { id: 3, name: '12 rate', months: 12, interestRate: 9.9 },
];

export const COMMISSION_RATE = 20; // 20%