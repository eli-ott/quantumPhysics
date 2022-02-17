import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';


let backgroundColor = 0xfcffeb;

let particleSize = 0.5;
let particleOpacity = 0.6;
//creating the animation for the particle
const spaceArea = () => {
    const canvas = document.querySelector("#atomAnimation");
    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    });

    renderer.setClearColor(backgroundColor, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(500, 250);

    const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
    camera.position.set(-2.5, 0, 0);

    const scene = new THREE.Scene();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();  

    const ambientLight = new THREE.AmbientLight(0xcecece, 1.5);
    ambientLight.position.set(1, 0, 0)
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xcecece, 0.5);
    directionalLight.position.set(-1, 2, 4);
    scene.add(directionalLight);

    const particleGroup = new THREE.Group();
    particleGroup.position.set(0, 0, 0);

    const particleGeometry = new THREE.SphereGeometry(particleSize, 35, 35, 0, Math.PI * 2, Math.PI * 2);
    const particleMaterial = new THREE.MeshLambertMaterial({color: 0x59acff, transparent: true});
    particleMaterial.opacity = particleOpacity;
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);
    particle.position.set(0, 0.5, 0.5);
    particleGroup.add(particle);

    scene.add(particleGroup);
    
    function render(time) {
        time *= speed;
        
        particleGroup.rotation.x = time;

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}   
spaceArea();

let speed = 0.01;
//changing the range inputs when the value changes
$("#position").on("change", () => {
    $("#speed").val(100 - $("#position").val());

    //changing the width, opacity and speed property of the particle
    speed = $("#speed").val() / 10000 + 0.005; 
    particleSize =  $("#position").val() / 100 + 0.1;
    particleOpacity = $("#speed").val() / 100 + 0.05;

    if(particleSize == 0.0) {
        particleSize = 0.1;
    }

    //calling the function to render the changes
    spaceArea();
    render();
});
$("#speed").on('change', () => {
    $("#position").val(100 - $("#speed").val());
    
    //changing the width, opacity and speed property of the particle
    speed = $("#speed").val() / 10000 + 0.005; 
    particleSize =  $("#position").val() / 100 + 0.1;
    particleOpacity = $("#speed").val() / 100 + 0.05;

    if(particleSize == 0.0) {
        particleSize = 0.1;
    }

    //calling the function to render the changes
    spaceArea();
    render();
});

//changing the range inputs when the mouse is moving
$("#position").on("mousemove", () => {
    $("#speed").val(100 - $("#position").val());
    
    //changing the width, opacity and speed property of the particle
    speed = $("#speed").val() / 10000 + 0.005; 
    particleSize =  $("#position").val() / 100 + 0.1;
    particleOpacity = $("#speed").val() / 100 + 0.05;

    if(particleSize == 0.0) {
        particleSize = 0.1;
    }

    //calling the function to render the changes
    spaceArea();
    render();
});
$("#speed").on('mousemove', () => {
    $("#position").val(100 - $("#speed").val());
    
    //changing the width, opacity and speed property of the particle
    speed = $("#speed").val() / 10000 + 0.005; 
    particleSize =  $("#position").val() / 100 + 0.1;
    particleOpacity = $("#speed").val() / 100 + 0.05;

    //calling the function to render the changes
    spaceArea();
    render();
});

//setting the right color when the page is ready
$(() => {
    if(localStorage.getItem("theme") == "dark") {
        //changing the color variable
        backgroundColor = 0x242424;

        //calling the function to apply the modifications
        spaceArea();
    } else if(localStorage.getItem("theme") == "light") {
        backgroundColor = 0xfcffeb;

        spaceArea();
    }
});

//we check if the player enable the dark mode to change the color of the Three.js elements
$(".themeIcon").on("click", () => {
    if(localStorage.getItem("theme") == "dark") {
        backgroundColor = 0x242424;

        spaceArea();
    } else if(localStorage.getItem("theme") == "light") {
        backgroundColor = 0xfcffeb;

        spaceArea();
    }
});