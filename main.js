canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
ranger_y = 1;
ranger_x = 1;

ranger_image_width = 350;
ranger_image_height = 430;

var ranger_image_object = "";

function new_image(get_image) {
    // to upload images
    fabric.Image.fromURL(get_image, function (Img) {
        ranger_image_object = Img;
        ranger_image_object.scaleToHeight(ranger_image_height);
        ranger_image_object.scaleToWidth(ranger_image_width);
        ranger_image_object.set({
            top: ranger_y,
            left: ranger_x
        });
        canvas.add(ranger_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '82') // add appropriate keycode
    {
        // upload red ranger
        new_image("rr1.png");
        console.log("r");
    }
    if (keyPressed == '71') {
        ranger_x = 200;
        // upload green ranger
        console.log("g");
        new_image("gr.png");

    }

    if (keyPressed == '89') {
        ranger_x = 350;
        // upload yellow ranger
        new_image("yr.png");
        console.log("y");
    }
    if (keyPressed == '80') {
        ranger_x = 600;
        // upload pink ranger
        console.log("p");
        new_image("pr.png");
    }
    if (keyPressed == '66') {
        ranger_x = 700;
        new_image("br.png");
        // upload blue ranger
        console.log("b");
    }

}
