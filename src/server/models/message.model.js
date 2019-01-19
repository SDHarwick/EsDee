import bookshelf from '../config/bookshelf';

/**
 * Message model.
 */
class Message extends bookshelf.Model {
    get tableName() {
        return 'messages';
    }

    get hasTimestamps() {
        return true;
    }

}

export default Message;