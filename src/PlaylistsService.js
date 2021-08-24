const { Pool } = require('pg');
 
class playlistsService {
    constructor() {
        this._pool = new Pool();
    }
  
    async getPlaylists(playlistId) {
        const query = {
            text: `SELECT ss.id, ss.title, ss.performer FROM playlists_detail psd 
                INNER JOIN songs ss ON psd.song_id = ss.id
                WHERE psd.playlist_id = $1`,
            values: [playlistId]
        };

        const result = await this._pool.query(query);

        return result.rows;  
    }
}
 
module.exports = playlistsService;