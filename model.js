class Cube {
    constructor(x,y,z,oneSide) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.visible = true;
      this.oneSide = oneSide;
      
      this.vertexes = [];
      this.vertexes.push(new Vertex(this.x+this.oneSide/2, this.y+this.oneSide/2, this.z+this.oneSide/2));
      this.vertexes.push(new Vertex(this.x-this.oneSide/2, this.y+this.oneSide/2, this.z+this.oneSide/2));
      this.vertexes.push(new Vertex(this.x-this.oneSide/2, this.y-this.oneSide/2, this.z+this.oneSide/2));
      this.vertexes.push(new Vertex(this.x+this.oneSide/2, this.y-this.oneSide/2, this.z+this.oneSide/2));
      this.vertexes.push(new Vertex(this.x+this.oneSide/2, this.y+this.oneSide/2, this.z-this.oneSide/2));
      this.vertexes.push(new Vertex(this.x-this.oneSide/2, this.y+this.oneSide/2, this.z-this.oneSide/2));
      this.vertexes.push(new Vertex(this.x-this.oneSide/2, this.y-this.oneSide/2, this.z-this.oneSide/2));
      this.vertexes.push(new Vertex(this.x+this.oneSide/2, this.y-this.oneSide/2, this.z-this.oneSide/2));
      
      this.edges = [];
  
      this.faces = [];
      this.faces.push([0,1,2,"#000000"]);
      this.faces.push([2,3,0,"#000000"]);
      this.faces.push([5,4,7,"#000000"]);
      this.faces.push([7,6,5,"#000000"]);
      this.faces.push([1,0,4,"#000000"]);
      this.faces.push([4,5,1,"#000000"]);
      this.faces.push([1,5,6,"#000000"]);
      this.faces.push([6,2,1,"#000000"]);
      this.faces.push([6,7,3,"#000000"]);
      this.faces.push([3,2,6,"#000000"]);
      this.faces.push([4,0,3,"#000000"]);
      this.faces.push([3,7,4,"#000000"]);
    }
  }
  
  class Bullet {
    constructor(x,y,z,vec) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.visible = true;
      this.vec = vec;
      this.alive = true;
      this.vertexes = [];
      this.vertexes.push(new Vertex(this.x,this.y,this.z));
      
      this.edges = [];
  
      this.faces = [];
      this.faces.push([0,10,"#000000"]);
    }
  }
  
  class Blast {
    constructor(x,y,z,r,size) {
      this.center = {
        "x":x,
        "y":y,
        "z":z
      }
      this.x = this.center.x;
      this.y = this.center.y;
      this.z = this.center.z;
      this.size = size;
      this.visible = true;
      this.vec = {"x":0,"y":0,"z":1};
      this.vec = rotate({"x":1,"y":0,"z":0},this.vec,Math.random()*Math.PI*2);
      this.vec = rotate({"x":0,"y":1,"z":0},this.vec,Math.random()*Math.PI*2);
      this.vec = rotate({"x":0,"y":0,"z":1},this.vec,Math.random()*Math.PI*2);
      this.vec.x *= r;
      this.vec.y *= r;
      this.vec.z *= r;
      this.prog = 0;
      this.alive = true;
      this.vertexes = [];
      this.vertexes.push(new Vertex(this.x,this.y,this.z));
      
      this.edges = [];
  
      this.faces = [];
      this.faces.push([0,this.size,"#FF0000"]);
      
    }
  }
  
  class Target {
    constructor(x,y,z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.visible = true;
  
      this.vertexes = [];
      this.vertexes.push(new Vertex(0,282,0));
      this.vertexes.push(new Vertex(-200,0,200));
      this.vertexes.push(new Vertex(200,0,200));
      this.vertexes.push(new Vertex(200,0,-200));
      this.vertexes.push(new Vertex(-200,0,-200));
      this.vertexes.push(new Vertex(0,-282,0));
      for (let i = 0; i < this.vertexes.length; i++) {
        this.vertexes[i].x += this.x;
        this.vertexes[i].y += this.y;
        this.vertexes[i].z += this.z;
      }
      
      this.faces = [];
      this.faces.push([0,1,2,"#FF0000"]);
      this.faces.push([0,2,3,"#FF0000"]);
      this.faces.push([0,3,4,"#FF0000"]);
      this.faces.push([0,4,1,"#FF0000"]);
      this.faces.push([5,2,1,"#FF0000"]);
      this.faces.push([5,3,2,"#FF0000"]);
      this.faces.push([5,4,3,"#FF0000"]);
      this.faces.push([5,1,4,"#FF0000"]);
    }
  }
  
  class Cloud {
    constructor(x,y,z) {
      this.x = x;
      this.y = y;
      this.z = z;
      
      this.vertexes = [];
      this.vertexes.push(new Vertex(0,282,0));
      this.vertexes.push(new Vertex(-1000,0,1000));
      this.vertexes.push(new Vertex(1000,0,1000));
      this.vertexes.push(new Vertex(1000,0,-1000));
      this.vertexes.push(new Vertex(-1000,0,-1000));
      this.vertexes.push(new Vertex(0,-282,0));
      for (let i = 0; i < this.vertexes.length; i++) {
        this.vertexes[i].x += this.x;
        this.vertexes[i].y += this.y;
        this.vertexes[i].z += this.z;
      }
      
      this.faces = [];
      this.faces.push([0,1,2,"#FFFFFF"]);
      this.faces.push([0,2,3,"#FFFFFF"]);
      this.faces.push([0,3,4,"#FFFFFF"]);
      this.faces.push([0,4,1,"#FFFFFF"]);
      this.faces.push([5,2,1,"#FFFFFF"]);
      this.faces.push([5,3,2,"#FFFFFF"]);
      this.faces.push([5,4,3,"#FFFFFF"]);
      this.faces.push([5,1,4,"#FFFFFF"]);
    }
  }
  
  class Tree {
    constructor(x,y,z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.visible = true;
  
      this.vertexes = [];
      this.vertexes.push(new Vertex(0,30,0));
      this.vertexes.push(new Vertex(0,-30,5));
      this.vertexes.push(new Vertex(4.33,-30,-2.5));
      this.vertexes.push(new Vertex(-4.33,-30,-2.5));
      this.vertexes.push(new Vertex(0,-10,20));
      this.vertexes.push(new Vertex(17.32,-10,-10));
      this.vertexes.push(new Vertex(-17.32,-10,-10));
      for (let i = 0; i < this.vertexes.length; i++) {
        this.vertexes[i].x += this.x;
        this.vertexes[i].y += this.y;
        this.vertexes[i].z += this.z;
      }
      
      this.edges = [];
      
      this.faces = [];
      this.faces.push([0,1,2,"#D38301"]);
      this.faces.push([0,2,3,"#D38301"]);
      this.faces.push([0,3,1,"#D38301"]);
      this.faces.push([0,4,5,"#76BB40"]);
      this.faces.push([0,5,6,"#76BB40"]);
      this.faces.push([0,6,4,"#76BB40"]);
      
      
    }
  }
   
  class Aircraft {
    constructor(x,y,z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.visible = true;
      this.axis = {"x":0,"y":1,"z":0};
      this.rad = 0;
      this.throttle = 1;
      this.exploded = false;
      this.speed = {
        "x":0,
        "y":0,
        "z":10
      };
      this.elevator = 0;
      this.rudder = 0;
      this.aileron = 0;
      this.rotationSpeed = {
        "x":0,
        "y":0,
        "z":0
      }
      this.pitch = 0;
      
      this.recentPosture = [[{"x":0,"y":1,"z":0},0,],
                           [{"x":0,"y":1,"z":0},0,],
                           [{"x":0,"y":1,"z":0},0,],
                           [{"x":0,"y":1,"z":0},0,],
                           [{"x":0,"y":1,"z":0},0,],
                           [{"x":0,"y":1,"z":0},0,],
                           [{"x":0,"y":1,"z":0},0,],
                           [{"x":0,"y":1,"z":0},0,],
                           [{"x":0,"y":1,"z":0},0,],
                           [{"x":0,"y":1,"z":0},0,],];
  
      this.vertexes = [];
  
      this.edges = [];
      
      this.faces = [];
      this.faces.push([1,0,3,"#FFFFFF"]);
      this.faces.push([3,2,1,"#FFFFFF"]);
      this.faces.push([5,4,0,"#FFFFFF"]);
      this.faces.push([0,1,5,"#FFFFFF"]);
      this.faces.push([4,7,3,"#FFFFFF"]);
      this.faces.push([3,0,4,"#FFFFFF"]);
      this.faces.push([7,6,2,"#FFFFFF"]);
      this.faces.push([2,3,7,"#FFFFFF"]);
      this.faces.push([6,5,1,"#FFFFFF"]);
      this.faces.push([1,2,6,"#FFFFFF"]);
      this.faces.push([8,4,5,"#FFFFFF"]);
      this.faces.push([8,7,4,"#FFFFFF"]);
      this.faces.push([8,6,7,"#FFFFFF"]);
      this.faces.push([8,5,6,"#FFFFFF"]);
      this.faces.push([9,1,0,"#FFFFFF"]);
      this.faces.push([9,0,3,"#FFFFFF"]);
      this.faces.push([9,3,2,"#FFFFFF"]);
      this.faces.push([9,2,1,"#FFFFFF"]);
      this.faces.push([10,13,12,"#FFFFFF"]);
      this.faces.push([10,12,13,"#FFFFFF"]);
      this.faces.push([12,11,10,"#FFFFFF"]);
      this.faces.push([12,10,11,"#FFFFFF"]);
      this.faces.push([14,17,16,"#FFFFFF"]);
      this.faces.push([14,16,17,"#FFFFFF"]);
      this.faces.push([16,15,14,"#FFFFFF"]);
      this.faces.push([16,14,15,"#FFFFFF"]);
      this.faces.push([25,21,22,"#FFFFFF"]);
      this.faces.push([25,22,21,"#FFFFFF"]);
      this.faces.push([25,22,18,"#FFFFFF"]);
      this.faces.push([25,18,22,"#FFFFFF"]);
      this.faces.push([25,19,20,"#FFFFFF"]);
      this.faces.push([25,20,19,"#FFFFFF"]);
      this.faces.push([25,18,19,"#FFFFFF"]);
      this.faces.push([25,19,18,"#FFFFFF"]);
      this.faces.push([18,23,24,"#FFFFFF"]);
      this.faces.push([18,24,23,"#FFFFFF"]);
      this.faces.push([24,25,18,"#FFFFFF"]);
      this.faces.push([24,18,25,"#FFFFFF"]);
      this.faces.push([30,26,27,"#999999"]);
      this.faces.push([30,27,28,"#999999"]);
      this.faces.push([30,28,29,"#999999"]);
      this.faces.push([30,29,26,"#999999"]);
    }
    update() {
      this.vertexes = [];
      this.vertexes.push(new Vertex(-10,10,30));
      this.vertexes.push(new Vertex(10,10,30));
      this.vertexes.push(new Vertex(10,-10,25));
      this.vertexes.push(new Vertex(-10,-10,25));
      this.vertexes.push(new Vertex(-10,10,-30));
      this.vertexes.push(new Vertex(10,10,-30));
      this.vertexes.push(new Vertex(10,-10,-30));
      this.vertexes.push(new Vertex(-10,-10,-30));
      this.vertexes.push(new Vertex(0,10,-90));
      this.vertexes.push(new Vertex(0,5,45));
      this.vertexes.push(new Vertex(10,10,12));
      this.vertexes.push(new Vertex(70,10,12));
      this.vertexes.push(new Vertex(70,10,-15));
      this.vertexes.push(new Vertex(10,10,-15));
      this.vertexes.push(new Vertex(-10,10,12));
      this.vertexes.push(new Vertex(-70,10,12));
      this.vertexes.push(new Vertex(-70,10,-15));
      this.vertexes.push(new Vertex(-10,10,-15));
      this.vertexes.push(new Vertex(0,10,-70));
      this.vertexes.push(new Vertex(20,10,-80));
      this.vertexes.push(new Vertex(20,10,-90));
      this.vertexes.push(new Vertex(-20,10,-90));
      this.vertexes.push(new Vertex(-20,10,-80));
      this.vertexes.push(new Vertex(0,30,-79));
      this.vertexes.push(new Vertex(0,30,-87));
      this.vertexes.push(new Vertex(0,10,-90));
      this.vertexes.push(new Vertex(0,10,5));
      this.vertexes.push(new Vertex(8,10,-10));
      this.vertexes.push(new Vertex(0,10,-30));
      this.vertexes.push(new Vertex(-8,10,-10));
      this.vertexes.push(new Vertex(0,18,-10));
      for (let i = 0; i < this.vertexes.length; i++) {
        this.vertexes[i] = rotate(this.axis,this.vertexes[i],this.rad);
        this.vertexes[i].x += this.x;
        this.vertexes[i].y += this.y;
        this.vertexes[i].z += this.z;
      }
    }
  }
  
  class Ground {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.visible = "ground";
  
  
      this.edges = [];
      
      this.faces = [];
      for (let i = 0; i < 19; i++) {
        this.faces.push([20,i,i+1]);
      }
      this.faces.push([20,19,0]);
    }
    update() {
      this.x = cam.x;
      this.y = 0;
      this.z = cam.z;
      this.vertexes = [];
      for (let i = 0; i < (2*Math.PI); i += (Math.PI/10)) {
          this.vertexes.push(new Vertex(this.x + Math.cos(i)*30000, this.y, this.z + Math.sin(i)*30000));
      }
      this.vertexes.push(new Vertex(this.x, this.y, this.z));
    }
  }