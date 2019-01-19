import Joi from 'joi';

export default {
    storeUser: {
        body: {
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            credits: Joi.number().integer()
        }
    },

    storeSite: {
        body: {
            user_id: Joi.number().integer().required(),
            date_listed: Joi.date().required(),
            date_started: Joi.date(),
            income: Joi.number().integer(),
            visitors: Joi.number().integer(),
            page_views: Joi.number().integer(),
            asking_price: Joi.number().integer().required(),
            currency_type: Joi.string(),
            site_title: Joi.string().required(),
            contact_email: Joi.string().email().required(),
            website_url: Joi.string().required(),
            website_description: Joi.string(),
            approved_status: Joi.boolean(),
            category: Joi.string()
        }
    },

    storeMessage: {
        body: {
            sender_id: Joi.number().integer().required(),
            recipient_id: Joi.number().integer().required(),
            site_id: Joi.number().integer().required(),
            subject: Joi.string(),
            body: Joi.string(),
            viewed_status: Joi.boolean()
        }
    },

    updateSite: {
        body: {
            user_id: Joi.number().integer(),
            date_listed: Joi.date(),
            date_started: Joi.date(),
            income: Joi.number().integer(),
            visitors: Joi.number().integer(),
            page_views: Joi.number().integer(),
            asking_price: Joi.number().integer(),
            currency_type: Joi.string(),
            site_title: Joi.string(),
            contact_email: Joi.string().email(),
            website_url: Joi.string(),
            website_description: Joi.string(),
            approved_status: Joi.boolean(),
            category: Joi.string()
        }
    },

    updateUser: {
        body: {
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            credits: Joi.number().integer()
        },
        params: {
            userId: Joi.string().hex().required()
        }
    },

    updateMessage: {
        body: {
            sender_id: Joi.number().integer().required(),
            recipient_id: Joi.number().integer().required(),
            subject: Joi.string(),
            body: Joi.string(),
            viewed_status: Joi.boolean()
        }
    },

    login: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    }
};