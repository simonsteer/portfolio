export default function() {
  // Create a new scene and set the camera's perspective
  // 75 => the amount of the scene in view
  // window.innerWidth / window.innerHeight => use this as the standard for now
  // 0.1, 1000 => represents the field of depth (min, max) that objects will render within
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);

  // Pass 'true' to the 'alpha' parameter to gain access to transparency
  let renderer = new THREE.WebGLRenderer({
    alpha: true
  });

  // Set the clear color and its opacity
  renderer.setClearColor(0xffffff, 1);

  renderer.setSize(window.innerWidth, window.innerHeight);
  // Appends a <canvas> element to the body of the document
  document.body.appendChild(renderer.domElement);


  let geometry = new THREE.BoxGeometry(7, 7, 7);
  let material = new THREE.MeshBasicMaterial({
    color: 0xe6e6e6,
    wireframe: true
  });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.0008;
    cube.rotation.y += 0.001;
    cube.rotation.z += 0.0009;
    renderer.render(scene, camera);
  }
  animate();

  // A function which allows the render to adjust to window resizing
  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

}