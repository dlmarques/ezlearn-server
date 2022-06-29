const router = require('express').Router();
const Course = require('../model/Course');


router.post('/addCourse', async (req, res) => {
   
    const course = new Course({
        id: req.body.id,
        courseName: req.body.courseName,
        duration: req.body.duration,
        image: req.body.image,
    })

    try {
        const savedCourse = await course.save();
        res.send(savedCourse)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/getAllCourses', async (req, res) => {
   
    try {
        const userEvents = await Course.find() 
        res.send(userEvents);
      } catch (err) {
        res.status(400).send(err);
      }
})

module.exports = router;