import React, { useEffect, useRef } from 'react'
import styled from "styled-components";
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


//x: -0.55~0.55, y: -1.15~1.15

const FishBowlBox = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const FishBowlPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mixer1 = useRef<THREE.AnimationMixer | null>(null);
  const mixer2 = useRef<THREE.AnimationMixer | null>(null);
  const model1 = useRef<THREE.Object3D | null>(null);
  const model2 = useRef<THREE.Object3D | null>(null);

  let xpos1: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
  let ypos1: number = Math.round(((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
  let beforexpos1: number = xpos1;
  let beforeypos1: number = ypos1;
  let sw1: number = 3;
  let ysw1: number = 1;
  let cnt1: number = 0;
  let xrand1: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
  let yrand1: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

  let xpos2: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
  let ypos2: number = Math.round(((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
  let beforexpos2: number = xpos2;
  let beforeypos2: number = ypos2;
  let sw2: number = 4;
  let ysw2: number = 1;
  let cnt2: number = 0;
  let xrand2: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
  let yrand2: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

  useEffect(() => {
    const loader1 = new GLTFLoader();
    const loader2 = new GLTFLoader();

    let scene = new THREE.Scene();
    let renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      antialias: true
    });
    renderer.outputEncoding = THREE.sRGBEncoding;

    let camera = new THREE.PerspectiveCamera(20, 1);
    camera.position.set(0, 0, 8);

    scene.background = new THREE.Color('black');

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();

    scene.add(ambientLight);
    scene.add(directionalLight);

    loader1.load('low_poly_mugil/scene.gltf', (gltf1: GLTF) => {
      model1.current = gltf1.scene;

      //위치
      model1.current.position.set(0, 0, 0);

      //물고기 옆면이 보이게
      model1.current.rotation.y += 0;
      model1.current.rotation.x -= 1.5;
      model1.current.rotation.z -= 1.5;

      //씬에 모델 추가
      scene.add(model1.current);

      const animations1 = gltf1.animations!;
      mixer1.current = new THREE.AnimationMixer(model1.current);

      animations1.forEach((animation) => {
        const action = mixer1.current!.clipAction(animation);
        action.play();
      });

      animate();
    });

    loader2.load('low_poly_mugil_blue/scene.gltf', (gltf2: GLTF) => {
      model2.current = gltf2.scene;

      //위치
      model2.current.position.set(-0.55, -1.15, 0);

      //물고기 옆면이 보이게
      model2.current.rotation.y += 0;
      model2.current.rotation.x -= 1.5;
      model2.current.rotation.z -= 1.5;

      //씬에 모델 추가
      scene.add(model2.current);

      const animations1 = gltf2.animations!;
      mixer2.current = new THREE.AnimationMixer(model2.current);

      animations1.forEach((animation) => {
        const action = mixer2.current!.clipAction(animation);
        action.play();
      });

      animate();
    });

    function onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener('resize', onWindowResize, false);
    onWindowResize();

    function animate() {
      requestAnimationFrame(animate);

      //1번
      if (mixer1.current) {
        mixer1.current.update(0.01);
        if (model1.current) {
          if (beforexpos1 < xrand1) {
            if (xpos1 >= xrand1) {
              beforexpos1 = xpos1;
              xpos1 -= 0.002;
              sw1 = 5;
            } else {
              if (model1.current.rotation.x > -1.5) {
                sw1 = 1;
              } else {
                sw1 = 4;
              }
            }
          } else if (beforexpos1 > xrand1) {
            if (xpos1 <= xrand1) {
              beforexpos1 = xpos1;
              xpos1 += 0.002;
              sw1 = 5;
            } else {
              if (model1.current.rotation.x < 1.5) {
                sw1 = 2;
              } else {
                sw1 = 3;
              }
            }
          } else if (model1.current.rotation.x > 1.5) {
            sw1 = 4;
            model1.current.rotation.x += 0.07;
          } else if (model1.current.rotation.x < -1.5) {
            sw1 = 3;
            model1.current.rotation.x -= 0.07;
          }

          if (beforeypos1 > yrand1) {
            if (ypos1 <= yrand1) {
              beforeypos1 = ypos1;
              sw1 = 6;
            } else {
              ysw1 = 2;
            }
          } else if (beforeypos1 < yrand1) {
            if (ypos1 >= yrand1) {
              beforeypos1 = ypos1;
              sw1 = 6;
            } else {
              ysw1 = 1;
            }
          }

          if (sw1 === 1) {
            model1.current.rotation.x -= 0.07;
          } else if (sw1 === 2) {
            model1.current.rotation.x += 0.07;
          } else if (sw1 === 3) {
            xpos1 -= 0.002;
          } else if (sw1 === 4) {
            xpos1 += 0.002;
          } else if (sw1 === 5) {
            xrand1 = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
          } else if (sw1 === 6) {
            yrand1 = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
          }

          if (ysw1 === 1) {
            ypos1 += 0.0005;
          } else if (ysw1 === 2) {
            ypos1 -= 0.0005;
          }

          model1.current.position.set(ypos1, xpos1, 0);
        }
      }

      //2번
      if (mixer2.current) {
        mixer2.current.update(0.01);
        if (model2.current) {
          if (beforexpos2 < xrand2) {
            if (xpos2 >= xrand2) {
              beforexpos2 = xpos2;
              xpos2 -= 0.002;
              sw2 = 5;
            } else {
              if (model2.current.rotation.x > -1.5) {
                sw2 = 1;
              } else {
                sw2 = 4;
              }
            }
          } else if (beforexpos2 > xrand2) {
            if (xpos2 <= xrand2) {
              beforexpos2 = xpos2;
              xpos2 += 0.002;
              sw2 = 5;
            } else {
              if (model2.current.rotation.x < 1.5) {
                sw2 = 2;
              } else {
                sw2 = 3;
              }
            }
          } else if (model2.current.rotation.x > 1.5) {
            sw2 = 4;
            model2.current.rotation.x += 0.07;
          } else if (model2.current.rotation.x < -1.5) {
            sw2 = 3;
            model2.current.rotation.x -= 0.07;
          }

          if (beforeypos2 > yrand2) {
            if (ypos2 <= yrand2) {
              beforeypos2 = ypos2;
              sw2 = 6;
            } else {
              ysw2 = 2;
            }
          } else if (beforeypos2 < yrand2) {
            if (ypos2 >= yrand2) {
              beforeypos2 = ypos2;
              sw2 = 6;
            } else {
              ysw2 = 1;
            }
          }

          if (sw2 === 1) {
            model2.current.rotation.x -= 0.07;
          } else if (sw2 === 2) {
            model2.current.rotation.x += 0.07;
          } else if (sw2 === 3) {
            xpos2 -= 0.002;
          } else if (sw2 === 4) {
            xpos2 += 0.002;
          } else if (sw2 === 5) {
            xrand2 = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
          } else if (sw2 === 6) {
            yrand2 = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
          }

          if (ysw2 === 1) {
            ypos2 += 0.0005;
          } else if (ysw2 === 2) {
            ypos2 -= 0.0005;
          }
          model2.current.position.set(ypos2, xpos2, 0);
        }
      }
      renderer.render(scene, camera);
    }
    return () => {
      window.removeEventListener('resize', onWindowResize);
      // cleanup logic if needed
    };
  }, []); // Dependencies array is empty to run the effect only once on mount

  return (
    <FishBowlBox>
      <canvas ref={canvasRef}></canvas>
    </FishBowlBox>
  );
};

export default FishBowlPage