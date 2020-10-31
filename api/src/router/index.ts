import express from 'express';
import Data from './../data';

const Router = express.Router();

Router.route('/').get(async (req, res) => {
  res.send('OK!');
});

Router.route('/comment').post((req, res) => {
  const data = new Data({ comment: req.body.comment, author: req.body.author, subject: req.body.subject });
  return data.save().then((item: any) => {
    return res.status(201).json({
      data: item
    });
  });
});

Router.route('/comments').get((req, res) => {
  return Data.find().then((items: any) => {
    return res.status(201).json({
      data: items
    });
  });
});

export default Router;
