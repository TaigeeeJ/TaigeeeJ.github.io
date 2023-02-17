$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 60); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -40, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    createPlatform (200,700,300,27)
    createPlatform (500,600,400,27)
    createPlatform (1000,500,200,27)
    createPlatform (600,400,200,27)
    createPlatform (200,300,350,27)
    createPlatform (700, 200,350,27)

    
    
    
    
    
    // TODO 2
    //  createCollectable(kennedi , 500 , 300 , 20, 0.6)
    //  createCollectable(grace , 600, 400, 30 , 0.7)
    createCollectable("steve", 690 , 320) ; // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 320, 600); // creates a "grace" collectible at the coordinates (500, 300), falling with a high gravity of 20  and bouncing with 50% bounce 
    createCollectable("kennedi", 1100 , 320) ; // creates a "kennedi" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("max", 910 , 150) ; // creates a "max" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    
    
    // TODO 3
    // Create cannons
   createCannon("left", 300 , 6000); // cannon on left wall, 600px down, shooting once per second
   createCannon("right", 500, 5000); // cannon on left wall, 600px down, shooting once per second
   createCannon("top", 600, 4000); // cannon on left wall, 600px down, shooting once per second

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
