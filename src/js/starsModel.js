import * as THREE from 'three';

// create the scene

export const animate = () => {
    const container = document.querySelector(".stars")

    let velocity,acceleration,i
    let starsCount = 6000

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1000)
camera.position.z = 1
camera.rotation.x = Math.PI / 2


const renderer = new THREE.WebGLRenderer({antialias:true})
renderer.physicallyCorrectLights = true
renderer.setSize(window.innerWidth,window.innerHeight)
container.appendChild(renderer.domElement)


// loading the model 
const loader = new THREE.TextureLoader().load("../../src/assets/—Pngtree—white circle background_6044507.png")

// geometry for star model
const geoStar = new THREE.BufferGeometry()

const positions = new Float32Array(3 * starsCount)
 velocity = new Float32Array(starsCount)
 acceleration = new Float32Array(starsCount)

// for loop for star numbers
for ( i = 0; i < 6000; i++) {
    // random position for the stars
    positions[i * 3] = Math.random() * 600 - 300;
    positions[i * 3 + 1] = Math.random() * 600 - 300;
    positions[i * 3 + 2] = Math.random() * 600 - 300;

    // setting the velocity and acceleration
    velocity[i] = 0
    acceleration[i] = 0.02
    }

    // adding position to geoStar
    geoStar.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    

// material for start model
const matStar = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.9,
    map: loader,
})

const stars = new THREE.Points(geoStar,matStar)
scene.add(stars)



// responsive the screen
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})


   let animationId

   const renderScene = () => {

    animationId = requestAnimationFrame(renderScene)
    
    // Update positions
    for (let i = 0; i < starsCount; i++) {
      velocity[i] -= acceleration[i];
      positions[i * 3 + 1] += velocity[i]; // Update Y position
      if (positions[i * 3 + 1] < -200) {
          positions[i * 3 + 1] = 200;
          velocity[i] = 0;
      }
  }

  // mark positions attribute as needing an update
  geoStar.attributes.position.needsUpdate = true

  // Rotate stars
  stars.rotation.y += 0.002
    
    renderer.render(scene,camera)
}

renderScene()

return () => {
    cancelAnimationFrame(animationId);
    scene.remove(stars);
};
}
