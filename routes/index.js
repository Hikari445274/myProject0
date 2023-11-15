import express from 'express';
import {addYatch, deleteYatch, updateYatchKind, updateYatchName, updateYatchOrigin, updateYatchPrice, updateYatchImg} from './connect';
import {con} from './connect'
import { throws } from 'assert';
const router = express.Router();

/* GET home page. */
/* req.body is the request from the body of html file */
/* req.params is the request from the parameters part of URL */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/input', function(req,res){
  res.render('input');
})
router.post('/hello', function(req, res) {
  console.log('Hello' + req.body.name);
  console.log(req.body.age);
  res.render('hello', {name: req.body.name, age: req.body.age});
} )
router.post('/yatchaddcomplete', function(req,res,next) {
  addYatch(req.body.name,req.body.origin,req.body.price,req.body.kind,req.body.year,req.body.length,req.body.img)
  res.render('yatchaddcomplete')
})
router.post('/yatchdelete', function(req,res, next){
  deleteYatch(req.body.delete)
  res.render('yatchdelete')
})
router.post('/yatchchoose', function(req,res,next) {
  function chooseYatch (name) {
    con.connect(function(err){
        console.log(err);
        if(err) throw err;
        var sql = `SELECT * FROM yatch WHERE yatch_id = ?`;
        console.log(sql);
        con.query(sql,name,function(err,yatch,fields){
            if (err) throw err;
              res.render('yatchchoose', {
                yatchs: yatch
            });
            console.log("Yatch Choose Successfully")
    })
  })
  }
  chooseYatch(req.body.choose)
})
router.post('/inform', function(req,res,next) {
  function chooseYatch (name) {
    con.connect(function(err){
        console.log(err);
        if(err) throw err;
        var sql = `SELECT * FROM yatch WHERE yatch_id = ${name}`;
        console.log(sql);
        con.query(sql,function(err,yatch,fields){
            if (err) throw err;
              res.render('inform', {
                yatchs: yatch
            });
            console.log("Yatch Choose Successfully")
    })
  })
  }
  chooseYatch(req.body.id)
})
router.post('/yatchupdate', function(req,res, next){
  updateYatchImg(req.body.img1,req.body.img2,req.body.id)
  updateYatchKind(req.body.kind1,req.body.kind2,req.body.id)
  updateYatchName(req.body.name1,req.body.name2,req.body.id)
  updateYatchOrigin(req.body.origin1,req.body.origin2,req.body.id)
  updateYatchPrice(req.body.price1,req.body.price2,req.body.id)
  updateYatchLength(req.body.length1,req.body.length2,req.body.id)
  res.render('yatchupdate')
})
router.get('/yatchtable', function(req,res) {
  var sql='SELECT * FROM yatch';
    con.query(sql, function (err, yatch, fields) {
      if (err) throw err;
        res.render('yatchtable', {
            yatchs: yatch
        });
    });
})
router.get('/sanpham',function(req,res){
  let page = parseInt(req.query.page)
  var sql='SELECT * FROM yatch';
    con.query(sql, function (err,yatch,fields) {
      if (err) throw err
      let pageCount = Math.ceil(yatch.length / 8) // số page tối đa = số sp / số sp tối đa trong page
      if (page <1 || !page) {
        page =1
      }
      if (page > pageCount) {
          page = pageCount
      }
      console.log(yatch.slice(page * 8 - 8, page * 8))
      console.log(page)
      console.log(pageCount)
      res.render("sanpham",{yatchs:yatch.slice(page*8-8,page*8)})
    });
})
export default router;