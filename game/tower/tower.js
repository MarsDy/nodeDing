var EventEmitter = require('events').EventEmitter;
var exp = module.exports;

var Tower = function () {
    this.ids = {};
    this.watchers = {};
    this.typeMap = {};

    this.size = 0;
}

var pro = Tower.prototype;

pro.add = function (obj) {
    var id = obj.id;
    var type = obj.type;

    if (!!obj.type) {
        this.ids[type] = this.ids[type] || {};
        if (!!this.ids[type][id] && this.ids[type][id] === id) {
            return false;
        }
        if (this.typeMap[type][id] && this.typeMap[type][id] === id) {
            delete this.ids[type][id];
            return false;
        }

        this.ids[type][id] = id;
        this.typeMap[type][id] = {id: id, type: type};
        this.size++;
        return true;
    } else {
        return false;
    }
}

pro.addWatcher = function (watcher) {
    var type = watcher.type;
    var id = watcher.id;

    if (!!type) {
        this.watchers[type] = this.watchers[type] || {};
        this.watchers[type][id] = id;
    }

}

pro.removeWatcher = function (watcher) {
    var type = watcher.type;
    var id = watcher.id;

    if (!!type && !!this.watchers[type]) {
        delete this.watchers[type][id];
    }
}

pro.setInvalid = function (watcher, pos, range) {
    var type = watcher.type;
    var id = watcher.id;

    if (!!type) {
        this.watchers[type] = this.watchers[type] || {};
        this.watchers[type][id] = 0;
    }
}

pro.setActivate = function (watcher, pos, range) {
    var type = watcher.type;
    var id = watcher.id;

    if (!!type) {
        this.watchers[type] = this.watchers[type] || {};
        this.watchers[type][id] = id;
    }
}

pro.getWatchers = function (types) {
    var result = {};

    if (!!types && types.length > 0) {
        for (var i = 0; i < types.length; i++) {
            var type = types[i];
            if (!!this.watchers[type]) {
                result[type] = this.watchers[type];
            }
        }
    }

    return result;
}

pro.remove = function (obj) {
    var id = obj.id;

    var type = obj.type;
    if (!!type) {
        if (!!this.ids[type] && !!this.ids[type][id]) {
            delete this.ids[type][id];
            this.size--;
        }
        if (!!this.typeMap[type]) {
            delete this.typeMap[type][id];
        }
    }
}

pro.getIds = function () {
    return this.ids;
}

pro.getIdsByTypes = function (types) {
    var result = {}

    for (var i = 0; i < types.length; i++) {
        var type = types[i];
        if (!!this.typeMap[type]) {
            result[type] = this.typeMap[type];
        }
    }

    return result;
}


exp.create = function () {
    return new Tower();
}