const { Pool } = require('pg');
 
class SongsService {
    constructor() {
        this._pool = new Pool();
    }
  
    async getSongs(userId) {
        const query = {
            text: 'SELECT * FROM songs WHERE id = $1',
            values: [userId],
        };
        const result = await this._pool.query(query);
        return result.rows;
    }
}
 
module.exports = SongsService;