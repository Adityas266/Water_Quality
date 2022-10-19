const { express } = require('express')
const app = express();
const mongoose = require('mangoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://KevalW:@cluster0.exhvxbn.mongodb.net/water_pollution', { userNnewUelParser: true }, { useUnsefineTopology: true });

const data = {
    STATION_CODE: String,
    LOCATIONS: String,
    STATE: String,
    Temp: String,
    PH: String,
    NITRATENAN_NITRITENANN: String,
    FECAL_COLIFORM: String,
    TOTAL_COLIFORM: String
}

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
    let newNote = new Note({
        STATION_CODE: req.body.STATON-CODE ,
        LOCATIONS: req.body.LOCATION,
        STATE:req.body.STATE ,
        Temp: req.body.TEMPERATURE,
        PH: req.body.PH-LEVEL,
        NITRATENAN_NITRITENANN: req.body.NITRANEN,
        FECAL_COLIFORM:req.body.FECAL_COLIFORM,
        TOTAL_COLIFORM:req.body.TOTAL_COLIFORM

    })
    newNote.save();
    res.redirect('/')
})

app.listen(8080, function () {
    console.log('server is running on 27017');

})
