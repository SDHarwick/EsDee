import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import Message from '../models/message.model';

/**
 * Find all the messages
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Message.forge()
        .fetchAll()
        .then(message => res.json({
                error: false,
                data: message.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/*
Not yet in use- will be needed given that there could be an insane number of
messages in the db and we obvious don't want to be fetching all of them to 
then filter down the messages on the client side- it is a huge waste of 
resources
*/
export function findAllByUserId(req, res) {
    Message.forge({recipient_id: req.params.recipient_id})
        .fetchAll()
        .then(message => res.json({
                error: false,
                data: message.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 *  Find message by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    Message.forge({id: req.params.id})
        .fetch()
        .then(message => {
            if (!message) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true, data: {}
                });
            }
            else {
                res.json({
                    error: false,
                    data: message.toJSON()
                });
            }
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Store new message
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
    const {
        sender_id, 
        recipient_id,
        site_id,
        subject, 
        body
    } = req.body;

    Message.forge({
        sender_id,
        recipient_id,
        site_id,
        subject, 
        body
    }, {hasTimestamps: true}).save()
        .then(message => res.json({
                success: true,
                data: message.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Update message by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
    Message.forge({id: req.params.id})
        .fetch({require: true})
        .then(message => message.save({
                sender_id: req.body.sender_id || message.get('sender_id'),
                recipient_id: req.body.recipient_id || message.get('recipient_id'),
                subject: req.body.subject || message.get('subject'),
                body: req.body.body || message.get('body'),
                viewed_status: req.body.viewed_status || message.get('viewed_status')
            })
                .then(() => res.json({
                        error: false,
                        data: message.toJSON()
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
 * Destroy message by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
    Message.forge({id: req.params.id})
        .fetch({require: true})
        .then(message => message.destroy()
            .then(() => res.json({
                    error: false,
                    data: {message: 'Message deleted successfully.'}
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