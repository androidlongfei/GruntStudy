/**
 * Created by longfei on 16/3/23.
 */

Storage.prototype.put = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.get= function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}