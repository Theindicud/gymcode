const mongoose = require('mongoose');

const Gym = require('../models/gym.model');
const User = require('../models/users.model');

module.exports.create = (req, res, next) => {
    Gym.create(req.body)
       .then((gym) => res.status(201).json(gym))
       .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json(err.errors)
        } else {
            next(err)
        }
       });
};

module.exports.list = (req, res, next) => {
    const { name, photo, address, lat, lng, facilities} = req.query;
    const criteria = {};
    if (name) criteria.name = name;
    if (photo) criteria.photo = photo;
    if (address) criteria.address = address;
    if (facilities) criteria.facilities = facilities;
    if (lat && lng ) {
        criteria.location = {
            $near: {
              $geometry: {
                 type: "Point" ,
                coordinates: [lng, lat]
              },
              $maxDistance: 15000,
              $minDistance: 0
            }
          }
    }

    Gym.find(criteria)
        //Aquí iría el populate de Coach
        .sort({ _id: -1 })
        .then((gyms) => res.json(gyms))
        .catch(next);
};



module.exports.update = (req, res, next) => {
    Gym.findByIdAndUpdate(req.params.id, req.body, {
        runValidators:true,
        new: true,
    })
        .then((gym) => {
            if (gym) {
                console.log(User)
                res.json(gym);
            } else {
                res.status(404).json({ message: "Gimnasio no encontrado"});
            }
        })
        .catch((err) => {
            if (err instanceof mongoose.Error.ValidationError) {
                res.status(400).json(err.errors);
            } else {
                next(err);
            }
        })
}

module.exports.detail = (req, res, next) => {
    Gym.findById(req.params.id)
    //Aquí iría el populate de Coach
    .then((gym) => {
        if (gym) {
            res.json(gym);
        } else {
            res.status(404).json({ message: 'Gimnasio no encontrado' });
        }
    })
    .catch(next);
}
module.exports.delete = (req, res, next) => {
    Gym.findByIdAndDelete(req.params.id)
        .then((gym) => {
            if (gym) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Gimnasio no encontrado' });
            }
        })
        .catch(next);
};