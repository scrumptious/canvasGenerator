var app = angular.module('generatorApp', []);
// app.run(function($rootScope) {
// 	$rootScope.amount = 5;
// });
app.controller('drawCtrl', drawCtrl);

function drawCtrl() {
	this.fLinesNumber=0;
	this.fTrianglesNumber=0;
	this.fSquaresNumber=0;
	this.fCirclesNumber=0;
	this.fHexagonsNumber=0;

};
drawCtrl.prototype.lines = function() {
	this.linesNumber = Math.ceil(Math.random() * (this.fLinesNumber+1) -1);
};
drawCtrl.prototype.triangles = function() {
	this.trianglesNumber =  Math.ceil(Math.random() * (this.fTrianglesNumber+1) -1);

};
drawCtrl.prototype.squares = function() {
	this.squaresNumber =  Math.ceil(Math.random() * (this.fSquaresNumber+1) -1);

};
drawCtrl.prototype.circles = function() {
	this.circlesNumber =  Math.ceil(Math.random() * (this.fCirclesNumber+1) -1);

};
drawCtrl.prototype.hexagons = function() {
	this.hexagonsNumber =  Math.ceil(Math.random() * (this.fHexagonsNumber+1) -1);

};
drawCtrl.prototype.initialize = function() {
	this.lines();
	this.triangles();
	this.squares();
	this.circles();
	this.hexagons();
}
drawCtrl.prototype.showInfo = function() {
	return 'lines: ' + this.fLinesNumber +'/' + this.linesNumber + ', ' +
			'triangles: ' + this.fTrianglesNumber + '/' + this.trianglesNumber + ', ' +
			'squares: ' + this.fSquaresNumber + '/' + this.squaresNumber + ', ' +
			'circles: ' + this.fCirclesNumber + '/' + this.circlesNumber + ', ' +
			'hexagons: ' + this.fHexagonsNumber + '/' + this.hexagonsNumber;

};

drawCtrl.prototype.configCanvas = function() {
		var canvas = document.getElementById("cnv");
		var ctx = canvas.getContext("2d");
		ctx.fillRect(50, 50, 250, 200);
		ctx.strokeRect(50, 50, 250, 200);
};