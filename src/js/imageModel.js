import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// create the scene

export const imageModel = () => {
    const container = document.querySelector(".modelImage")

    let img

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1000)
camera.position.z = 1
camera.rotation.x = Math.PI / 2

// lights

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(2,4,5);
scene.add(directionalLight);

const light1 = new THREE.PointLight(0xffffff, 1.5);
light1.position.set(0, 3, 3);
scene.add(light1);

const light2 = new THREE.PointLight(0xffffff, 1.5);
light2.position.set(-3, -3, 3);
scene.add(light2);


const renderer = new THREE.WebGLRenderer({antialias:true, alpha: true})
renderer.physicallyCorrectLights = true
renderer.setClearColor(0x000000,0)
renderer.setSize(window.innerWidth,window.innerHeight)
container.appendChild(renderer.domElement)


// loading the car object

const twoloader = new GLTFLoader();
twoloader.load('../../src/assets/3d_clipart_-_webdev/scene.gltf', function(gltf) {
  img = gltf.scene.children[0]
  img.scale.set(2.1, 1.7, 2.1)
  
  if(window.innerWidth <= 1200){
  img.scale.set(1.8, 1.6, 2)
  camera.position.z = 6
  camera.position.x = -3
  }
  if(window.innerWidth <= 1024){
    img.scale.set(1.6, 1.4, 2)
    }
    if(window.innerWidth <= 991){
      img.scale.set(1.5, 1.4, 1.8)
      camera.position.z = 5
      camera.position.y = 5
      camera.position.x = 1
      }

  if(window.innerWidth <= 768){
          img.scale.set(1.1, 1, 1.1)
          camera.position.z = 0
          camera.position.y = 5
          camera.position.x = 23
          }
  if(window.innerWidth <= 617){
    img.scale.set(1.4, 1.2, 1.4)
    camera.position.z = 0
    camera.position.y = 5
    camera.position.x = 22
  }
  if(window.innerWidth <= 450){
    img.scale.set(1.2, 1, 1.2)
    camera.position.z = 5.8
    camera.position.y = 1
    camera.position.x = 24
  }
  if(window.innerWidth <= 365){
    img.scale.set(1.2, 1, 1.2)
    camera.position.z = 6.3
    camera.position.y = 1
    camera.position.x = 24
  }

  img.position.set(29, 45, -5);
  img.rotation.y = -0.1
  img.rotation.x = 0.2
  img.rotation.z = -0.5
  scene.add(gltf.scene);
  renderScene();
});

// responsive the screen
window.addEventListener('resize', () => {

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})



   let animationId

   const renderScene = () => {

    animationId = requestAnimationFrame(renderScene)
    
    if(img)
    {
        img.rotation.z += 0.002
    }
    renderer.render(scene,camera)
}

return () => {
    cancelAnimationFrame(animationId);
    scene.remove(img);
};
}

