
/**
 * FooController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var ObjectID = require('mongodb').ObjectID;
module.exports = {

  create: async (req, res) => {
    let obj = {
      firstName: 'sumit',
      addresses: [{
        id: new ObjectID(),
        city: 'abc'
      }, {
        id: new ObjectID(),
        city: 'efg'
      }]
    }

    let foo = await Foo.create(obj).fetch();
    res.status(201).json({
      data: foo
    });
  }
};


//this should work now