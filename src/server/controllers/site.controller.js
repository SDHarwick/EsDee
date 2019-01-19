import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import Site from '../models/site.model';

/**
 * Find all the sites
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Site.forge()
        .fetchAll()
        .then(site => res.json({
                error: false,
                data: site.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 *  Find site by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    Site.forge({id: req.params.id})
        .fetch()
        .then(site => {
            if (!site) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true, data: {}
                });
            }
            else {
                res.json({
                    error: false,
                    data: site.toJSON()
                });
            }
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Store new site
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
    const {
        date_listed, 
        asking_price, 
        site_title, 
        contact_email, 
        website_url, 
        user_id, 
        income, 
        visitors, 
        page_views, 
        website_description, 
        category, 
        date_started, 
        currency_type 
    } = req.body;

    Site.forge({
        date_listed, 
        asking_price, 
        site_title, 
        contact_email, 
        website_url, 
        user_id, 
        income, 
        visitors, 
        page_views, 
        website_description, 
        category, 
        date_started, 
        currency_type
    }, {hasTimestamps: true}).save()
        .then(site => res.json({
                success: true,
                data: site.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Update site by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
    Site.forge({id: req.params.id})
        .fetch({require: true})
        .then(site => site.save({
                date_listed: req.body.date_listed || site.get('date_listed'),
                asking_price: req.body.asking_price || site.get('asking_price'),
                site_title: req.body.site_title || site.get('site_title'),
                contact_email: req.body.contact_email || site.get('contact_email'),
                website_url: req.body.website_url || site.get('website_url'),
                user_id: req.body.user_id || site.get('user_id'),
                income: req.body.income || site.get('income'),
                visitors: req.body.visitors || site.get('visitors'),
                page_views: req.body.page_views || site.get('page_views'),
                website_description: req.body.website_description || site.get('website_description'),
                category: req.body.category || site.get('category'),
                date_started: req.body.date_started || site.get('date_started'),
                currency_type: req.body.currency_type || site.get('currency_type'),
                approved_status:req.body.approved_status || site.get('approved_status')
            })
                .then(() => res.json({
                        error: false,
                        data: site.toJSON()
                    })
                )
                .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                        error: true,
                        data: {message: err.message}
                    })
                )
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Destroy site by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
    Site.forge({id: req.params.id})
        .fetch({require: true})
        .then(site => site.destroy()
            .then(() => res.json({
                    error: false,
                    data: {message: 'Site deleted successfully.'}
                })
            )
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: true,
                    data: {message: err.message}
                })
            )
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}