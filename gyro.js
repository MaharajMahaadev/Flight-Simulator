if(window.DeviceOrientationEvent){
    if(DeviceOrientationEvent.requestPermission){
        var sensor_contents= document.getElementById("sensor_contents");
        sensor_contents.addEventListener("click", function(){
            DeviceOrientationEvent.requestPermission().then(function(response){
                if(response === "granted"){
                }
            }).catch(function(e){
                console.log(e);
            });
                  
        });
    }else{
    }
  }
 
  
  let gyroData = {
    "x":0,
    "y":0,
    "z":0
  }
  
  addEventListener("deviceorientation", (event) => {
    gyroData.x = event.alpha;
    gyroData.y = event.gamma;
    gyroData.z = event.alpha;
  
  }, true);
  
  
  
  function ctrWithGyro() {
    aircraft.elevator = 0;
    const a = Math.PI/4;
    if (Math.abs(gyroData.x) > a) {
      if (gyroData.x > a) {
        aircraft.elevator = 1;
      }else{
        aircraft.elevator = -1;
      }
    }else{
      aircraft.elevator = gyroData.x/a;
    }
  }