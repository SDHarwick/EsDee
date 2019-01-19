import bookshelf from '../config/bookshelf';

/**
 * Site model.
 */
class Site extends bookshelf.Model {
    get tableName() {
        return 'sites';
    }

    get hasTimestamps() {
        return true;
    }

}

export default Site;