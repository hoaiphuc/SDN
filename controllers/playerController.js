const Players = require('../models/player')

let clubData= [ 
    { "id" : "1", "name" : "Arsenal" },
    { "id" : "2", "name" : "Manchester United" },
    { "id" : "3", "name" : "Chelsea" },
    { "id" : "4", "name" : "Manchester City" },
    { "id" : "5", "name" : "PSG" },
    {"id"  : "6", "name" : "Inter Milan"},
    {"id"  : "7", "name" : "Real Madrid"},
    {"id"  : "8", "name" : "Barcelona"}
]


class playerController{
    index(req, res, next){
      Players.find({})
    .then((players) =>{
        res.render('players',{
            title: 'The list of Players',
            players: players,
            clubList: clubData
        });
    }).catch(next);
    }
    create(req, res, next){
        const player = new Players(req.body);
        player.save()
        .then(() => res.redirect('/players'))
        .catch(error =>{error});
    }
    formEdit(req, res, next) {
        res.render('/editPlayers');
    }
}
module.exports = new playerController;
