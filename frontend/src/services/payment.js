// frontend/src/services/payment.service.js
import apiClient from './api';
import { ENDPOINTS } from '../config/api.config';

export const paymentService = {
    createPaymentIntent: async (amount, currency = 'ron') => {
        return await apiClient.post(ENDPOINTS.PAYMENT_INTENT, { amount, currency });
    },

    confirmPayment: async (paymentIntentId, paymentMethodId) => {
        return await apiClient.post(ENDPOINTS.PAYMENT_CONFIRM, { paymentIntentId, paymentMethodId });
    },

    getInstallmentPlans: async (amount) => {
        return await apiClient.get(`${ENDPOINTS.INSTALLMENT_PLANS}?amount=${amount}`);
    },

    createInstallmentPayment: async (jobId, planId) => {
        return await apiClient.post(ENDPOINTS.PAYMENTS, { jobId, planId });
    },

    getPaymentHistory: async () => {
        return await apiClient.get(ENDPOINTS.PAYMENTS);
    },

    getPaymentDetails: async (paymentId) => {
        return await apiClient.get(`${ENDPOINTS.PAYMENTS}/${paymentId}`);
    },

    generateInvoice: async (paymentId) => {
        return await apiClient.get(`${ENDPOINTS.PAYMENTS}/${paymentId}/invoice`);
    },
};