const appendHttp = (url) => {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        if(!url.match('www.')) {
            url = "https://" + url;
        } else {
            url = "https://" + url;
        }
    } else  if (/^(?:f|ht)tps?\:\/\//.test(url)) {
        if(url.match('https://www.')) {
            return url;
        } else {
            host = url.replace('https://', '');
            url = `https://${host}`;
        }
    }

    return url;
};

module.exports = appendHttp;