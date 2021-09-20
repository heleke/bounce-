class nummer extends Bal {
    nummer;

    constructor(_nummer) {
        superbal (_nummer){


        this.nummer = _nummer; }
    }

    show() {
        fill(255,255,255)
        ellipse(this.x, this.y, 50, 50);

        fill(255,255,255);
        textSize(15);
        textSize(this.nummer, this.x, this.y);
    }
    
  }