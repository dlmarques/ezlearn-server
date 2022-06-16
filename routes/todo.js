const router = require("express").Router();
const Task = require("../model/Task");

const { taskValidation } = require("../validation");

//addTasks
router.post("/addTask", async (req, res) => {
  const { error } = taskValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const task = new Task({
    id: req.body.id,
    task: req.body.task,
  });

  try {
    const savedTask = await task.save();
    res.send(savedTask);
  } catch (err) {
    res.status(400).send(err);
  }
});
//get tasks by usetr
router.post("/userTask", async (req, res) => {
  try {
    const userTasks = await Task.find({id: req.body.id}) 
    res.send(userTasks);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/deleteTask", async (req, res) => {
    try {
      const userTasks = await Task.deleteOne({task: req.body.task}) 
      res.send(userTasks);
    } catch (err) {
      res.status(400).send(err);
    }
  });

module.exports = router;
