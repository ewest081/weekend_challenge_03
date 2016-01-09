/**
 * Created by lizwestberg on 1/9/16.
 */

var express = require('express');
var router = express.Router();
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/walking_skeleton_test');

var Cat = mongoose.model('Cat', {name:String});

router.post('/addCat', function(request, response, next){
    var kitty = new Cat({name: request.body.name});
    kitty.save(function(err){
        if(err) console.log('meow %s', err);
        response.send(kitty.toJSON());
        next();
    });
});

router.get('/cats', function(request, response, next){
    return Cat.find({}).exec(function(err, cats){
        if(err) throw new Error(err);
        response.send(JSON.stringify(cats));
        next();
    });
});

router.get('/', function(request, response, next){
    response.sendFile(path.join(__dirname, '../public/views/index.html'))
});

module.exports = router;