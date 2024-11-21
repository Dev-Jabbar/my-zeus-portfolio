import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const width = sceneRef.current.offsetWidth;
    const height = sceneRef.current.offsetHeight;

    // Scene and Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    sceneRef.current.appendChild(renderer.domElement);

    // Load Textures
    const textureLoader = new THREE.TextureLoader();
    const frontTexture = textureLoader.load("/VINTAGE.jpg");
    const backTexture = textureLoader.load("/innovation.png");

    // Front Material
    const frontMaterial = new THREE.MeshBasicMaterial({
      map: frontTexture,
      side: THREE.FrontSide, // Only visible from the front
    });

    // Back Material
    const backMaterial = new THREE.MeshBasicMaterial({
      map: backTexture,
      side: THREE.BackSide, // Only visible from the back
    });

    // Geometry
    const geometry = new THREE.PlaneGeometry(3, 3);

    // Mesh
    const frontPlane = new THREE.Mesh(geometry, frontMaterial);
    const backPlane = new THREE.Mesh(geometry, backMaterial);

    // Add planes
    scene.add(frontPlane);
    scene.add(backPlane);

    // Lighting (optional)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      frontPlane.rotation.y += 0.01;
      backPlane.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on Unmount
    return () => {
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={sceneRef} style={{ width: "100%", height: "500px" }} />;
};

export default ThreeScene;
