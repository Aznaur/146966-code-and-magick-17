var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 10;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = -150;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 115, 50);
  ctx.fillText('Список результатов:', 115, 70);

  var maxTime = getMaxElement(times);

  for(var i = 0; i < players.length; i++) {
    if (players[i] == 'Вы') {
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + TEXT_WIDTH * i, 270);
      ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + TEXT_WIDTH * i, ((BAR_HEIGHT * times[i]) / maxTime) + 240);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + BAR_WIDTH + TEXT_WIDTH * i, 250, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + TEXT_WIDTH * i, 270);
      ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + TEXT_WIDTH * i, ((BAR_HEIGHT * times[i]) / maxTime) + 240);
      ctx.fillStyle = 'rgba(0, 0, 255, 0.3)';
      ctx.fillRect(CLOUD_X + BAR_WIDTH + TEXT_WIDTH * i, 250, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }
  }

};
