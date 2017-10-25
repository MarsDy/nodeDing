var Tower = require('./tower');
var exp = module.exports;
var EventEmitter = require('event').EventEmitter;
var util = require('util');

var TowerAOI = function (config) {
    this.width = config.width;
    this.height = config.height;

    this.towerWidth = config.towerWidth;
    this.towerHeight = config.towerHeight;

    this.towers = {};

    this.minPos = {x: 0, y: 0, z: 0};
    if ('minPos' in config) {
        this.minPos.x = config.minPos.x;
        this.minPos.y = config.minPos.y;
        this.minPos.z = config.minPos.z;
    }

    this.rangeLimit = 5 || config.limit;

    this.init();
}


util.inherits(TowerAOI, EventEmitter);

var pro = TowerAOI.prototype;
//init towers
pro.init = function () {
    this.max = {
        x: Math.ceil(this.width / this.towerWidth) - 1,
        y: Math.ceil(this.height / this.towerHeight) - 1
    };

    for (var i = 0; i < this.max.x + 1; i++) {
        this.towers[i] = {};
        for (var j = 0; j < this.max.y + 1; j++) {

            this.towers[i][j] = Tower.create();
        }
    }
}

pro.clone = function (origin) {
    if (!origin) {
        return;
    }

    var obj = {};

    for (var f in origin) {
        if (origin.hasOwnProperty(f)) {
            obj[f] = origin[f];
        }
    }

    return obj;
}

pro.tranRealPos = function (pos) {
    if (!pos.hasOwnProperty("y")) {
        console.trace();
    }
    var newPos = this.clone(pos);
    newPos.x = pos.x - this.minPos.x;
    newPos.y = pos.y - this.minPos.y;
    return newPos;
}

pro.getIdsByRange = function (pos, range, types) {
    var RealPos = this.tranRealPos(pos);
    if (!this.checkPos(RealPos) || range < 0 || range > this.rangeLimit) {
        return [];
    }

    var result = {};
    var p = this.transPos(RealPos);
    var limit = getPosLimit(p, range, this.max);

    for (var i = limit.start.x; i < limit.end.x; i++) {
        for (var j = limit.start.y; j < limit.end.y; j++) {
            result = addMapByTypes(result, this.towers[i][j].getIdsByTypes(types), types);
        }
    }

    return result;
}

pro.getIdsByPos = function (pos, range) {
    var RealPos = this.tranRealPos(pos);

    if (!this.checkPos(RealPos) || range < 0) {
        return [];
    }

    var result = [];
    range = range > 5 ? 5 : range;

    var p = this.transPos(pos);
    var limit = getPosLimit(p, range, this.max);

    for (var i = limit.start.x; i <= limit.end.x; i++) {
        for (var j = limit.start.y; j <= limit.end.y; j++) {
            result = addMap(result, this.towers[i][j].getIds());
        }
    }


}

pro.addObject=function (obj, pos) {
    
}

pro.removeObject=function () {

}
pro.updateObject=function () {

}

pro.addWatcher=function () {

}
pro.removeWatcher=function () {

}

pro.getWatchers=function () {

}


/**
 * check if the pos is valid
 * @param pos
 * @returns {boolean} mytest result
 */
pro.checkPos = function (pos) {
    if (!pos) {
        return false;
    }
    if (pos.x < 0 || pos.y < 0 || pos.x >= this.width || pos.y >= this.height) {
        return false;
    }
    return true;
}

//tower pos
pro.transPos = function (pos) {
    return {
        x: Math.floor(pos.x / this.towerWidth),
        y: Math.floor(pos.y / this.towerHeight)
    }
}

pro.setInvalid=function () {

}
pro.setActivate=function () {

}

pro.updateWatcher=function () {

}
function getChangedTowers(p1, p2, r1, r2, towers, max) {

}

function getPosLimit(pos, range, max) {
    var result = {};
    var start = {}, end = {};

    if (pos.x - range < 0) {
        start.x = 0;
        end.x = 2 * range;
    } else if (pos.x + range > max.x) {
        start.x = max.x - 2 * range;
        end.x = max.x;
    } else {
        start.x = pos.x - range;
        end.x = pos.x + range;
    }

    if (pos.y - range < 0) {
        start.y = 0;
        end.y = 2 * range;
    } else if (pos.y + range > max.y) {
        start.y = max.y - 2 * range;
        end.y = max.y;
    } else {
        start.y = pos.y - range;
        end.y = pos.y + range;
    }

    start.x = start.x >= 0 ? start.x : 0;
    end.x = end.x <= max.x ? end.x : max.x;
    start.y = start.y >= 0 ? start.y : 0;
    end.y = end.y <= max.y ? end.y : max.y;

    return {start: start, end: end}
}

function addMap(arr, map) {
    for (var type in map) {
        for (var id in map[type]) {
            arr.push({type: type, id: id})
        }
    }
}

function addMapByTypes(result, map, types) {
    for (var i = 0; i < types.length; i++) {
        var type = types[i];
        if (!map[type]) {
            continue;
        }
        if (!result[type]) {
            result[type] = [];
        }

        for (var key in map[type]) {
            result[type].push(map[type][key]);
        }

    }
    return result;
}

function isInRect(pos, start, end) {

}

exp.getService = function (config) {
    return new TowerAOI(config);
}

