var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});
router.get('/about', function(req, res, next) {
	res.render('about', {});
});
router.get('/contact', function(req, res, next) {
	res.render('contact', {});
});
router.get('/news', function(req, res, next) {
	res.render('news', {});
});
router.get('/alliance', function(req, res, next) {
  res.render('alliance', {});
});
router.get('/project', function(req, res, next) {
	var data = {
		projects: [
			{
				title: '2016“中信国安杯”世界女子九球世锦赛',
				img: 'project1.jpg',
				id: 1
			},
			{
				title: '皮尔斯球迷见面会',
				img: 'project2.jpg',
				id: 2
			},
			{
				title: '伊利索契冬奥会——为默默无闻的奥运梦想喝彩',
				img: 'project3.jpg',
				id: 3
			},
			{
				title: '2014、2016两届司南杯大帆船赛媒体推广',
				img: 'project4.jpg',
				id: 4
			},
			{
				title: '网易体育微博运营和微信账号运营',
				img: 'project5.jpg',
				id: 5
			},
			{
				title: '中信地产',
				img: 'project6.jpg',
				id: 6
			},
			{
				title: '高科绿水东城画册',
				img: 'project7.jpg',
				id: 7
			},
			{
				title: '乐旁松露酒',
				img: 'project8.jpg',
				id: 8
			}
		]
	}
	res.render('project', data);
});
router.get('/project/:id', function(req, res, next) {
	var projectId = req.params.id;
	res.render('project_detail', {projectId: projectId});
});
module.exports = router;
