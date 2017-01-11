var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var models = require("./models");

for(var m in models){ 
    mongoose.model(m,new Schema(models[m]));//这里是最终return的结果
}
module.exports = { 
    getModel: function(type){ 
        return _getModel(type);
    }
};

var _getModel = function(type){ 
    return mongoose.model(type);
};