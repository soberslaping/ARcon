const axios = require('axios')

exports.homeRoutes = (req, res) => {
    axios.get("http://localhost:3000/api/medias") //to get api request ,means database se data le rha h
        .then(function (response) {
            res.render('index', { paths: response.data })
        })
        .catch(err => {
            res.send(err);
        })

}

exports.viewObject3d = (req, res) => {
    axios.get("http://localhost:3000/api/medias", { params: { id: req.query.id } })   //get request k through specific id leke ek
        .then(function (userdata) {                                                   //lyga
            res.render("hit_test", { specific_path: userdata.data })
        })
        .catch(err => {
            res.send(err);
        })
    // res.render('hit_test')
}