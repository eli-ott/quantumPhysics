import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

const democrite = () => {
    const canvas = document.querySelector('#democriteAtom');
    const renderer = new THREE.WebGLRenderer({
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
    ambient.position.set(1, 0, 0);
    scene.add(ambient);

    const rectangleGeometry = new THREE.BoxGeometry(2, 1, 1);
    const rectangleMaterial = new THREE.MeshPhongMaterial({ color: 0x505050, wireframe: true });
    const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    scene.add(rectangle);

    let material = new THREE.MeshPhongMaterial({ color: 0x505050 });

    let sphereGeometry = new THREE.SphereGeometry(0.25, 35, 35, 0, Math.PI * 2, Math.PI * 2);
    let sphere = new THREE.Mesh(sphereGeometry, material);
    sphere.position.set(-0.75, -0.25, -0.25);
    let sphere2 = sphere.clone();
    sphere2.position.set(0.75, 0.25, 0.25);
    let sphere3 = sphere.clone();
    sphere3.position.set(-0.25, 0.25, 0.25);
    let sphere4 = sphere.clone();
    sphere4.position.set(0.25, -0.25, -0.25);
    rectangle.add(sphere, sphere2, sphere3, sphere4);


    let tetrahedronGeometry = new THREE.TetrahedronGeometry(0.35, 0);
    let tetrahedron = new THREE.Mesh(tetrahedronGeometry, material);
    tetrahedron.position.set(-0.65, -0.25, 0.25);
    let tetrahedron2 = tetrahedron.clone();
    tetrahedron2.position.set(0.75, -0.25, 0.25);
    let tetrahedron3 = tetrahedron.clone();
    tetrahedron3.position.set(-0.25, 0.25, -0.25);
    let tetrahedron4 = tetrahedron.clone();
    tetrahedron4.position.set(0.25, 0.25, 0.25);
    rectangle.add(tetrahedron, tetrahedron2, tetrahedron3, tetrahedron4);

    let octahedronGeometry = new THREE.OctahedronGeometry(0.25, 0);
    let octahedron = new THREE.Mesh(octahedronGeometry, material);
    octahedron.position.set(0.75, 0.25, -0.25)
    let octahedron2 = octahedron.clone();
    octahedron2.position.set(-0.75, 0.25, 0.25);
    let octahedron3 = octahedron.clone();
    octahedron3.position.set(0.25, -0.25, 0.25);
    let octahedron4 = octahedron.clone();
    octahedron4.position.set(-0.25, -0.25, -0.25);
    rectangle.add(octahedron, octahedron2, octahedron3, octahedron4);

    let cubeGeometry = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    let cube = new THREE.Mesh(cubeGeometry, material);
    cube.position.set(0.75, -0.25, -0.25);
    let cube2 = cube.clone();
    cube2.position.set(-0.75, 0.25, -0.25);
    let cube3 = cube.clone();
    cube3.position.set(0.25, 0.25, -0.25);
    let cube4 = cube.clone();
    cube4.position.set(-0.25, -0.25, 0.25);
    rectangle.add(cube, cube2, cube3, cube4);

    function render(time) {
        time *= 0.0001;

        rectangle.rotation.x = time;
        rectangle.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
democrite();

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
    ambient.position.set(1, 0, 0);
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
    camera.position.z = 1.8;

    const scene = new THREE.Scene();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const light = new THREE.DirectionalLight(0xcecece, .5);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xcecece, 0.5);
    ambient.position.set(1, 0, 0);
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

const thomson = () => {
    const canvas = document.querySelector('#thomsonAtom');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: TextTrackCue
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

    const ambient = new THREE.AmbientLight(0xcecece, 0.5);
    ambient.position.set(0, 0, 5);

    scene.add(light, ambient);

    let sphereGeometry = new THREE.SphereGeometry(1, 20, 20, 0, Math.PI * 2, Math.PI * 2);
    let sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x505050, wireframe: true });
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    let electronsGeometry = new THREE.SphereGeometry(0.2, 35, 35, 0, Math.PI * 2, Math.PI * 2);
    let electronsMaterial = new THREE.MeshPhongMaterial({ color: 0x59acff });
    let electron = new THREE.Mesh(electronsGeometry, electronsMaterial);
    electron.position.set(-0.5, -0.25, 0.35);
    let electron2 = electron.clone();
    electron2.position.set(0.35, -0.35, 0.5);
    let electron3 = electron.clone();
    electron3.position.set(-0.1, -0.1, -0.4);
    let electron4 = electron.clone();
    electron4.position.set(0.15, 0.5, -0.2)
    sphere.add(electron, electron2, electron3, electron4);

    function render(time) {
        time *= 0.0001;

        sphere.rotation.x = time;
        sphere.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
thomson();

const rutherford = () => {
  const canvas = document.querySelector('#rutherfordAtom');
  const renderer = new THREE.WebGLRenderer({
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
  const ambient = new THREE.AmbientLight(0xcecece, 0.5);
  ambient.position.set(0, 0, 5);

  scene.add(light, ambient);

  const group = new THREE.Group();

  let protonGeometry = new THREE.SphereGeometry(0.1, 35, 35, 0, Math.PI * 2, Math.PI * 2);
  let protonMaterial = new THREE.MeshPhongMaterial({ color: 0x505050 });
  let proton = new THREE.Mesh(protonGeometry, protonMaterial);
  proton.position.set(-0.1, 0.01, 0);
  let proton2 = proton.clone()
  proton2.position.set(-0.05, -0.05, -0.075);
  let proton3 = proton.clone()
  proton3.position.set(0.1, -0.05, 0);
  let proton4 = proton.clone()
  proton4.position.set(0.05, 0.01, 0.075);
  group.add(proton, proton2, proton3, proton4);

  let electronsGeometry = new THREE.SphereGeometry(0.1, 35, 35, 0, Math.PI * 2, Math.PI * 2);
  let electronsMaterial = new THREE.MeshPhongMaterial({ color: 0x59acff });
  let electron = new THREE.Mesh(electronsGeometry, electronsMaterial);
  electron.position.set(-0.5, 0.5, -0.2);
  let electron2 = electron.clone();
  electron2.position.set(0.75, -0.35, 0.15);
  let electron3 = electron.clone();
  electron3.position.set(-0.35, -0.6, 0.3);
  let electron4 = electron.clone();
  electron4.position.set(0.15, 0.75, 0);
  group.add(electron, electron2, electron3, electron4);

  scene.add(group);

  function render(time) {
    time *= 0.0001;

    group.rotation.x = time;
    group.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
rutherford();