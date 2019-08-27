let robot = lib220.loadImageFromURL('https://people.cs.umass.edu/~joydeepb/robot.jpg');

function removeBlueAndGreen(robot){
  let image = robot.copy()
  for(let y = 0 ; y < image.height; ++y){
    for(let x = 0; x < image.width; ++x){
      let c = image.getPixel(x,y)
      image.setPixel(x,y, [c[0.0],0.0,0.0]);
    }
  }
  return image;
}

removeBlueAndGreen(robot).show();

function makeGrayscale(robot){
  let image = robot.copy()
  for(let y = 0 ; y < image.height; ++y){
    for(let x = 0; x < image.width; ++x){
      let c = image.getPixel(x,y)
      let m = (c[0] + c[1] + c[2]) /3
      image.setPixel(x,y, [m,m,m])
      }
  }
  return image;
}

makeGrayscale(robot).show()

function highlightEdges(robot){
  let image = robot.copy()
  for(let y = 0 ; y < image.height; ++y){
    for(let x = 0; x < image.width - 1; ++x){
      let c = image.getPixel(x,y)
      let m1 = (c[0] + c[1] + c[2]) /3
      let c2 = image.getPixel(x+1, y)
      let m2 = (c2[0] + c2[1] + c2[2]) /3
      image.setPixel(x,y, [Math.abs(m1-m2),Math.abs(m1-m2),Math.abs(m1-m2)]);
      }
  }
  return image;
}

highlightEdges(robot).show()

function blur(robot){
  let image = robot.copy()
  for(let y = 0 ; y < image.height; ++y){
    for(let x = 0; x < image.width; ++x){
      let count = 0
      let red = 0
      let blue = 0
      let green = 0
      for(let k = 5; k > 0; --k){
          if(x-k > 0){
           let move = image.getPixel(x-k,y)
              count += 1
              red += move[0]
              blue += move[1]
              green += move[2]
            }
          }
        for(let k = 0; k < 6; ++k){
          if(k + x < image.width){
              let move = image.getPixel(k+x,y)
              count += 1
              red += move[0]
              blue += move[1]
              green += move[2]
          }
        }
      let c1 = red/count
      let c2 = blue/count
      let c3 = green/count
      image.setPixel(x, y, [c1,c2,c3])
    }
  }
  return image;
}

blur(robot).show()
