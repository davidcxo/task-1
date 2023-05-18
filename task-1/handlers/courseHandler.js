const Course = require("../pkg/exams/courseSchema");

exports.getAll = async (req, res) => {
    try {
        const Courses = await Course.find();

        res.status(200).json({
            status: "Success",
            data: {
                Courses,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err,
        });
    }
};

exports.getOne = async (req, res) => {
    try {
        const Courses = await Course.findById(req.params.id);

        res.status(200).json({
            status: "Success",
            data: {
                Courses,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err,
        });
    }
};

exports.create = async (req, res) => {
    try {
      const newCourse = await Course.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          Courses: newCourse,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
};

exports.update = async (req, res) => {
    try {
      const Courses = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: "success",
        data: {
          Courses,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
};

exports.replace = async (req, res) => {
    try {
      const Courses = await Course.findOneAndReplace(
        { _id: req.params.id },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
  
      res.status(200).json({
        status: "success",
        data: {
          Courses,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    }
};
  
exports.delete = async (req, res) => {
    try {
      await Course.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: "success",
        data: null,
      });
    } catch (err) {
      res.status(404).json({ status: "fail", message: err });
    }
};