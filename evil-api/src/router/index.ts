import express from 'express';
import Data from './../data';

const Router = express.Router();

Router.route('/').get(async (req, res) => {
  res.send('OK!');
});

Router.route('/evil').post((req, res) => {
  const data = new Data({ data: req.body.secretData });
  return data.save().then((item: any) => {
    return res.status(201).json({
      data: item
    });
  });
});


export default Router;
