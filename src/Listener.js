class Listener {
    constructor(songsService, mailSender) {
        this._songsService = songsService;
        this._mailSender = mailSender;
    
        this.listen = this.listen.bind(this);
    }
   
    async listen(message) {
        try {
            const { userId, targetEmail } = JSON.parse(message.content.toString());
            
            const songs = await this._songsService.getSongs(userId);
            const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(songs));
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Listener;