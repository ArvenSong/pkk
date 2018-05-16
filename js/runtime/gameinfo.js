const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

let atlas = new Image()
atlas.src = 'images/Common.png'

export default class GameInfo {
  renderGameScore(ctx, score) {
    // ctx.save(); //保存画布状态
    // // ctx.translate(100, 100);
    // ctx.rotate(90 * Math.PI / 180); //选择画布
    // this.drawBowtie(ctx, "yellow", score); //绘制文字
    // this.dot(ctx);
    // ctx.restore();//恢复画布状态
 
    ctx.fillStyle = "#000000"
    ctx.font      = "20px @Arial"

    ctx.fillText(
      score,
      screenWidth - 50,
      screenHeight -30
    )
  }
  drawBowtie(ctx, fillStyle,score) {
  ctx.fillStyle = "rgba(200,200,200,0.3)";
  // ctx.fillRect(-30, -30, 60, 60);
  ctx.fillStyle = fillStyle;
  ctx.globalAlpha = 1.0;
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(-25, -25);
  ctx.lineTo(25, -25);
  ctx.lineTo(-25, 25);
  ctx.closePath();
  ctx.strokeText(score,
      screenWidth - 50,
      screenHeight -30);
  ctx.fill();

}
 dot(ctx) {
  ctx.save();
  ctx.fillStyle = "black";
  ctx.fillRect(-2, -2, 4, 4);
  ctx.restore();
}


  renderGameOver(ctx, score) {
    ctx.drawImage(atlas, 0, 0, 119, 108, screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 300)

    ctx.fillStyle = "#ffffff"
    ctx.font    = "20px Arial"

    ctx.fillText(
      '游戏结束',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 50
    )

    ctx.fillText(
      '得分: ' + score,
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 130
    )

    ctx.drawImage(
      atlas,
      120, 6, 39, 24,
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 180,
      120, 40
    )

    ctx.fillText(
      '重新开始',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 205
    )

    /**
     * 重新开始按钮区域
     * 方便简易判断按钮点击
     */
    this.btnArea = {
      startX: screenWidth / 2 - 40,
      startY: screenHeight / 2 - 100 + 180,
      endX  : screenWidth / 2  + 50,
      endY  : screenHeight / 2 - 100 + 255
    }
  }
}

