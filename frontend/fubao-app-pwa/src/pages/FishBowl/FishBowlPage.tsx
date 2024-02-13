import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  FishApi1,
  FishApi2,
  FishApi3,
  FishApi4,
  FishApi5,
  FishApi6,
  FishApi7,
  FishApi8,
  FishApi9,
  FishApi10,
} from "../../store/api";
import { useQueries } from "@tanstack/react-query";

//x: -0.55~0.55, y: -1.15~1.15

// 물고기정보
// 1:참돔
// 2:농어
// 3:전갱이
// 4:숭어
// 5:고등어
// 6:광어
// 7:우럭
// 8:감성돔
// 9:돌돔
// 10:쥐노래미

const FishBowlBox = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
`;

const FishBowlPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mixer1 = useRef<THREE.AnimationMixer | null>(null);
  const mixer2 = useRef<THREE.AnimationMixer | null>(null);
  const mixer3 = useRef<THREE.AnimationMixer | null>(null);
  const mixer4 = useRef<THREE.AnimationMixer | null>(null);
  const mixer5 = useRef<THREE.AnimationMixer | null>(null);
  const mixer6 = useRef<THREE.AnimationMixer | null>(null);
  const mixer7 = useRef<THREE.AnimationMixer | null>(null);
  const mixer8 = useRef<THREE.AnimationMixer | null>(null);
  const model1 = useRef<THREE.Object3D | null>(null);
  const model2 = useRef<THREE.Object3D | null>(null);
  const model3 = useRef<THREE.Object3D | null>(null);
  const model4 = useRef<THREE.Object3D | null>(null);
  const model5 = useRef<THREE.Object3D | null>(null);
  const model6 = useRef<THREE.Object3D | null>(null);
  const model7 = useRef<THREE.Object3D | null>(null);
  const model8 = useRef<THREE.Object3D | null>(null);

  const token = localStorage.getItem("token");
  const results = useQueries({
    queries: [
    { queryKey: ['getFish1'], queryFn: () => FishApi1(token), refetchInterval: 1000 },
    { queryKey: ['getFish2'], queryFn: () => FishApi2(token), refetchInterval: 1000 },
    { queryKey: ['getFish3'], queryFn: () => FishApi3(token), refetchInterval: 1000 },
    { queryKey: ['getFish4'], queryFn: () => FishApi4(token), refetchInterval: 1000 },
    { queryKey: ['getFish5'], queryFn: () => FishApi5(token), refetchInterval: 1000 },
    { queryKey: ['getFish6'], queryFn: () => FishApi6(token), refetchInterval: 1000 },
    { queryKey: ['getFish7'], queryFn: () => FishApi7(token), refetchInterval: 1000 },
    { queryKey: ['getFish8'], queryFn: () => FishApi8(token), refetchInterval: 1000 },
    { queryKey: ['getFish9'], queryFn: () => FishApi9(token), refetchInterval: 1000 },
    { queryKey: ['getFish10'], queryFn: () => FishApi10(token), refetchInterval: 1000 },
  ]
});

  let xspeed: number = 0.0005;
  let yspeed: number = 0.0001;

  let xpos1: number =
    Math.round((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let ypos1: number =
    Math.round((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
  let beforexpos1: number = xpos1;
  let beforeypos1: number = ypos1;
  let sw1: number = 3;
  let ysw1: number = 1;
  let xrand1: number = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let yrand1: number = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;

  let xpos2: number =
    Math.round((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let ypos2: number =
    Math.round((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
  let beforexpos2: number = xpos2;
  let beforeypos2: number = ypos2;
  let sw2: number = 4;
  let ysw2: number = 1;
  let xrand2: number = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let yrand2: number = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;

  let xpos3: number =
    Math.round((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let beforexpos3: number = 0;
  let sw3: number = 3;
  let xrand3: number = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;

  let xpos4: number =
    Math.round((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let ypos4: number =
    Math.round((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
  let beforexpos4: number = 0;
  let beforeypos4: number = -0.6;
  let sw4: number = 3;
  let ysw4: number = 1;
  let xrand4: number = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let yrand4: number = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;

  let xpos5: number =
    Math.round((Math.random() * (1.1 + 1.1) - 1.1) * 1e2) / 1e2;
  let ypos5: number =
    Math.round((Math.random() * (0.5 + 0.5) - 0.5) * 1e2) / 1e2;
  let beforexpos5: number = 0;
  let beforeypos5: number = 0;
  let sw5: number = 3;
  let ysw5: number = 1;
  let xrand5: number = ((Math.random() * (1.1 + 1.1) - 1.1) * 1e2) / 1e2;
  let yrand5: number = ((Math.random() * (0.5 + 0.5) - 0.5) * 1e2) / 1e2;

  let xpos6: number =
    Math.round((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let ypos6: number =
    Math.round((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
  let beforexpos6: number = 0;
  let beforeypos6: number = 0;
  let sw6: number = 3;
  let ysw6: number = 1;
  let xrand6: number = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let yrand6: number = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;

  let xpos7: number =
    Math.round((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let ypos7: number =
    Math.round((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
  let beforexpos7: number = 0;
  let beforeypos7: number = 0;
  let sw7: number = 3;
  let ysw7: number = 1;
  let xrand7: number = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let yrand7: number = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;

  let xpos8: number =
    Math.round((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let ypos8: number =
    Math.round((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
  let beforexpos8: number = 0;
  let beforeypos8: number = 0;
  let sw8: number = 3;
  let ysw8: number = 1;
  let xrand8: number = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
  let yrand8: number = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;

  useEffect(() => {
    const loader1 = new GLTFLoader();
    const loader2 = new GLTFLoader();
    const loader3 = new GLTFLoader();
    const loader4 = new GLTFLoader();
    const loader5 = new GLTFLoader();
    const loader6 = new GLTFLoader();
    const loader7 = new GLTFLoader();
    const loader8 = new GLTFLoader();

    let scene = new THREE.Scene();
    let renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      antialias: true,
    });
    renderer.outputEncoding = THREE.sRGBEncoding;

    let camera = new THREE.PerspectiveCamera(20, 1);
    camera.position.set(0, 0, 8);

    scene.background = new THREE.Color("black");

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();

    scene.add(ambientLight);
    scene.add(directionalLight);

    //1번
    loader1.load("low_poly_mugil/scene.gltf", (gltf1: GLTF) => {
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
    loader2.load("low_poly_salmon/scene.gltf", (gltf2: GLTF) => {
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
    loader3.load("low_poly_flatfish/scene.gltf", (gltf3: GLTF) => {
      model3.current = gltf3.scene;

      // Adjust position, rotation, and scale as needed
      model3.current.position.set(-0.6, -1.2, 0); //1.15
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
    loader4.load("low_poly_barracuda/scene.gltf", (gltf4: GLTF) => {
      model4.current = gltf4.scene;

      // Adjust position, rotation, and scale as needed
      model4.current.position.set(0, 0, 1);
      //model4.current.rotation.set(3, -1.5, 0);  //x: 0~3, y: -1.5

      model4.current.rotation.y += 0;
      model4.current.rotation.x += 1.5; //0~3
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

    //5번
    loader5.load("low_poly_redseabream/scene.gltf", (gltf5: GLTF) => {
      model5.current = gltf5.scene;

      // Adjust position, rotation, and scale as needed
      model5.current.position.set(0, 0, 2);
      //model4.current.rotation.set(3, -1.5, 0);  //x: 0~3, y: -1.5

      model5.current.rotation.y += 0;
      model5.current.rotation.x += 1.5; //0~3
      model5.current.rotation.z -= 1.5;

      model5.current.scale.set(0.45, 0.45, 0.45);

      // Add the model to the scene
      scene.add(model5.current);

      const animations5 = gltf5.animations!;
      mixer5.current = new THREE.AnimationMixer(model5.current);

      animations5.forEach((animation) => {
        const action = mixer5.current!.clipAction(animation);
        action.play();
      });

      animate();
    });

    //6번
    loader6.load("low_poly_stoneseabream/scene.gltf", (gltf6: GLTF) => {
      model6.current = gltf6.scene;

      // Adjust position, rotation, and scale as needed
      model6.current.position.set(0, 0, 0);
      //model4.current.rotation.set(3, -1.5, 0);  //x: 0~3, y: -1.5

      model6.current.rotation.y += 3;
      model6.current.rotation.x -= 1.5;
      model6.current.rotation.z -= -1.5; //-1.5~1.5

      model6.current.scale.set(1, 1, 1);

      // Add the model to the scene
      scene.add(model6.current);

      const animations6 = gltf6.animations!;
      mixer6.current = new THREE.AnimationMixer(model6.current);

      animations6.forEach((animation) => {
        const action = mixer6.current!.clipAction(animation);
        action.play();
      });

      animate();
    });

    //7번
    loader7.load("low_poly_seabass/scene.gltf", (gltf7: GLTF) => {
      model7.current = gltf7.scene;

      // Adjust position, rotation, and scale as needed
      model7.current.position.set(0, 0, 0);
      //model4.current.rotation.set(3, -1.5, 0);  //x: 0~3, y: -1.5

      model7.current.rotation.y += 3;
      model7.current.rotation.x -= 1.5;
      model7.current.rotation.z -= -1.5; //-1.5~1.5

      model7.current.scale.set(0.6, 0.6, 0.6);

      // Add the model to the scene
      scene.add(model7.current);

      const animations7 = gltf7.animations!;
      mixer7.current = new THREE.AnimationMixer(model7.current);

      animations7.forEach((animation) => {
        const action = mixer7.current!.clipAction(animation);
        action.play();
      });

      animate();
    });

    //8번
    loader8.load("low_poly_sebastes/scene.gltf", (gltf8: GLTF) => {
      model8.current = gltf8.scene;

      // Adjust position, rotation, and scale as needed
      model8.current.position.set(0, 0, 0);
      //model4.current.rotation.set(3, -1.5, 0);  //x: 0~3, y: -1.5

      model8.current.rotation.y -= 0;
      model8.current.rotation.x -= 1.5;
      model8.current.rotation.z += -1.5; //-1.5~1.5

      model8.current.scale.set(0.5, 0.5, 0.5);

      // Add the model to the scene
      scene.add(model8.current);

      const animations8 = gltf8.animations!;
      mixer8.current = new THREE.AnimationMixer(model8.current);

      animations8.forEach((animation) => {
        const action = mixer8.current!.clipAction(animation);
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

    window.addEventListener("resize", onWindowResize, false);
    onWindowResize();

    function animate() {
      requestAnimationFrame(animate);

      //1번
      if (mixer1.current) {
        mixer1.current.update(0.002);
        if (model1.current) {
          if (beforexpos1 < xrand1) {
            if (xpos1 >= xrand1) {
              beforexpos1 = xpos1;
              xpos1 -= xspeed;
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
              xpos1 += xspeed;
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
            xpos1 -= xspeed;
          } else if (sw1 === 4) {
            xpos1 += xspeed;
          } else if (sw1 === 5) {
            xrand1 = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
          } else if (sw1 === 6) {
            yrand1 = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
          }

          if (ysw1 === 1) {
            ypos1 += yspeed;
          } else if (ysw1 === 2) {
            ypos1 -= yspeed;
          }

          model1.current.position.set(ypos1, xpos1, 0);
        }
      }

      //2번
      if (mixer2.current) {
        mixer2.current.update(0.003);
        if (model2.current) {
          if (beforexpos2 < xrand2) {
            if (xpos2 >= xrand2) {
              beforexpos2 = xpos2;
              xpos2 -= xspeed;
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
              xpos2 += xspeed;
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
            xpos2 -= xspeed;
          } else if (sw2 === 4) {
            xpos2 += xspeed;
          } else if (sw2 === 5) {
            xrand2 = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
          } else if (sw2 === 6) {
            yrand2 = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
          }

          if (ysw2 === 1) {
            ypos2 += yspeed;
          } else if (ysw2 === 2) {
            ypos2 -= yspeed;
          }
          model2.current.position.set(ypos2, xpos2, -0.5);
        }
      }

      //3번
      if (mixer3.current) {
        mixer3.current.update(0.002);
        if (model3.current) {
          if (beforexpos3 < xrand3) {
            if (xpos3 >= xrand3) {
              beforexpos3 = xpos3;
              xpos3 -= xspeed;
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
              xpos3 += xspeed;
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
            xpos3 += xspeed;
          } else if (sw3 === 4) {
            xpos3 -= xspeed;
          } else if (sw3 === 5) {
            xrand3 = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
          }
          // console.log("bepos:", beforexpos3);
          // console.log("xpos:", xpos3);
          // console.log("xrand:", xrand3);
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
              xpos4 -= xspeed;
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
              xpos4 += xspeed;
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
            xpos4 -= xspeed;
          } else if (sw4 === 4) {
            xpos4 += xspeed;
          } else if (sw4 === 5) {
            xrand4 = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
          } else if (sw4 === 6) {
            yrand4 = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
          }

          if (ysw4 === 1) {
            ypos4 += yspeed;
          } else if (ysw4 === 2) {
            ypos4 -= yspeed;
          }
          model4.current.position.set(ypos4, xpos4, -0.5);
        }
      }

      //5번
      if (mixer5.current) {
        mixer5.current.update(0.003);
        if (model5.current) {
          if (beforexpos5 < xrand5) {
            if (xpos5 >= xrand5) {
              beforexpos5 = xpos5;
              xpos5 -= xspeed;
              sw5 = 5;
            } else {
              if (model5.current.rotation.x < 1.5) {
                sw5 = 1;
              } else {
                sw5 = 4;
              }
            }
          } else if (beforexpos5 > xrand5) {
            if (xpos5 <= xrand5) {
              beforexpos5 = xpos5;
              xpos5 += xspeed;
              sw5 = 5;
            } else {
              if (model5.current.rotation.x > -1.5) {
                sw5 = 2;
              } else {
                sw5 = 3;
              }
            }
          } else if (model5.current.rotation.x < -1.5) {
            sw5 = 4;
            model5.current.rotation.x += 0.07;
          } else if (model5.current.rotation.x > 1.5) {
            sw5 = 3;
            model5.current.rotation.x -= 0.07;
          }

          if (beforeypos5 > yrand5) {
            if (ypos5 <= yrand5) {
              beforeypos5 = ypos5;
              sw5 = 6;
            } else {
              ysw5 = 2;
            }
          } else if (beforeypos5 < yrand5) {
            if (ypos5 >= yrand5) {
              beforeypos5 = ypos5;
              sw5 = 6;
            } else {
              ysw5 = 1;
            }
          }

          if (sw5 === 1) {
            model5.current.rotation.x += 0.07;
          } else if (sw5 === 2) {
            model5.current.rotation.x -= 0.07;
          } else if (sw5 === 3) {
            xpos5 -= xspeed;
          } else if (sw5 === 4) {
            xpos5 += xspeed;
          } else if (sw5 === 5) {
            xrand5 = ((Math.random() * (1.1 + 1.1) - 1.1) * 1e2) / 1e2;
          } else if (sw5 === 6) {
            yrand5 = ((Math.random() * (0.5 + 0.5) - 0.5) * 1e2) / 1e2;
          }

          if (ysw5 === 1) {
            ypos5 += yspeed;
          } else if (ysw5 === 2) {
            ypos5 -= yspeed;
          }
          model5.current.position.set(ypos5, xpos5, 2);
        }
      }

      //6번
      if (mixer6.current) {
        mixer6.current.update(0.003);
        if (model6.current) {
          if (beforexpos6 < xrand6) {
            if (xpos6 > xrand6) {
              beforexpos6 = xpos6;
              xpos6 -= xspeed;
              sw6 = 5;
            } else {
              if (model6.current.rotation.x > -1.5) {
                sw6 = 1;
              } else {
                sw6 = 4;
              }
            }
          } else if (beforexpos6 > xrand6) {
            if (xpos6 < xrand6) {
              beforexpos6 = xpos6;
              xpos6 += xspeed;
              sw6 = 5;
            } else {
              if (model6.current.rotation.x < 1.5) {
                sw6 = 2;
              } else {
                sw6 = 3;
              }
            }
          } else if (model6.current.rotation.x > 1.5) {
            sw6 = 4;
            model6.current.rotation.x -= 0.07;
          } else if (model6.current.rotation.x < -1.5) {
            sw6 = 3;
            model6.current.rotation.x += 0.07;
          }

          if (beforeypos6 > yrand6) {
            if (ypos6 <= yrand6) {
              beforeypos6 = ypos6;
              sw6 = 6;
            } else {
              ysw6 = 2;
            }
          } else if (beforeypos6 < yrand6) {
            if (ypos6 >= yrand6) {
              beforeypos6 = ypos6;
              sw6 = 6;
            } else {
              ysw6 = 1;
            }
          }

          if (sw6 === 1) {
            model6.current.rotation.x -= 0.07;
          } else if (sw6 === 2) {
            model6.current.rotation.x += 0.07;
          } else if (sw6 === 3) {
            xpos6 -= xspeed;
          } else if (sw6 === 4) {
            xpos6 += xspeed;
          } else if (sw6 === 5) {
            xrand6 = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
          } else if (sw6 === 6) {
            yrand6 = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
          }

          if (ysw6 === 1) {
            ypos6 += yspeed;
          } else if (ysw6 === 2) {
            ypos6 -= yspeed;
          }
          model6.current.position.set(ypos6, xpos6, -2);
        }
      }

      //7번
      if (mixer7.current) {
        mixer7.current.update(0.003);
        if (model7.current) {
          if (beforexpos7 < xrand7) {
            if (xpos7 >= xrand7) {
              beforexpos7 = xpos7;
              xpos7 -= xspeed;
              sw7 = 5;
            } else {
              if (model7.current.rotation.x > -1.5) {
                sw7 = 1;
              } else {
                sw7 = 4;
              }
            }
          } else if (beforexpos7 > xrand7) {
            if (xpos7 <= xrand7) {
              beforexpos7 = xpos7;
              xpos7 += xspeed;
              sw7 = 5;
            } else {
              if (model7.current.rotation.x < 1.5) {
                sw7 = 2;
              } else {
                sw7 = 3;
              }
            }
          } else if (model7.current.rotation.x > 1.5) {
            sw7 = 4;
            model7.current.rotation.x += 0.07;
          } else if (model7.current.rotation.x < -1.5) {
            sw7 = 3;
            model7.current.rotation.x -= 0.07;
          }

          if (beforeypos7 > yrand7) {
            if (ypos7 <= yrand7) {
              beforeypos7 = ypos7;
              sw7 = 6;
            } else {
              ysw7 = 2;
            }
          } else if (beforeypos7 < yrand7) {
            if (ypos7 >= yrand7) {
              beforeypos7 = ypos7;
              sw7 = 6;
            } else {
              ysw7 = 1;
            }
          }

          if (sw7 === 1) {
            model7.current.rotation.x -= 0.07;
          } else if (sw7 === 2) {
            model7.current.rotation.x += 0.07;
          } else if (sw7 === 3) {
            xpos7 -= xspeed;
          } else if (sw7 === 4) {
            xpos7 += xspeed;
          } else if (sw7 === 5) {
            xrand7 = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
          } else if (sw7 === 6) {
            yrand7 = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
          }

          if (ysw7 === 1) {
            ypos7 += yspeed;
          } else if (ysw7 === 2) {
            ypos7 -= yspeed;
          }

          model7.current.position.set(ypos7, xpos7, 0.5);
        }
      }

      // 8번
      if (mixer8.current) {
        mixer8.current.update(0.001);
        if (model8.current) {
          if (beforexpos8 < xrand8) {
            if (xpos8 >= xrand8) {
              beforexpos8 = xpos8;
              xpos8 -= xspeed;
              sw8 = 5;
            } else {
              if (model8.current.rotation.x < 1.5) {
                sw8 = 1;
              } else {
                sw8 = 4;
              }
            }
          } else if (beforexpos8 > xrand8) {
            if (xpos8 <= xrand8) {
              beforexpos8 = xpos8;
              xpos8 += xspeed;
              sw8 = 5;
            } else {
              if (model8.current.rotation.x > -1.5) {
                sw8 = 2;
              } else {
                sw8 = 3;
              }
            }
          } else if (model8.current.rotation.x < -1.5) {
            sw8 = 4;
            model8.current.rotation.x += 0.07;
          } else if (model8.current.rotation.x > 1.5) {
            sw8 = 3;
            model8.current.rotation.x -= 0.07;
          }

          if (beforeypos8 > yrand8) {
            if (ypos8 <= yrand8) {
              beforeypos8 = ypos8;
              sw8 = 6;
            } else {
              ysw8 = 2;
            }
          } else if (beforeypos8 < yrand8) {
            if (ypos8 >= yrand8) {
              beforeypos8 = ypos8;
              sw8 = 6;
            } else {
              ysw8 = 1;
            }
          }

          if (sw8 === 1) {
            model8.current.rotation.x += 0.07;
          } else if (sw8 === 2) {
            model8.current.rotation.x -= 0.07;
          } else if (sw8 === 3) {
            xpos8 -= xspeed;
          } else if (sw8 === 4) {
            xpos8 += xspeed;
          } else if (sw8 === 5) {
            xrand8 = ((Math.random() * (1.15 + 1.15) - 1.15) * 1e2) / 1e2;
          } else if (sw8 === 6) {
            yrand8 = ((Math.random() * (0.55 + 0.55) - 0.55) * 1e2) / 1e2;
          }

          if (ysw8 === 1) {
            ypos8 += yspeed;
          } else if (ysw8 === 2) {
            ypos8 -= yspeed;
          }

          model8.current.position.set(ypos8, xpos8, 3);
        }
      }

      renderer.render(scene, camera);
    }
    return () => {
      window.removeEventListener("resize", onWindowResize);
      // cleanup logic if needed
    };
  }, []); // Dependencies array is empty to run the effect only once on mount


  const fishInfoArray: number[] = [];
  results.forEach((result) => {
    if (result.isPending) {
      // 로딩 상태 처리
      console.log('Loading...');
    } else if (result.error) {
      // 에러 상태 처리
      console.error('Error fetching data:', result.error);
    } else if (result.data) {
      // 데이터가 존재하는 경우, 안전하게 접근
      console.log('FishId:', result.data.fish.id);
      console.log('FishCNT:', result.data.count);

      fishInfoArray[result.data.fish.id - 1] = result.data.count;
    }
  });

  console.log('fishInfoArray:', fishInfoArray);

  return (
    <FishBowlBox>
      <canvas ref={canvasRef}></canvas>
    </FishBowlBox>
  );
};

export default FishBowlPage;
