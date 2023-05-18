const Academy = require("../pkg/exams/acadSchema");

exports.getAll = async (req, res) => {
    try {
        const Academies = await Academy.find();

        res.status(200).json({
            status: "Success",
            data: {
                Academies,
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
        const Academies = await Academy.findById(req.params.id);

        res.status(200).json({
            status: "Success",
            data: {
                Academies,
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
      const newAcademy = await Academy.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          Academies: newAcademy,
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
      const Academies = await Academy.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: "success",
        data: {
          Academies,
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
      const Academies = await Academy.findOneAndReplace(
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
          Academies,
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
      await Academy.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: "success",
        data: null,
      });
    } catch (err) {
      res.status(404).json({ status: "fail", message: err });
    }
};