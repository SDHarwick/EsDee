import bookshelf from '../config/bookshelf';
import Site from './site.model.js';

/**
 * User model.
 */
class User extends bookshelf.Model {
    get tableName() {
        return 'users';
    }

    // sites: function() {
    // 	return this.hasMany(Site);
    // }

    get hasTimestamps() {
        return true;
    }

    verifyPassword(password) {
        return this.get('password') === password;
    }
}

export default User;