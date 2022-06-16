const router = require("express").Router();
const Data = require("../model/Data");

const { dataValidation } = require("../validation");

//send data
router.post("/addData", async (req, res) => {
  const { error } = dataValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const data = new Data({
    id: req.body.id,
    avatar:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fancyhands.com%2Fimages%2Fdefault-avatar-250x250.png&f=1&nofb=1",
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: req.body.role,
  });

  try {
    const savedData = await data.save();
    res.send(savedData);
  } catch (error) {
    res.status(400).send(err);
  }
});
//get data
router.post("/userData", async (req, res) => {
  try {
    const userData = await Data.findOne({ id: req.body.id });
    res.send(userData);
  } catch (err) {
    console.error(err);
  }
});



module.exports = router;
