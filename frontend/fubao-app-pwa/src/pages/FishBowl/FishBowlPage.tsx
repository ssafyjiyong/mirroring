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
  const mixer3 = useRef<THREE.AnimationMixer | null>(null);
  const mixer4 = useRef<THREE.AnimationMixer | null>(null);
  const model1 = useRef<THREE.Object3D | null>(null);
  const model2 = useRef<THREE.Object3D | null>(null);
  const model3 = useRef<THREE.Object3D | null>(null);
  const model4 = useRef<THREE.Object3D | null>(null);

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

  let xpos3: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
  let ypos3: number = Math.round(((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
  let beforexpos3: number = 0;
  let beforeypos3: number = -0.6;
  let sw3: number = 3;
  let ysw3: number = 1;
  let cnt3: number = 0;
  let xrand3: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
  let yrand3: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

  let xpos4: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
  let ypos4: number = Math.round(((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
  let beforexpos4: number = 0;
  let beforeypos4: number = -0.6;
  let sw4: number = 3;
  let ysw4: number = 1;
  let cnt4: number = 0;
  let xrand4: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
  let yrand4: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

  useEffect(() => {
    const loader1 = new GLTFLoader();
    const loader2 = new GLTFLoader();
    const loader3 = new GLTFLoader();
    const loader4 = new GLTFLoader();

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

    //1번
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

    //2번
    loader2.load('low_poly_salmon/scene.gltf', (gltf2: GLTF) => {
      model2.current = gltf2.scene;

      model2.current.scale.set(0.15, 0.15, 0.15);

      //위치
      model2.current.position.set(-0.55, -1.15, -0.5);

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

    //3번
    loader3.load('low_poly_flatfish/scene.gltf', (gltf3: GLTF) => {
      model3.current = gltf3.scene;

      // Adjust position, rotation, and scale as needed
      model3.current.position.set(-0.6, -1.2, 0);//1.15
      //model3.current.rotation.set(0, 1.5, -1.5);
      //물고기 옆면이 보이게
      model3.current.rotation.y += 2.6; //-2~-1.1 -2:x++, -1.1:x--
      model3.current.rotation.x += 0; //0~3 0:x++, 3:x--
      model3.current.rotation.z += 1.5;

      model3.current.scale.set(0.7, 0.7, 0.7);

      // Add the model to the scene
      scene.add(model3.current);

      const animations3 = gltf3.animations!;
      mixer3.current = new THREE.AnimationMixer(model3.current);

      animations3.forEach((animation) => {
        const action = mixer3.current!.clipAction(animation);
        action.play();
      });

      animate();
    });

    //4번
    loader4.load('low_poly_barracuda/scene.gltf', (gltf4: GLTF) => {
      model4.current = gltf4.scene;

      // Adjust position, rotation, and scale as needed
      model4.current.position.set(0, 0, 1);
      //model4.current.rotation.set(3, -1.5, 0);  //x: 0~3, y: -1.5

      model4.current.rotation.y += 0;
      model4.current.rotation.x += 1.5;  //0~3
      model4.current.rotation.z -= 1.5;

      model4.current.scale.set(0.15, 0.15, 0.15);

      // Add the model to the scene
      scene.add(model4.current);

      const animations4 = gltf4.animations!;
      mixer4.current = new THREE.AnimationMixer(model4.current);

      animations4.forEach((animation) => {
        const action = mixer4.current!.clipAction(animation);
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
        mixer1.current.update(0.005);
        if (model1.current) {
          if (beforexpos1 < xrand1) {
            if (xpos1 >= xrand1) {
              beforexpos1 = xpos1;
              xpos1 -= 0.0015;
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
              xpos1 += 0.0015;
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
            xpos1 -= 0.0015;
          } else if (sw1 === 4) {
            xpos1 += 0.0015;
          } else if (sw1 === 5) {
            xrand1 = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
          } else if (sw1 === 6) {
            yrand1 = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
          }

          if (ysw1 === 1) {
            ypos1 += 0.00025;
          } else if (ysw1 === 2) {
            ypos1 -= 0.00025;
          }

          model1.current.position.set(ypos1, xpos1, 0);
        }
      }

      //2번
      if (mixer2.current) {
        mixer2.current.update(0.008);
        if (model2.current) {
          if (beforexpos2 < xrand2) {
            if (xpos2 >= xrand2) {
              beforexpos2 = xpos2;
              xpos2 -= 0.0015;
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
              xpos2 += 0.0015;
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
            xpos2 -= 0.0015;
          } else if (sw2 === 4) {
            xpos2 += 0.0015;
          } else if (sw2 === 5) {
            xrand2 = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
          } else if (sw2 === 6) {
            yrand2 = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
          }

          if (ysw2 === 1) {
            ypos2 += 0.00025;
          } else if (ysw2 === 2) {
            ypos2 -= 0.00025;
          }
          model2.current.position.set(ypos2, xpos2, -0.5);
        }
      }

      //3번
      if (mixer3.current) {
        mixer3.current.update(0.005);
        if (model3.current) {
          if (beforexpos3 < xrand3) {
            if (xpos3 >= xrand3) {
              beforexpos3 = xpos3;
              xpos3 -= 0.0015;
              sw3 = 5;
            } else {
              if (model3.current.rotation.x > 0) {
                sw3 = 1;
              } else {
                sw3 = 3;
              }
            }
          } else if (beforexpos3 > xrand3) {
            if (xpos3 <= xrand3) {
              beforexpos3 = xpos3;
              xpos3 += 0.0015;
              sw3 = 5;
            } else {
              if (model3.current.rotation.x < 3) {
                sw3 = 2;
              } else {
                sw3 = 4;
              }
            }
          } else if (model3.current.rotation.x < 0) {
            sw3 = 4;
            model3.current.rotation.x += 0.07;
          } else if (model3.current.rotation.x > 3) {
            sw3 = 3;
            model3.current.rotation.x -= 0.07;
          }

          //up
          if (sw3 === 1) {
            if (model3.current.rotation.y < 2.6) {
              model3.current.rotation.x -= 0.07;
              model3.current.rotation.y += 0.2;
            } else {
              model3.current.rotation.x -= 0.07;
            }
          }
          //down
          else if (sw3 === 2) {
            if (model3.current.rotation.y > -2.6) {
              model3.current.rotation.x += 0.07;
              model3.current.rotation.y -= 0.2;
            } else {
              model3.current.rotation.x += 0.07;
            }
          } else if (sw3 === 3) {
            xpos3 += 0.0015;
          } else if (sw3 === 4) {
            xpos3 -= 0.0015;
          } else if (sw3 === 5) {
            xrand3 = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
          }
          // console.log("bepos:", beforexpos3);
          // console.log("xpos:", xpos3);
          // console.log("xrand:", xrand3);
          console.log("x:", model3.current.rotation.x);
          console.log("y:", model3.current.rotation.y);
          model3.current.position.set(-0.6, xpos3, 0);
        }
      }

      //4번
      if (mixer4.current) {
        mixer4.current.update(0.02);
        if (model4.current) {
          if (beforexpos4 < xrand4) {
            if (xpos4 >= xrand4) {
              beforexpos4 = xpos4;
              xpos4 -= 0.0015;
              sw4 = 5;
            } else {
              if (model4.current.rotation.x > -1.5) {
                sw4 = 1;
              } else {
                sw4 = 4;
              }
            }
          } else if (beforexpos4 > xrand4) {
            if (xpos4 <= xrand4) {
              beforexpos4 = xpos4;
              xpos4 += 0.0015;
              sw4 = 5;
            } else {
              if (model4.current.rotation.x < 1.5) {
                sw4 = 2;
              } else {
                sw4 = 3;
              }
            }
          } else if (model4.current.rotation.x > 1.5) {
            sw4 = 4;
            model4.current.rotation.x += 0.07;
          } else if (model4.current.rotation.x < -1.5) {
            sw4 = 3;
            model4.current.rotation.x -= 0.07;
          }

          if (beforeypos4 > yrand4) {
            if (ypos4 <= yrand4) {
              beforeypos4 = ypos4;
              sw4 = 6;
            } else {
              ysw4 = 2;
            }
          } else if (beforeypos4 < yrand4) {
            if (ypos4 >= yrand4) {
              beforeypos4 = ypos4;
              sw4 = 6;
            } else {
              ysw4 = 1;
            }
          }

          if (sw4 === 1) {
            model4.current.rotation.x -= 0.07;
          } else if (sw4 === 2) {
            model4.current.rotation.x += 0.07;
          } else if (sw4 === 3) {
            xpos4 -= 0.0015;
          } else if (sw4 === 4) {
            xpos4 += 0.0015;
          } else if (sw4 === 5) {
            xrand4 = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
          } else if (sw4 === 6) {
            yrand4 = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
          }

          if (ysw4 === 1) {
            ypos4 += 0.00025;
          } else if (ysw4 === 2) {
            ypos4 -= 0.00025;
          }
          model4.current.position.set(ypos4, xpos4, -0.5);
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