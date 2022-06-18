const router = require("express").Router();
const Event = require("../model/Event");

const {eventValidation} = require('../validation')

//add event
router.post("/addEvent", async (req, res) => {
     const { error } = eventValidation(req.body);
  
    if (error) return res.status(400).send(error.details[0].message);
   
    const event = new Event({
      id: req.body.id,
      event: req.body.event,
      date: req.body.date,
    });
  
    try {
      const savedEvent = await event.save();
      res.send(savedEvent);
    } catch (err) {
      res.status(400).send(err);
    }
});

//get event
router.post("/getEvent", async (req, res) => {
    try {
        const userEvents = await Event.find({id: req.body.id}) 
        res.send(userEvents);
      } catch (err) {
        res.status(400).send(err);
      }
});


module.exports = router;