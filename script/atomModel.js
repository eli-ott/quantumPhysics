import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

const aristote = () => {
    const canvas = document.querySelector('#aristoteAtom');
    var renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    });

    renderer.setClearColor(0xfcffeb, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(500, 250);

    const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
    camera.position.z = 1.8;

    const scene = new THREE.Scene();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const light = new THREE.DirectionalLight(0xcecece, 1.5);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xcecece, 0.5);
    ambient.position.set(0, 0, 0);
    scene.add(ambient);

    const geometry = new THREE.BoxGeometry(2, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0x505050 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    function render(time) {
        time *= 0.0001;

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
aristote();


const dalton = () => {
    const canvas = document.querySelector('#daltonAtom');
    var renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    });

    renderer.setClearColor(0xfcffeb, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(500, 250);

    const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
    camera.position.z = 2;

    const scene = new THREE.Scene();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const light = new THREE.DirectionalLight(0xcecece, .5);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xcecece, 0.5);
    ambient.position.set(0, 0, 0);
    scene.add(ambient);

    var geometry = new THREE.SphereGeometry(1, 35, 35, 0, Math.PI * 2, 0, Math.PI * 2);
    var material = new THREE.MeshPhongMaterial({ color: 0xcecece });
    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    function render(time) {
        time *= 0.0005;

        sphere.rotation.x = time;
        sphere.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
dalton();