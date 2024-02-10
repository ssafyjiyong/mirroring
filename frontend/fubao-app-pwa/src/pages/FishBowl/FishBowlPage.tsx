import React, { useEffect, useRef, useState } from "react";
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
let animationId: number | null = null;
let xspeed: number = 0.0025;
let yspeed: number = 0.0005;
let rotationvalue: number = 0.25;
let anispeed: number = 0.02;
const avg: number = 0.9;
let cnt = 0;

let check: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let visited: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let csw: number = 1;

let xpos1: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let ypos1: number = 1.5;
let beforexpos1: number = xpos1;
let beforeypos1: number = ypos1;
let sw1: number = 3;
let ysw1: number = 1;
let xrand1: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let yrand1: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
// let yrand1: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

let xpos2: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let ypos2: number = 1.5;
let beforexpos2: number = xpos2;
let beforeypos2: number = ypos2;
let sw2: number = 3;
let ysw2: number = 1;
let xrand2: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let yrand2: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

let xpos3: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let ypos3: number = 1.5;
let beforexpos3: number = xpos3;
let beforeypos3: number = ypos3;
let sw3: number = 3;
let ysw3: number = 1;
let xrand3: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let yrand3: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

let xpos4: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let ypos4: number = 1.5;
let beforexpos4: number = xpos4;
let beforeypos4: number = ypos4;
let sw4: number = 3;
let ysw4: number = 1;
let xrand4: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let yrand4: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

let xpos5: number = Math.round(((Math.random() * (1.1 + 1.1)) - 1.1) * 1e2) / 1e2;
let ypos5: number = 1.5;
let beforexpos5: number = 0;
let beforeypos5: number = 0;
let sw5: number = 3;
let ysw5: number = 1;
let xrand5: number = (((Math.random() * (1.1 + 1.1)) - 1.1) * 1e2) / 1e2;
let yrand5: number = (((Math.random() * (0.5 + 0.5)) - 0.5) * 1e2) / 1e2;

let xpos6: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let ypos6: number = 1.5;
let beforexpos6: number = xpos6;
let beforeypos6: number = ypos6;
let sw6: number = 3;
let ysw6: number = 1;
let xrand6: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let yrand6: number = -0.6;

let xpos7: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let ypos7: number = 1.5;
let beforexpos7: number = xpos7;
let beforeypos7: number = ypos7;
let sw7: number = 3;
let ysw7: number = 1;
let xrand7: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let yrand7: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

let xpos8: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let ypos8: number = 1.5;
let beforexpos8: number = 0;
let beforeypos8: number = 0;
let sw8: number = 3;
let ysw8: number = 1;
let xrand8: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let yrand8: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

let xpos9: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let ypos9: number = 1.5;
let beforexpos9: number = xpos9;
let beforeypos9: number = ypos9;
let sw9: number = 3;
let ysw9: number = 1;
let xrand9: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let yrand9: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

let xpos10: number = Math.round(((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let ypos10: number = 1.5;
let beforexpos10: number = xpos1;
let beforeypos10: number = ypos1;
let sw10: number = 3;
let ysw10: number = 1;
let xrand10: number = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
let yrand10: number = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;

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
  const mixer9 = useRef<THREE.AnimationMixer | null>(null);
  const mixer10 = useRef<THREE.AnimationMixer | null>(null);
  const model1 = useRef<THREE.Object3D | null>(null);
  const model2 = useRef<THREE.Object3D | null>(null);
  const model3 = useRef<THREE.Object3D | null>(null);
  const model4 = useRef<THREE.Object3D | null>(null);
  const model5 = useRef<THREE.Object3D | null>(null);
  const model6 = useRef<THREE.Object3D | null>(null);
  const model7 = useRef<THREE.Object3D | null>(null);
  const model8 = useRef<THREE.Object3D | null>(null);
  const model9 = useRef<THREE.Object3D | null>(null);
  const model10 = useRef<THREE.Object3D | null>(null);

  const fishInfoArray: number[] = [];
  const beforeFishInfoArray: number[] = [];

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

  function loadFishModel(
    loader: any,
    fishInfoArray: number,
    model: { current: THREE.Object3D | null },
    mixer: { current: THREE.AnimationMixer | null },
    modelPath: string,
    position: THREE.Vector3,
    rotation: THREE.Euler,
    scale: THREE.Vector3,
    scene: THREE.Scene
  ) {
    loader.load(modelPath, (gltf: GLTF) => {
      //if (!model.current) return;
      model.current = gltf.scene;

      // 위치 설정
      model.current.position.copy(position);

      // 회전 설정
      model.current.rotation.copy(rotation);

      // 크기 설정
      model.current.scale.copy(scale);

      // 씬에 모델 추가
      scene.add(model.current);
      model.current.visible = false;

      const animations = gltf.animations || [];
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
      mixer.current = new THREE.AnimationMixer(model.current);

      animations.forEach((animation: THREE.AnimationClip) => {
        const action = mixer.current!.clipAction(animation);
        action.play();
      });
    });
  }



  useEffect(() => {
    const loader1 = new GLTFLoader();
    const loader2 = new GLTFLoader();
    const loader3 = new GLTFLoader();
    const loader4 = new GLTFLoader();
    const loader5 = new GLTFLoader();
    const loader6 = new GLTFLoader();
    const loader7 = new GLTFLoader();
    const loader8 = new GLTFLoader();
    const loader9 = new GLTFLoader();
    const loader10 = new GLTFLoader();

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

    console.log("start");



    // 1번 숭어
    if (fishInfoArray[3] === 1) {
      loadFishModel(loader1, fishInfoArray[3], model1, mixer1, 'low_poly_mugil/scene.gltf', new THREE.Vector3(0, 0, 0), new THREE.Euler(-1.5, 0, -1.5), new THREE.Vector3(1, 1, 1), scene);
    }

    // 2번 쥐노래미
    if (fishInfoArray[9] === 1) {
      loadFishModel(loader2, fishInfoArray[9], model2, mixer2, 'low_poly_salmon/scene.gltf', new THREE.Vector3(-0.55, -1.15, -0.5), new THREE.Euler(-1.5, 0, -1.5), new THREE.Vector3(0.15, 0.15, 0.15), scene);
    }

    // 3번 광어
    if (fishInfoArray[5] === 1) {
      loadFishModel(loader3, fishInfoArray[5], model3, mixer3, 'low_poly_flatfish/scene.gltf', new THREE.Vector3(-0.6, -1.2, 0), new THREE.Euler(0, 2.6, 1.5), new THREE.Vector3(0.7, 0.7, 0.7), scene);
    }

    // 4번 전갱이
    if (fishInfoArray[2] === 1) {
      loadFishModel(loader4, fishInfoArray[2], model4, mixer4, 'low_poly_barracuda/scene.gltf', new THREE.Vector3(0, 0, 1), new THREE.Euler(1.5, 0, -1.5), new THREE.Vector3(0.15, 0.15, 0.15), scene);
    }

    // 5번 참돔
    if (fishInfoArray[0] === 1) {
      loadFishModel(loader5, fishInfoArray[0], model5, mixer5, 'low_poly_redseabream/scene.gltf', new THREE.Vector3(0, 0, 2), new THREE.Euler(1.5, 0, -1.5), new THREE.Vector3(0.45, 0.45, 0.45), scene);
    }

    // 6번 돌돔
    if (fishInfoArray[8] === 1) {
      loadFishModel(loader6, fishInfoArray[8], model6, mixer6, 'low_poly_stoneseabream/scene.gltf', new THREE.Vector3(0, 0, 0), new THREE.Euler(-1.5, 3, 1.5), new THREE.Vector3(1, 1, 1), scene);
    }

    // 7번 농어
    if (fishInfoArray[1] === 1) {
      loadFishModel(loader7, fishInfoArray[1], model7, mixer7, 'low_poly_seabass/scene.gltf', new THREE.Vector3(0, 0, 0), new THREE.Euler(-1.5, 3, 1.5), new THREE.Vector3(0.6, 0.6, 0.6), scene);
    }

    // 8번 우럭
    if (fishInfoArray[6] === 1) {
      loadFishModel(loader8, fishInfoArray[6], model8, mixer8, 'low_poly_sebastes/scene.gltf', new THREE.Vector3(0, 0, 0), new THREE.Euler(-1.5, 0, -1.5), new THREE.Vector3(0.5, 0.5, 0.5), scene);
    }

    // 9번 고등어
    if (fishInfoArray[4] === 1) {
      loadFishModel(loader9, fishInfoArray[4], model9, mixer9, 'low_poly_mackerel/scene.gltf', new THREE.Vector3(0, 0, 0), new THREE.Euler(-1.5, 0, -1.5), new THREE.Vector3(1, 1, 1), scene);
    }

    // 10번 감성돔
    if (fishInfoArray[7] === 1) {
      loadFishModel(loader10, fishInfoArray[7], model10, mixer10, 'low_poly_blackseabream/scene.gltf', new THREE.Vector3(0, 0, 2), new THREE.Euler(1.5, 0, -1.5), new THREE.Vector3(0.45, 0.45, 0.45), scene);
    }

    animate(scene, renderer, camera);

    function onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener('resize', onWindowResize, false);
    onWindowResize();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      // cleanup logic if needed
    };
  }, [results]);

  function animate(scene: THREE.Scene, renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera) {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null; // animationId를 초기화합니다.
    }

    animationId = requestAnimationFrame(() => animate(scene, renderer, camera));

    function updateFishModelFront(
      mixer: { current: any }, // mixer는 current 속성을 가진 객체
      model: { current: any }, // model은 current 속성을 가진 객체
      fishIndex: number,
      xpos: number,
      ypos: number,
      beforexpos: number,
      beforeypos: number,
      xrand: number,
      yrand: number,
      sw: number,
      ysw: number,
      xspeed: number,
      yspeed: number,
      rotationvalue: number,
      checknum: number,
      zpos: number
    ) {
      if (mixer.current) {
        mixer.current.update(anispeed);
        if (model.current) {
          if (fishInfoArray[fishIndex] === 0) {
            model.current.visible = false;
          } else {
            model.current.visible = true;
          }
          if (beforexpos < xrand) {
            if (xpos >= xrand) {
              beforexpos = xpos;
              xpos -= xspeed;
              sw = 5;
            } else {
              if (model.current.rotation.x > -1.5) {
                sw = 1;
              } else {
                sw = 4;
              }
            }
          } else if (beforexpos > xrand) {
            if (xpos <= xrand) {
              beforexpos = xpos;
              xpos += xspeed;
              sw = 5;
            } else {
              if (model.current.rotation.x < 1.5) {
                sw = 2;
              } else {
                sw = 3;
              }
            }
          } else if (model.current.rotation.x > 1.5) {
            sw = 4;
            model.current.rotation.x += rotationvalue + (Math.round(((Math.random() * (0.1 + 0.1)) - 0.1) * 1e2) / 1e2);
          } else if (model.current.rotation.x < -1.5) {
            sw = 3;
            model.current.rotation.x -= rotationvalue + (Math.round(((Math.random() * (0.1 + 0.1)) - 0.1) * 1e2) / 1e2);
          }

          if (beforeypos > yrand) {
            if (ypos <= yrand) {
              beforeypos = ypos;
              sw = 6;
            } else {
              ysw = 2;
            }
          } else if (beforeypos < yrand) {
            if (ypos >= yrand) {
              beforeypos = ypos;
              sw = 6;
            } else {
              ysw = 1;
            }
          }

          if (sw === 1) {
            model.current.rotation.x -= rotationvalue + (Math.round(((Math.random() * (0.1 + 0.1)) - 0.1) * 1e2) / 1e2);
          } else if (sw === 2) {
            model.current.rotation.x += rotationvalue + (Math.round(((Math.random() * (0.1 + 0.1)) - 0.1) * 1e2) / 1e2);
          } else if (sw === 3) {
            xpos -= xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          } else if (sw === 4) {
            xpos += xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          } else if (sw === 5) {
            xrand = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
          } else if (sw === 6) {
            yrand = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
          }

          if (ysw === 1) {
            ypos += yspeed;
          } else if (ysw === 2) {
            ypos -= yspeed;
          }

          model.current.position.set(ypos, xpos, zpos);

          if (checknum === 1) {
            xpos1 = xpos;
            ypos1 = ypos;
            beforexpos1 = beforexpos;
            beforeypos1 = beforeypos;
            xrand1 = xrand;
            yrand1 = yrand;
            sw1 = sw;
            ysw1 = ysw;
          }
          else if (checknum === 2) {
            xpos2 = xpos;
            ypos2 = ypos;
            beforexpos2 = beforexpos;
            beforeypos2 = beforeypos;
            xrand2 = xrand;
            yrand2 = yrand;
            sw2 = sw;
            ysw2 = ysw;
          }
          else if (checknum === 4) {
            xpos4 = xpos;
            ypos4 = ypos;
            beforexpos4 = beforexpos;
            beforeypos4 = beforeypos;
            xrand4 = xrand;
            yrand4 = yrand;
            sw4 = sw;
            ysw4 = ysw;
          }
          else if (checknum === 6) {
            xpos6 = xpos;
            ypos6 = ypos;
            beforexpos6 = beforexpos;
            beforeypos6 = beforeypos;
            xrand6 = xrand;
            yrand6 = yrand;
            sw6 = sw;
            ysw6 = ysw;
          }
          else if (checknum === 7) {
            xpos7 = xpos;
            ypos7 = ypos;
            beforexpos7 = beforexpos;
            beforeypos7 = beforeypos;
            xrand7 = xrand;
            yrand7 = yrand;
            sw7 = sw;
            ysw7 = ysw;
          }
          else if (checknum === 9) {
            xpos9 = xpos;
            ypos9 = ypos;
            beforexpos9 = beforexpos;
            beforeypos9 = beforeypos;
            xrand9 = xrand;
            yrand9 = yrand;
            sw9 = sw;
            ysw9 = ysw;
          }
        }
      }
    }

    function updateFishModelBack(
      mixer: { current: any }, // mixer는 current 속성을 가진 객체
      model: { current: any }, // model은 current 속성을 가진 객체
      fishIndex: number,
      xpos: number,
      ypos: number,
      beforexpos: number,
      beforeypos: number,
      xrand: number,
      yrand: number,
      sw: number,
      ysw: number,
      xspeed: number,
      yspeed: number,
      rotationvalue: number,
      checknum: number,
      zpos: number
    ) {
      if (mixer.current) {
        mixer.current.update(anispeed);
        if (model.current) {
          if (fishInfoArray[fishIndex] === 0) {
            model.current.visible = false;
          } else {
            model.current.visible = true;
          }
          if (beforexpos < xrand) {
            if (xpos >= xrand) {
              beforexpos = xpos;
              xpos -= xspeed;
              sw = 5;
            } else {
              if (model.current.rotation.x < 1.5) {
                sw = 1;
              } else {
                sw = 4;
              }
            }
          } else if (beforexpos > xrand) {
            if (xpos <= xrand) {
              beforexpos = xpos;
              xpos += xspeed;
              sw = 5;
            } else {
              if (model.current.rotation.x > -1.5) {
                sw = 2;
              } else {
                sw = 3;
              }
            }
          } else if (model.current.rotation.x < -1.5) {
            sw = 4;
            model.current.rotation.x += rotationvalue + (Math.round(((Math.random() * (0.1 + 0.1)) - 0.1) * 1e2) / 1e2);
          } else if (model.current.rotation.x > 1.5) {
            sw = 3;
            model.current.rotation.x -= rotationvalue + (Math.round(((Math.random() * (0.1 + 0.1)) - 0.1) * 1e2) / 1e2);
          }

          if (beforeypos > yrand) {
            if (ypos <= yrand) {
              beforeypos = ypos;
              sw = 6;
            } else {
              ysw = 2;
            }
          } else if (beforeypos < yrand) {
            if (ypos >= yrand) {
              beforeypos = ypos;
              sw = 6;
            } else {
              ysw = 1;
            }
          }

          if (sw === 1) {
            model.current.rotation.x += rotationvalue + (Math.round(((Math.random() * (0.1 + 0.1)) - 0.1) * 1e2) / 1e2);
          } else if (sw === 2) {
            model.current.rotation.x -= rotationvalue + (Math.round(((Math.random() * (0.1 + 0.1)) - 0.1) * 1e2) / 1e2);
          } else if (sw === 3) {
            xpos -= xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          } else if (sw === 4) {
            xpos += xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          } else if (sw === 5) {
            xrand = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
          } else if (sw === 6) {
            yrand = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
          }

          if (ysw === 1) {
            ypos += yspeed;
          } else if (ysw === 2) {
            ypos -= yspeed;
          }

          model.current.position.set(ypos, xpos, zpos);

          if (checknum === 5) {
            xpos5 = xpos;
            ypos5 = ypos;
            beforexpos5 = beforexpos;
            beforeypos5 = beforeypos;
            xrand5 = xrand;
            yrand5 = yrand;
            sw5 = sw;
            ysw5 = ysw;
          }
          else if (checknum === 8) {
            xpos8 = xpos;
            ypos8 = ypos;
            beforexpos8 = beforexpos;
            beforeypos8 = beforeypos;
            xrand8 = xrand;
            yrand8 = yrand;
            sw8 = sw;
            ysw8 = ysw;
          }
          else if (checknum === 10) {
            xpos10 = xpos;
            ypos10 = ypos;
            beforexpos10 = beforexpos;
            beforeypos10 = beforeypos;
            xrand10 = xrand;
            yrand10 = yrand;
            sw10 = sw;
            ysw10 = ysw;
          }
        }
      }
    }

    function updateFishModelFlat(
      mixer: { current: any }, // mixer는 current 속성을 가진 객체
      model: { current: any }, // model은 current 속성을 가진 객체
      fishIndex: number,
      xpos: number,
      ypos: number,
      beforexpos: number,
      beforeypos: number,
      xrand: number,
      yrand: number,
      sw: number,
      ysw: number,
      xspeed: number,
      yspeed: number,
      rotationvalue: number,
      checknum: number,
      zpos: number
    ) {
      if (mixer.current) {
        mixer.current.update(anispeed);
        if (model.current) {
          if (fishInfoArray[5] === 0) {
            model.current.visible = false;
          }
          else {
            model.current.visible = true;
          }
          if (beforexpos < xrand) {
            if (xpos >= xrand) {
              beforexpos = xpos;
              xpos -= xspeed;
              sw = 5;
            } else {
              if (model.current.rotation.x > 0) {
                sw = 1;
              } else {
                sw = 3;
              }
            }
          } else if (beforexpos > xrand) {
            if (xpos <= xrand) {
              beforexpos = xpos;
              xpos += xspeed;
              sw = 5;
            } else {
              if (model.current.rotation.x < 3) {
                sw = 2;
              } else {
                sw = 4;
              }
            }
          } else if (model.current.rotation.x < 0) {
            sw = 4;
            model.current.rotation.x += rotationvalue;
          } else if (model.current.rotation.x > 3) {
            sw = 3;
            model.current.rotation.x -= rotationvalue;
          }

          //up
          if (sw === 1) {
            if (model.current.rotation.y < 2.6) {
              model.current.rotation.x -= rotationvalue;
              model.current.rotation.y += 0.6;
            } else {
              model.current.rotation.x -= rotationvalue;
            }
          }
          //down
          else if (sw === 2) {
            if (model.current.rotation.y > -2.6) {
              model.current.rotation.x += rotationvalue;
              model.current.rotation.y -= 0.6;
            } else {
              model.current.rotation.x += rotationvalue;
            }
          } else if (sw === 3) {
            xpos += xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          } else if (sw === 4) {
            xpos -= xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          } else if (sw === 5) {
            xrand = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
          }

          model.current.position.set(-0.6, xpos, zpos);

          if (checknum === 3) {
            xpos3 = xpos;
            ypos3 = ypos;
            beforexpos3 = beforexpos;
            beforeypos3 = beforeypos;
            xrand3 = xrand;
            yrand3 = yrand;
            sw3 = sw;
            ysw3 = ysw;
          }
        }
      }
    }

    function firstFront(
      mixer: { current: any }, // mixer는 current 속성을 가진 객체
      model: { current: any }, // model은 current 속성을 가진 객체
      fishIndex: number,
      xpos: number,
      ypos: number,
      beforexpos: number,
      beforeypos: number,
      xrand: number,
      yrand: number,
      sw: number,
      ysw: number,
      xspeed: number,
      yspeed: number,
      rotationvalue: number,
      checknum: number,
      zpos: number
    ) {
      if (mixer.current) {
        mixer.current.update(anispeed);
        if (model.current) {
          if (fishInfoArray[fishIndex] === 0) {
            model.current.visible = false;
          } else {
            model.current.visible = true;
          }

          if (beforeypos > yrand) {
            if (ypos <= yrand) {
              //beforeypos = ypos;
              sw = 2;
              ysw = 1;
              //visited[3] = 1;
              if (model.current.rotation.y >= 0) {
                visited[fishIndex] = 1;
                sw = 6;
              }
            } else {
              ysw = 2;
            }
          }



          if (sw === 3) {
            model.current.rotation.y = -1.5;
          }
          if (sw === 2) {
            model.current.rotation.y += rotationvalue;
          }
          else if (sw === 3) {
            xpos -= xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          } else if (sw === 4) {
            xpos += xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          }
          else if (sw === 6) {
            yrand = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
          }

          if (ysw === 2) {
            ypos -= 0.02;
          }

          model.current.position.set(ypos, xpos, zpos);

          if (checknum === 1) {
            xpos1 = xpos;
            ypos1 = ypos;
            beforexpos1 = beforexpos;
            beforeypos1 = beforeypos;
            xrand1 = xrand;
            yrand1 = yrand;
            sw1 = sw;
            ysw1 = ysw;
          }
          else if (checknum === 2) {
            xpos2 = xpos;
            ypos2 = ypos;
            beforexpos2 = beforexpos;
            beforeypos2 = beforeypos;
            xrand2 = xrand;
            yrand2 = yrand;
            sw2 = sw;
            ysw2 = ysw;
          }
          else if (checknum === 4) {
            xpos4 = xpos;
            ypos4 = ypos;
            beforexpos4 = beforexpos;
            beforeypos4 = beforeypos;
            xrand4 = xrand;
            yrand4 = yrand;
            sw4 = sw;
            ysw4 = ysw;
          }
          else if (checknum === 9) {
            xpos9 = xpos;
            ypos9 = ypos;
            beforexpos9 = beforexpos;
            beforeypos9 = beforeypos;
            xrand9 = xrand;
            yrand9 = yrand;
            sw9 = sw;
            ysw9 = ysw;
          }
        }
      }
    }

    function firstFrontRe(
      mixer: { current: any }, // mixer는 current 속성을 가진 객체
      model: { current: any }, // model은 current 속성을 가진 객체
      fishIndex: number,
      xpos: number,
      ypos: number,
      beforexpos: number,
      beforeypos: number,
      xrand: number,
      yrand: number,
      sw: number,
      ysw: number,
      xspeed: number,
      yspeed: number,
      rotationvalue: number,
      checknum: number,
      zpos: number
    ) {
      if (mixer.current) {
        mixer.current.update(anispeed);
        if (model.current) {
          if (fishInfoArray[fishIndex] === 0) {
            model.current.visible = false;
          } else {
            model.current.visible = true;
          }

          if (beforeypos > yrand) {
            if (ypos <= yrand) {
              //beforeypos = ypos;
              sw = 2;
              ysw = 1;
              //visited[3] = 1;
              if (model.current.rotation.y >= 3) {
                visited[fishIndex] = 1;
                sw = 6;
              }
            } else {
              ysw = 2;
            }
          }



          if (sw === 3) {
            model.current.rotation.y = 1.5;
          }
          if (sw === 2) {
            model.current.rotation.y += rotationvalue;
          }
          else if (sw === 3) {
            xpos -= xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          } else if (sw === 4) {
            xpos += xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          }
          else if (sw === 6) {
            yrand = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
          }

          if (ysw === 2) {
            ypos -= 0.02;
          }

          model.current.position.set(ypos, xpos, zpos);

          if (checknum === 6) {
            xpos6 = xpos;
            ypos6 = ypos;
            beforexpos6 = beforexpos;
            beforeypos6 = beforeypos;
            xrand6 = xrand;
            yrand6 = yrand;
            sw6 = sw;
            ysw6 = ysw;
          }
          else if (checknum === 7) {
            xpos7 = xpos;
            ypos7 = ypos;
            beforexpos7 = beforexpos;
            beforeypos7 = beforeypos;
            xrand7 = xrand;
            yrand7 = yrand;
            sw7 = sw;
            ysw7 = ysw;
          }
        }
      }
    }

    function firstBack(
      mixer: { current: any }, // mixer는 current 속성을 가진 객체
      model: { current: any }, // model은 current 속성을 가진 객체
      fishIndex: number,
      xpos: number,
      ypos: number,
      beforexpos: number,
      beforeypos: number,
      xrand: number,
      yrand: number,
      sw: number,
      ysw: number,
      xspeed: number,
      yspeed: number,
      rotationvalue: number,
      checknum: number,
      zpos: number
    ) {
      if (mixer.current) {
        mixer.current.update(anispeed);
        if (model.current) {
          if (fishInfoArray[fishIndex] === 0) {
            model.current.visible = false;
          } else {
            model.current.visible = true;
          }

          if (beforeypos > yrand) {
            if (ypos <= yrand) {
              //beforeypos = ypos;
              sw = 2;
              ysw = 1;
              //visited[3] = 1;
              if (model.current.rotation.y <= 0) {
                visited[fishIndex] = 1;
                sw = 6;
              }
            } else {
              ysw = 2;
            }
          }



          if (sw === 3) {
            model.current.rotation.y = 1.5;
          }
          if (sw === 2) {
            model.current.rotation.y -= rotationvalue;
          }
          else if (sw === 3) {
            xpos -= xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          } else if (sw === 4) {
            xpos += xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
          }
          else if (sw === 6) {
            yrand = (((Math.random() * (0.55 + 0.55)) - 0.55) * 1e2) / 1e2;
          }

          if (ysw === 2) {
            ypos -= 0.02;
          }

          model.current.position.set(ypos, xpos, zpos);

          if (checknum === 5) {
            xpos5 = xpos;
            ypos5 = ypos;
            beforexpos5 = beforexpos;
            beforeypos5 = beforeypos;
            xrand5 = xrand;
            yrand5 = yrand;
            sw5 = sw;
            ysw5 = ysw;
          }
          if (checknum === 8) {
            xpos8 = xpos;
            ypos8 = ypos;
            beforexpos8 = beforexpos;
            beforeypos8 = beforeypos;
            xrand8 = xrand;
            yrand8 = yrand;
            sw8 = sw;
            ysw8 = ysw;
          }
          if (checknum === 10) {
            xpos10 = xpos;
            ypos10 = ypos;
            beforexpos10 = beforexpos;
            beforeypos10 = beforeypos;
            xrand10 = xrand;
            yrand10 = yrand;
            sw10 = sw;
            ysw10 = ysw;
          }
        }
      }
    }

    function firstFlat(
      mixer: { current: any }, // mixer는 current 속성을 가진 객체
      model: { current: any }, // model은 current 속성을 가진 객체
      fishIndex: number,
      xpos: number,
      ypos: number,
      beforexpos: number,
      beforeypos: number,
      xrand: number,
      yrand: number,
      sw: number,
      ysw: number,
      xspeed: number,
      yspeed: number,
      rotationvalue: number,
      checknum: number,
      zpos: number
    ) {
      if (mixer.current) {
        mixer.current.update(anispeed);
        if (model.current) {
          if (fishInfoArray[fishIndex] === 0) {
            model.current.visible = false;
          } else {
            model.current.visible = true;
          }

          if (beforeypos > yrand) {
            if (ypos <= -0.6) {
              //beforeypos = ypos;
              sw = 2;
              ysw = 1;
              //visited[3] = 1;
              if (model.current.rotation.z >= 1.5) {
                visited[fishIndex] = 1;
              }
            } else {
              ysw = 2;
            }
          }



          if (sw === 3) {
            model.current.rotation.z = 0;
          }
          if (sw === 2) {
            model.current.rotation.z += rotationvalue;
          }

          if (ysw === 2) {
            ypos -= 0.02;
          }

          model.current.position.set(ypos, xpos, zpos);

          if (checknum === 3) {
            xpos3 = xpos;
            ypos3 = ypos;
            beforexpos3 = beforexpos;
            beforeypos3 = beforeypos;
            xrand3 = xrand;
            yrand3 = yrand;
            sw3 = sw;
            ysw3 = ysw;
          }
        }
      }
    }

    //cnt++;
    //console.log(cnt,)

    //1번 숭어
    if (mixer1.current) {
      if (visited[3] === 0) {
        firstFront(mixer1, model1, 3, xpos1, ypos1, beforexpos1, beforeypos1, xrand1, yrand1, sw1, ysw1, xspeed, yspeed, rotationvalue, 1, 0);
      }
      else {
        updateFishModelFront(mixer1, model1, 3, xpos1, ypos1, beforexpos1, beforeypos1, xrand1, yrand1, sw1, ysw1, xspeed, yspeed, rotationvalue, 1, 0);
      }
    }

    //2번 쥐노래미
    if (mixer2.current) {
      if (visited[9] === 0) {
        firstFront(mixer2, model2, 9, xpos2, ypos2, beforexpos2, beforeypos2, xrand2, yrand2, sw2, ysw2, xspeed, yspeed, rotationvalue, 2, -0.5);
      }
      else {
        updateFishModelFront(mixer2, model2, 9, xpos2, ypos2, beforexpos2, beforeypos2, xrand2, yrand2, sw2, ysw2, xspeed, yspeed, rotationvalue, 2, -0.5);
      }
    }

    //3번 광어
    if (mixer3.current) {
      if (visited[5] === 0) {
        console.log(ypos3);
        firstFlat(mixer3, model3, 5, xpos3, ypos3, beforexpos3, beforeypos3, xrand3, yrand3, sw3, ysw3, xspeed, yspeed, rotationvalue, 3, 0);
      }
      else {
        updateFishModelFlat(mixer3, model3, 5, xpos3, ypos3, beforexpos3, beforeypos3, xrand3, yrand3, sw3, ysw3, xspeed, yspeed, rotationvalue, 3, 0);
      }
    }

    //4번 전갱이
    if (mixer4.current) {
      if (visited[2] === 0) {
        firstFront(mixer4, model4, 2, xpos4, ypos4, beforexpos4, beforeypos4, xrand4, yrand4, sw4, ysw4, xspeed, yspeed, rotationvalue, 4, -0.5);
      }
      else {
        updateFishModelFront(mixer4, model4, 2, xpos4, ypos4, beforexpos4, beforeypos4, xrand4, yrand4, sw4, ysw4, xspeed, yspeed, rotationvalue, 4, -0.5);
      }
    }

    //5번 참돔
    if (mixer5.current) {
      if (visited[0] === 0) {
        firstBack(mixer5, model5, 0, xpos5, ypos5, beforexpos5, beforeypos5, xrand5, yrand5, sw5, ysw5, xspeed, yspeed, rotationvalue, 5, 2);
      }
      else {
        updateFishModelBack(mixer5, model5, 0, xpos5, ypos5, beforexpos5, beforeypos5, xrand5, yrand5, sw5, ysw5, xspeed, yspeed, rotationvalue, 5, 2);
      }
    }

    //6번 돌돔
    if (mixer6.current) {
      if (visited[8] === 0) {
        firstFrontRe(mixer6, model6, 8, xpos6, ypos6, beforexpos6, beforeypos6, xrand6, yrand6, sw6, ysw6, xspeed, yspeed, rotationvalue, 6, -2);
      }
      else {
        updateFishModelFront(mixer6, model6, 8, xpos6, ypos6, beforexpos6, beforeypos6, xrand6, yrand6, sw6, ysw6, xspeed, yspeed, rotationvalue, 6, -2);
      }
    }

    //7번 농어
    if (mixer7.current) {
      if (visited[1] === 0) {
        firstFrontRe(mixer7, model7, 1, xpos7, ypos7, beforexpos7, beforeypos7, xrand7, yrand7, sw7, ysw7, xspeed, yspeed, rotationvalue, 7, 0.5);
      }
      else {
        updateFishModelFront(mixer7, model7, 1, xpos7, ypos7, beforexpos7, beforeypos7, xrand7, yrand7, sw7, ysw7, xspeed, yspeed, rotationvalue, 7, 0.5);
      }
    }

    //8번 우럭
    if (mixer8.current) {
      if (visited[6] === 0) {
        firstBack(mixer8, model8, 6, xpos8, ypos8, beforexpos8, beforeypos8, xrand8, yrand8, sw8, ysw8, xspeed, yspeed, rotationvalue, 8, 1.5);
      }
      else {
        updateFishModelBack(mixer8, model8, 6, xpos8, ypos8, beforexpos8, beforeypos8, xrand8, yrand8, sw8, ysw8, xspeed, yspeed, rotationvalue, 8, 1.5);
      }
    }

    //9번 고등어
    if (mixer9.current) {
      if (visited[4] === 0) {
        firstFront(mixer9, model9, 4, xpos9, ypos9, beforexpos9, beforeypos9, xrand9, yrand9, sw9, ysw9, xspeed, yspeed, rotationvalue, 9, -0.5);
      }
      else {
        updateFishModelFront(mixer9, model9, 4, xpos9, ypos9, beforexpos9, beforeypos9, xrand9, yrand9, sw9, ysw9, xspeed, yspeed, rotationvalue, 9, -0.5);
      }
    }

    //10번 감성돔
    if (mixer10.current) {
      if (visited[7] === 0) {
        firstBack(mixer10, model10, 7, xpos10, ypos10, beforexpos10, beforeypos10, xrand10, yrand10, sw10, ysw10, xspeed, yspeed, rotationvalue, 10, 2);
      }
      else {
        updateFishModelBack(mixer10, model10, 7, xpos10, ypos10, beforexpos10, beforeypos10, xrand10, yrand10, sw10, ysw10, xspeed, yspeed, rotationvalue, 10, 2);
      }
    }

    renderer.render(scene, camera);
  }

  return (
    <FishBowlBox>
      <canvas ref={canvasRef}></canvas>
    </FishBowlBox>
  );
};

export default FishBowlPage;
