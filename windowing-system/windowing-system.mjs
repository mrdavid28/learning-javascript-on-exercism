// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

 export function Size(width=80, height=60) {
    
  this.width = width
  this.height = height
  this.resize = function(newWidth, newHeight) {
      this.width = newWidth
      this.height= newHeight
  }
}

export function Position(x=0,y=0) {
this.x = x
this.y = y
this.move = function (newX, newY) {
  this.x = newX
  this.y = newY
}  
}

export class ProgramWindow  { 
    constructor() {
      this.screenSize = new Size(800, 600)
      this.size = new Size
      this.position = new Position
    }
    resize(newSize) {
      
      newSize.width = Math.max(1,Math.min(newSize.width, this.screenSize.width-this.position.x));
      
    
      newSize.height = Math.max(1,Math.min(newSize.height,this.screenSize.height-this.position.y))
    
    this.size.resize(newSize.width, newSize.height);
  }
    move(position) {
        if(position.x<0) {
          this.position.x = 0
        } else if (this.size.width + position.x > this.screenSize.width){
          this.position.x = this.screenSize.width - this.size.width;
        }
          else {
            this.position.x = position.x
          }
        if(position.y<0) {
          this.position.y = 0
        }  else if(this.size.height + position.y > this.screenSize.height){
            this.position.y = this.screenSize.height - this.size.height 
        } else {
          this.position.y = position.y
        }

    }

  }

  export function changeWindow(newSize) {
      newSize.move(new Position())
      newSize.resize(new Size(400,300))
      newSize.move(new Position (100,150))
      return newSize
  }


  const programWindow = new ProgramWindow();
  const newPosition = new Position(710, 525);
  programWindow.move(newPosition);
  const newSize = new Size(1000, 1000);
  programWindow.resize(newSize);
  console.log(programWindow.size.height); //90 width 75 height
  