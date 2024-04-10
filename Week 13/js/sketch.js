/* Kaylee Beck - Week 13 HW - */

// Q's why are all my varibale moving randomy What does it mean by "All shapes should rotate around the model at different speeds."

/* Variables */

let shapes = [];

function preload() {
    bee = loadModel('../threeD/OBJ/beemodel.obj', true);

    theFont = loadFont('../font/billieeilish.ttf');
}

function setup() {
    createCanvas(700, 700, WEBGL);
    flowerimg = loadImage('../textures/flower.jpg');
    flowerimg1 = loadImage('../textures/flower1.jpg');
    flowerimg2 = loadImage('../textures/flower2.jpg');
    flowerimg3 = loadImage('../textures/flower3.jpg');
    flowerimg4 = loadImage('../textures/flower4.jpg');
    beeimg = loadImage('../textures/bee.jpg');
    textureMode(NORMAL);

    boxPosition = createVector(-100, -100, 0);
    cylinderPosition = createVector(100, -100, -100);

    // Add shapes to the array
    shapes.push({
        translate: createVector(boxPosition.x, boxPosition.y, boxPosition.z),
        rotate: createVector(0.01, 1, 1),
        texture: flowerimg,
        type: 'box',
        dimensions: [50, 50, 50]
    });

    shapes.push({
        translate: createVector(cylinderPosition.x, cylinderPosition.y, cylinderPosition.z),
        rotate: createVector(0.01, 0.5, 1),
        texture: flowerimg1,
        type: 'cylinder',
        dimensions: [20, 50]
    });

    shapes.push({
        translate: createVector(-170, -60, -150),
        rotate: createVector(0.01, 1, 3),
        texture: flowerimg2,
        type: 'cone',
        dimensions: [40, 70]
    });

    shapes.push({
        translate: createVector(160, 120, 0),
        rotate: createVector(0.01, 5, 1),
        texture: flowerimg3,
        type: 'ellipsoid',
        dimensions: [30, 40, 40]
    });

    shapes.push({
        translate: createVector(60, 190, -100),
        rotate: createVector(0.01, 3, 1),
        texture: flowerimg4,
        type: 'torus',
        dimensions: [30, 15]
    });
}

function draw() {
  background(46, 171, 100);
  /* background(backgroundImage); */ //why won't my image work?
    normalMaterial();

    // Draw shapes from the array
    for (let shape of shapes) {
        push();
        translate(shape.translate.x, shape.translate.y, shape.translate.z);
        rotateZ(frameCount * shape.rotate.x);
        rotateX(frameCount * shape.rotate.y);
        rotateY(frameCount * shape.rotate.z);
        texture(shape.texture);
        switch (shape.type) {
            case 'box':
                box(...shape.dimensions);
                break;
            case 'cylinder':
                cylinder(...shape.dimensions);
                break;
            case 'cone':
                cone(...shape.dimensions);
                break;
            case 'ellipsoid':
                ellipsoid(...shape.dimensions);
                break;
            case 'torus':
                torus(...shape.dimensions);
                break;
            default:
                console.error('Unknown shape type:', shape.type);
        }
        pop();
    }

    /* Model */
    push();
    scale(0.8); // Scaled to make model fit into canvas
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 1);
    rotateY(frameCount * 1);
    texture(beeimg);
    model(bee);
    pop();

    /* Text */
    fill(46, 27, 6);
    textFont(theFont); /* <-- font  */
    textSize(25);
    text('Kaylee Beck - "Hey Honey(Bee)"', -30, 300);
}

function mouseClicked() {
    // Update positions randomly when the mouse is clicked
    for (let shape of shapes) {
        shape.translate.set(random(-200, 200), random(-200, 200), random(-200, 200));
    }
}
