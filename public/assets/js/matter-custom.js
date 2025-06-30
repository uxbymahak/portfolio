function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create(),
    world = engine.world;

  // Get the container element and its dimensions
  var containerElement = document.querySelector(".tags-container");
  var containerWidth = containerElement.clientWidth;
  var containerHeight = containerElement.clientHeight;

  // create a renderer
  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      background: "#121212",
      wireframes: false,
    },
  });

  // create bounds
  var ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight + 80,
    containerWidth + 320,
    160,
    { render: { fillStyle: "#fff" }, isStatic: true }
  );
  var wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    { isStatic: true }
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    { isStatic: true }
  );
  var roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    { isStatic: true }
  );

  // Function to generate random words
  function generateRandomWord() {
    const words = [
      "Design", "Code", "Creative", "Art", "Digital",
      "Web", "App", "UI", "UX", "Graphics",
      "Brand", "Logo", "Typography", "Illustration", "Photo",
      "Video", "Animation", "3D", "Print", "Mobile",
      "Game", "VR", "AR", "Sound", "Music",
      "Data", "AI", "Machine", "Learning", "Cloud",
      "Blockchain", "Crypto", "NFT", "Meta", "Social",
      "Marketing", "Strategy", "Content", "Story", "Narrative",
      "Experience", "Interaction", "Interface", "System", "Product",
      "Service", "Platform", "Network", "Community", "Future"
    ];
    return words[Math.floor(Math.random() * words.length)];
  }

  // Function to generate random color
  function getRandomColor() {
    const colors = [
      "#EDDC8C", "#B3E8F3", "#4D4D4D", "#FF6B6B", "#4ECDC4",
      "#45B7D1", "#FFBE0B", "#FB5607", "#8338EC", "#3A86FF",
      "#FF006E", "#A5DD9B", "#F9C74F", "#90BE6D", "#43AA8B",
      "#577590", "#F94144", "#F3722C", "#F8961E", "#F9844A"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Function to create a random body
  function createRandomBody(x, y) {
    const word = generateRandomWord();
    // Calculate width based on word length
    const width = Math.max(80, word.length * 12 + 40);
    const height = 56;
    const color = getRandomColor();

    return Bodies.rectangle(x, y, width, height, {
      chamfer: { radius: 20 },
      render: {
        fillStyle: color
      },
      // Custom properties
      word: word,
      textColor: '#FFFFFF' // White text for contrast
    });
  }

  // create random objects
  var bodies = [];
  const count = 19;

  for (let i = 0; i < count; i++) {
    const x = containerWidth / 2 + (Math.random() * 400 - 200);
    const y = 200 + Math.random() * 300;
    const body = createRandomBody(x, y);
    bodies.push(body);
  }

  // add all of the bodies to the world
  World.add(engine.world, [
    ground,
    wallLeft,
    wallRight,
    roof,
    ...bodies
  ]);

  // Add text rendering after the main render
  Events.on(render, 'afterRender', function () {
    var context = render.context;
    context.save();

    // Set default text style
    context.font = 'bold 16px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    // Render text for each body
    for (var i = 0; i < bodies.length; i++) {
      var body = bodies[i];

      if (body.word) {
        // Get body position and angle
        var position = body.position;
        var angle = body.angle;

        context.save();
        context.translate(position.x, position.y);
        context.rotate(angle);

        // Set text color
        context.fillStyle = body.textColor || '#FFFFFF';

        // Draw text at center (we're already translated to body position)
        context.fillText(body.word, 0, 0);

        context.restore();
      }
    }

    context.restore();
  });

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // Allow page scrolling in matter.js window
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  // Detect clicks vs. drags
  let click = false;

  document.addEventListener("mousedown", () => (click = true));
  document.addEventListener("mousemove", () => (click = false));

  // Create a On-Mouseup Event-Handler
  Events.on(mouseConstraint, "mouseup", function (event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        // Check if clicked or dragged
        if (click === true) {
          if (
            Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
          ) {
            var bodyUrl = body.url;

            // Hyperlinking feature
            if (bodyUrl != undefined) {
              window.open(bodyUrl, "_blank");
            }
            break;
          }
        }
      }
    }
  });

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
}

// Get the container element
var containerElement = document.querySelector(".tags-container");

// Create an intersection observer
var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Initialize the simulation when the element is visible
      initSimulation();

      // Disconnect the observer after triggering the tagSocialstrategie
      observer.disconnect();
    }
  });
}, {});

// Observe the container element
observer.observe(containerElement);