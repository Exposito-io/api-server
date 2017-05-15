import * as fs from 'fs'


class FileStorage {
    fs
    filename: string

    constructor(opts) {
        if (!opts.filename) {
            throw new Error('Please set wallet filename');
        }
        this.filename = opts.filename;
        this.fs = opts.fs || fs;
    };

    getName() {
        return this.filename;
    };

    save(data, cb) {
        this.fs.writeFile(this.filename, JSON.stringify(data), cb);
    };

    load(cb) {
        this.fs.readFile(this.filename, 'utf8', function(err, data) {
            if (err) return cb(err);
            try {
            data = JSON.parse(data);
            } catch (e) {}
            return cb(null, data);
        });
    };
}


export default FileStorage