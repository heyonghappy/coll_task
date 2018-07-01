

module.exports = class ViewMiddleware{
    static render(app) {
        let renderer, readyPromise;

        function getHTML(context) {
            return new Promise((resolve, reject) => {
                const cb = (error, html) => {
                    if (error) return reject(error);
                    resolve(html);
                }
                
            })
        }
 
    }
}