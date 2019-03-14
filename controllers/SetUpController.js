var Todos = require('../model/todoModel');

module.exports = function(app){
	app.get('/api/setUpTodos', function(req,res){
		
		//seed data
		var starterTodos = [
			{
				username: 'test',
				todo: 'Buy milk',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Feed dog',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Learn node',
				isDone: true,
				hasAttachment: false
			}
		];
		Todos.create(starterTodos, function(err,results){
			res.send(results);
		});
	});
}