import * as THREE from "https://cdn.skypack.dev/three@0.129.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

let backgroundColor = 0xfcffeb;

const animation = () => {
  const canvas = document.querySelector("#canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setClearColor(backgroundColor, 1);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(500, 250);
  renderer.shadowMapEnabled = true;
  renderer.shadowMapType = THREE.PCFSoftShadowMap;

  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 10);
  camera.position.set(-3, 2, 3);

  const scene = new THREE.Scene();

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  const ambient = new THREE.AmbientLight(0xcecece, 0.5);
  ambient.position.set(1, 0, 0);
  scene.add(ambient);

  const blueLight = new THREE.DirectionalLight(0x59acff, 1.5);
  blueLight.castShadow = true;
  blueLight.shadowDarkness = 0.5;
  blueLight.shadowCameraVisible = true;
  blueLight.shadowCameraRight = 5;
  blueLight.shadowCameraLeft = -5;
  blueLight.shadowCameraTop = 5;
  blueLight.shadowCameraBottom = -5;
  blueLight.position.set(0, 0, 5);

  const redLight = new THREE.DirectionalLight(0xff6c4b, 1.5);
  redLight.castShadow = true;
  redLight.shadowDarkness = 0.5;
  redLight.shadowCameraVisible = true;
  redLight.shadowCameraRight = 5;
  redLight.shadowCameraLeft = -5;
  redLight.shadowCameraTop = 5;
  redLight.shadowCameraBottom = -5;
  redLight.position.set(-5, 0, 0);

  scene.add(blueLight, redLight);

  const material = new THREE.MeshPhongMaterial({ color: 0x505050 });

  const cylinderGeometry = new THREE.CylinderGeometry(0.75, 0.75, 1.75, 32);
  const cylinder = new THREE.Mesh(cylinderGeometry, material);
  cylinder.rotation.z = (90 * Math.PI) / 180;
  cylinder.castShadow = true;
  cylinder.receiveShadow = true;

  scene.add(cylinder);

  const planeGeometry = new THREE.PlaneGeometry(5, 5, 1, 1);

  const plane1 = new THREE.Mesh(planeGeometry, material);
  plane1.position.set(0, 0, -2);
  plane1.receiveShadow = true;

  const plane2 = new THREE.Mesh(planeGeometry, material);
  plane2.position.set(2, 0, 0);
  plane2.rotation.y = -Math.PI / 2;
  plane2.receiveShadow = true;

  scene.add(plane1, plane2);

  function render(time) {
    time *= 0;

    cylinder.rotation.x = time;
    cylinder.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
animation();

//setting the right color when the page is ready
$(() => {
  if (localStorage.getItem("theme") == "dark") {
    //changing the color variable
    backgroundColor = 0x242424;

    //calling the function to apply the modifications
    animation();
  } else if (localStorage.getItem("theme") == "light") {
    backgroundColor = 0xfcffeb;

    animation();
  }
});

//we check if the player enable the dark mode to change the color of the Three.js elements
$(".themeIcon").on("click", () => {
  if (localStorage.getItem("theme") == "dark") {
    backgroundColor = 0x242424;

    animation();
  } else if (localStorage.getItem("theme") == "light") {
    backgroundColor = 0xfcffeb;

    animation();
  }
});
