resize.js solutions




resize(newSize) {
      newSize.width = Math.max(1, Math.min(newSize.width, this.screenSize.width-this.position.x));
      newSize.height = Math.max(1, Math.min(newSize.height, this.screenSize.height-this.position.y));
      
      this.size.resize(newSize.width, newSize.height);
    }



  resize(size) {
    const width = size.width > 0 ? size.width : 1
    const height = size.height > 0 ? size.height : 1
    this.size.width = Math.min(width, this.screenSize.width - this.position.x)
    this.size.height = Math.min(height, this.screenSize.height - this.position.y)
  }


  resize (size) {
    size.resize(size.width, size.height);
    let widthLimit = this.screenSize.width - this.position.x;
    let heightLimit = this.screenSize.height - this.position.y;
    this.size.width = size.width > widthLimit ? widthLimit : size.width;
    this.size.height = size.height > heightLimit ? heightLimit : size.height;
  }


  resize(newSize) {
    let newWidth = Math.max(1, newSize.width);
    let newHeight = Math.max(1, newSize.height);
    let maxWidth = this.screenSize.width - this.position.x;
    let maxHeight = this.screenSize.height - this.position.y;
    newWidth = Math.min(newWidth, maxWidth);
    newHeight = Math.min(newHeight, maxHeight);
    this.size.width = newWidth;
    this.size.height = newHeight;
  }