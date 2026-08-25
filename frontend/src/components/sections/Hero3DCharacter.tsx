import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

const SVG_LOGO_PATH =
  'M 16.94 2.00 L 17.77 2.36 L 19.08 3.66 L 19.91 4.85 L 20.62 6.27 L 20.86 6.51 L 20.86 6.74 L 21.09 6.98 L 21.33 7.69 L 21.92 8.76 L 21.92 9.00 L 22.40 9.83 L 22.99 11.73 L 23.35 12.44 L 23.35 12.91 L 23.47 13.03 L 23.47 15.28 L 23.11 16.47 L 22.64 17.42 L 21.92 18.37 L 20.86 19.32 L 19.43 20.15 L 15.88 21.33 L 15.16 21.45 L 14.81 21.69 L 13.50 22.04 L 13.15 22.28 L 11.84 22.64 L 11.49 22.87 L 10.54 23.11 L 10.18 23.35 L 8.05 24.06 L 8.29 21.92 L 8.40 21.81 L 8.40 21.33 L 8.76 20.38 L 8.76 20.03 L 9.23 18.72 L 10.06 17.06 L 11.61 14.81 L 13.86 12.56 L 15.64 11.25 L 15.64 5.91 L 15.76 5.80 L 15.76 4.13 L 15.88 4.02 L 15.99 3.07 L 16.23 2.59 L 16.59 2.12 L 16.82 2.12 Z M 24.06 8.05 L 24.18 8.17 L 25.84 8.29 L 25.96 8.40 L 26.43 8.40 L 26.55 8.52 L 27.02 8.52 L 27.50 8.76 L 27.85 8.76 L 28.92 9.12 L 29.51 9.47 L 29.75 9.47 L 31.29 10.30 L 33.31 11.73 L 35.56 13.98 L 36.87 15.76 L 42.68 15.76 L 42.80 15.88 L 44.34 15.88 L 45.41 16.23 L 45.76 16.47 L 46.00 16.82 L 46.00 17.18 L 45.64 17.89 L 43.98 19.43 L 41.85 20.74 L 38.05 22.52 L 37.11 22.75 L 36.75 22.99 L 35.33 23.47 L 34.73 23.47 L 34.61 23.58 L 33.07 23.58 L 31.41 23.11 L 29.87 22.16 L 29.04 21.33 L 27.97 19.67 L 26.19 14.10 L 25.96 13.74 L 25.96 13.39 L 25.36 12.08 L 24.06 8.17 Z M 39.83 24.06 L 39.95 24.06 L 39.83 25.48 L 39.71 25.60 L 39.71 26.19 L 39.60 26.31 L 39.36 27.62 L 38.88 29.04 L 38.05 30.82 L 36.16 33.55 L 34.38 35.33 L 32.72 36.51 L 32.24 36.99 L 32.24 37.58 L 32.36 37.70 L 32.24 43.87 L 31.77 45.53 L 31.29 46.00 L 30.70 46.00 L 30.11 45.64 L 28.68 44.10 L 27.62 42.44 L 27.02 41.14 L 26.79 40.90 L 26.67 40.43 L 26.19 39.60 L 26.19 39.36 L 25.60 38.29 L 24.53 35.21 L 24.42 33.67 L 24.53 33.55 L 24.53 32.72 L 24.77 31.89 L 25.13 31.06 L 25.84 29.99 L 26.79 29.04 L 28.21 28.09 L 28.45 28.09 L 29.04 27.74 L 30.11 27.38 L 30.46 27.38 L 32.36 26.67 L 33.43 26.43 L 33.78 26.19 L 35.09 25.84 L 35.44 25.60 L 36.39 25.36 L 38.05 24.65 L 39.71 24.18 Z M 13.15 24.53 L 14.93 24.53 L 15.05 24.65 L 15.64 24.65 L 16.35 24.89 L 18.13 25.96 L 19.32 27.26 L 20.15 28.68 L 21.69 33.67 L 21.92 34.02 L 22.28 35.33 L 22.99 36.99 L 23.94 39.95 L 22.28 39.83 L 22.16 39.71 L 21.69 39.71 L 21.57 39.60 L 20.26 39.36 L 19.20 39.00 L 16.94 37.94 L 14.57 36.27 L 12.67 34.38 L 11.13 32.36 L 4.85 32.36 L 4.73 32.24 L 3.78 32.24 L 2.95 32.01 L 2.12 31.41 L 2.00 30.82 L 2.36 30.23 L 2.95 29.51 L 4.49 28.33 L 7.22 26.91 L 7.46 26.67 L 8.52 26.31 L 9.59 25.72 L 12.56 24.65 L 13.03 24.65 Z';

export function Hero3DCharacter() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId = 0;
    const scene = new THREE.Scene();

    const rect = container.getBoundingClientRect();
    const width = rect.width || window.innerWidth;
    const height = rect.height || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 8.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // ── LIGHTING (Clean Minimal Studio, Brand Lime & Crisp White) ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(6, 9, 7);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const limeRimLight = new THREE.DirectionalLight(0xb4e50d, 2.8);
    limeRimLight.position.set(-7, 5, -3);
    scene.add(limeRimLight);

    const softFillLight = new THREE.DirectionalLight(0xffffff, 1.2);
    softFillLight.position.set(-5, -3, 5);
    scene.add(softFillLight);

    const limePointLight = new THREE.PointLight(0xb4e50d, 1.8, 14);
    limePointLight.position.set(2, 0, 3);
    scene.add(limePointLight);

    // ── MATERIALS ──
    const whiteCeramicMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.05,
    });

    const darkMatteMat = new THREE.MeshStandardMaterial({
      color: 0x111113,
      roughness: 0.35,
      metalness: 0.2,
    });

    const glossyVisorMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0c,
      roughness: 0.06,
      metalness: 0.92,
    });

    const limeGlowMat = new THREE.MeshBasicMaterial({
      color: 0xb4e50d,
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      roughness: 0.1,
      metalness: 0.95,
    });

    const limeGlassMat = new THREE.MeshStandardMaterial({
      color: 0xb4e50d,
      roughness: 0.2,
      metalness: 0.1,
      transparent: true,
      opacity: 0.45,
    });

    // ── MASCOT RIG ROOT ──
    const mascotGroup = new THREE.Group();
    scene.add(mascotGroup);

    // Dynamic responsive placement (right side on desktop, center on mobile)
    function updateMascotPosition(w: number, h: number) {
      const aspect = w / h;
      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const visibleHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const visibleWidth = visibleHeight * aspect;

      if (w >= 1024) {
        // Position mascot in the right 28% zone of the visible 3D area
        mascotGroup.position.set(visibleWidth * 0.24, -0.2, 0);
        mascotGroup.scale.set(0.9, 0.9, 0.9);
      } else if (w >= 768) {
        mascotGroup.position.set(visibleWidth * 0.2, -0.3, 0);
        mascotGroup.scale.set(0.8, 0.8, 0.8);
      } else {
        mascotGroup.position.set(0, -0.8, 0);
        mascotGroup.scale.set(0.68, 0.68, 0.68);
      }
    }

    updateMascotPosition(width, height);

    // ── 1. HEAD & VISOR ──
    const headGroup = new THREE.Group();
    mascotGroup.add(headGroup);
    headGroup.position.set(0, 1.0, 0);

    // Head Shell (Sleek aerodynamic egg/capsule)
    const headGeo = new THREE.SphereGeometry(1.2, 48, 48);
    headGeo.scale(1, 1.06, 0.95);
    const headMesh = new THREE.Mesh(headGeo, whiteCeramicMat);
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Visor Recess Frame (Dark band across face)
    const visorFrameGeo = new THREE.CylinderGeometry(1.08, 1.08, 0.62, 48, 1, false, 0, Math.PI);
    visorFrameGeo.rotateY(Math.PI / 2);
    visorFrameGeo.scale(1, 0.85, 0.92);
    const visorMesh = new THREE.Mesh(visorFrameGeo, glossyVisorMat);
    visorMesh.position.set(0, 0.05, 0.15);
    headGroup.add(visorMesh);

    // Visor Glass Bevel
    const visorBevelGeo = new THREE.TorusGeometry(0.85, 0.04, 16, 48);
    visorBevelGeo.scale(1.2, 0.45, 1);
    const visorBevel = new THREE.Mesh(visorBevelGeo, chromeMat);
    visorBevel.position.set(0, 0.05, 0.96);
    headGroup.add(visorBevel);

    // ── EXPRESSIVE DUAL LED EYES ──
    const eyesGroup = new THREE.Group();
    headGroup.add(eyesGroup);
    eyesGroup.position.set(0, 0.05, 0.98);

    // Left Eye Capsule
    const eyeGeo = new THREE.CapsuleGeometry(0.12, 0.22, 16, 24);
    eyeGeo.rotateZ(Math.PI / 2);
    
    const eyeLeft = new THREE.Mesh(eyeGeo, limeGlowMat);
    eyeLeft.position.set(-0.45, 0, 0);
    eyesGroup.add(eyeLeft);

    const eyeRight = new THREE.Mesh(eyeGeo, limeGlowMat);
    eyeRight.position.set(0.45, 0, 0);
    eyesGroup.add(eyeRight);

    // Cute Blush Glows
    const blushGeo = new THREE.CircleGeometry(0.14, 24);
    const blushLeft = new THREE.Mesh(blushGeo, limeGlassMat);
    blushLeft.position.set(-0.65, -0.28, 0.94);
    blushLeft.rotation.y = -0.35;
    headGroup.add(blushLeft);

    const blushRight = new THREE.Mesh(blushGeo, limeGlassMat);
    blushRight.position.set(0.65, -0.28, 0.94);
    blushRight.rotation.y = 0.35;
    headGroup.add(blushRight);

    // Headphone / Ear Discs
    const earDiscGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.18, 32);
    earDiscGeo.rotateZ(Math.PI / 2);

    const earLeft = new THREE.Mesh(earDiscGeo, darkMatteMat);
    earLeft.position.set(-1.22, 0.05, 0);
    headGroup.add(earLeft);

    const earRingLeft = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.035, 16, 32), limeGlowMat);
    earRingLeft.rotation.y = Math.PI / 2;
    earRingLeft.position.set(-1.32, 0.05, 0);
    headGroup.add(earRingLeft);

    const earRight = new THREE.Mesh(earDiscGeo, darkMatteMat);
    earRight.position.set(1.22, 0.05, 0);
    headGroup.add(earRight);

    const earRingRight = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.035, 16, 32), limeGlowMat);
    earRingRight.rotation.y = Math.PI / 2;
    earRingRight.position.set(1.32, 0.05, 0);
    headGroup.add(earRingRight);

    // Antenna / Floating Halo atop Head
    const haloGeo = new THREE.TorusGeometry(0.55, 0.035, 16, 48);
    haloGeo.rotateX(Math.PI / 2);
    const haloMesh = new THREE.Mesh(haloGeo, limeGlowMat);
    haloMesh.position.set(0, 1.45, 0);
    headGroup.add(haloMesh);

    // ── 2. TORSO & CORE ──
    const torsoGroup = new THREE.Group();
    mascotGroup.add(torsoGroup);
    torsoGroup.position.set(0, -0.5, 0);

    const torsoGeo = new THREE.CapsuleGeometry(0.72, 0.65, 24, 32);
    torsoGeo.scale(1.1, 1, 0.85);
    const torsoMesh = new THREE.Mesh(torsoGeo, whiteCeramicMat);
    torsoMesh.castShadow = true;
    torsoGroup.add(torsoMesh);

    const collarGeo = new THREE.CylinderGeometry(0.48, 0.58, 0.28, 32);
    const collarMesh = new THREE.Mesh(collarGeo, darkMatteMat);
    collarMesh.position.set(0, 0.72, 0);
    torsoGroup.add(collarMesh);

    const coreRim = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.04, 16, 32), chromeMat);
    coreRim.position.set(0, 0.15, 0.62);
    torsoGroup.add(coreRim);

    // ── 3D WEB4GO LOGO (FAVICON.SVG) IN CHEST RING ──
    const svgLoader = new SVGLoader();
    const parsedSvg = svgLoader.parse(`<svg viewBox="0 0 48 48"><path d="${SVG_LOGO_PATH}" /></svg>`);
    const logoShapes = SVGLoader.createShapes(parsedSvg.paths[0]);

    const coreLogoGeo = new THREE.ExtrudeGeometry(logoShapes, {
      depth: 1.2,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.2,
      bevelThickness: 0.2,
    });
    coreLogoGeo.center();

    const coreEmblem = new THREE.Mesh(coreLogoGeo, limeGlowMat);
    coreEmblem.scale.set(0.009, 0.009, 0.009);
    coreEmblem.rotation.z = Math.PI; // Flip orientation to match upright 3D
    coreEmblem.position.set(0, 0.15, 0.64);
    torsoGroup.add(coreEmblem);

    // ── 3. FLOATING MAGNETIC HANDS ──
    const handGeo = new THREE.SphereGeometry(0.28, 24, 24);
    handGeo.scale(1, 1.25, 0.85);

    const leftHandGroup = new THREE.Group();
    mascotGroup.add(leftHandGroup);
    leftHandGroup.position.set(-1.45, -0.35, 0.3);

    const leftHandMesh = new THREE.Mesh(handGeo, whiteCeramicMat);
    leftHandMesh.castShadow = true;
    leftHandGroup.add(leftHandMesh);

    const leftHandGlow = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 16, 24), limeGlowMat);
    leftHandGlow.rotateX(Math.PI / 2);
    leftHandGlow.position.set(0, 0.1, 0);
    leftHandGroup.add(leftHandGlow);

    const rightHandGroup = new THREE.Group();
    mascotGroup.add(rightHandGroup);
    rightHandGroup.position.set(1.45, -0.35, 0.3);

    const rightHandMesh = new THREE.Mesh(handGeo, whiteCeramicMat);
    rightHandMesh.castShadow = true;
    rightHandGroup.add(rightHandMesh);

    const rightHandGlow = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 16, 24), limeGlowMat);
    rightHandGlow.rotateX(Math.PI / 2);
    rightHandGlow.position.set(0, 0.1, 0);
    rightHandGroup.add(rightHandGlow);

    // ── 4. FLOATING HOLOGRAPHIC ORBITAL RINGS ──
    const orbitGroup = new THREE.Group();
    mascotGroup.add(orbitGroup);
    orbitGroup.position.set(0, 0.45, 0);

    const orbitRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.3, 0.016, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0xb4e50d, transparent: true, opacity: 0.45 })
    );
    orbitRing1.rotation.x = Math.PI / 3;
    orbitRing1.rotation.y = 0.2;
    orbitGroup.add(orbitRing1);

    const orbitRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.012, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.25 })
    );
    orbitRing2.rotation.x = -Math.PI / 4;
    orbitRing2.rotation.y = -0.3;
    orbitGroup.add(orbitRing2);

    // Floating 3D Web4Go Logo Gem Orbiting
    const floatingLogoGeo = new THREE.ExtrudeGeometry(logoShapes, {
      depth: 2.2,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.4,
      bevelThickness: 0.4,
    });
    floatingLogoGeo.center();

    const floatingLogoMesh = new THREE.Mesh(
      floatingLogoGeo,
      new THREE.MeshStandardMaterial({
        color: 0xb4e50d,
        roughness: 0.1,
        metalness: 0.85,
        emissive: 0xb4e50d,
        emissiveIntensity: 0.4,
      })
    );
    floatingLogoMesh.scale.set(0.014, 0.014, 0.014);
    mascotGroup.add(floatingLogoMesh);

    // ── 5. FULL-SIZE SCREEN-WIDE FLOATING PARTICLES ──
    const particlesCount = 85;
    const particleGeo = new THREE.SphereGeometry(0.03, 8, 8);
    const particleMatLime = new THREE.MeshBasicMaterial({ color: 0xb4e50d, transparent: true, opacity: 0.7 });
    const particleMatDark = new THREE.MeshBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.25 });
    const particleMatWhite = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });

    const fullScreenParticleGroup = new THREE.Group();
    scene.add(fullScreenParticleGroup);

    interface ParticleItem {
      mesh: THREE.Mesh;
      baseX: number;
      baseY: number;
      baseZ: number;
      speed: number;
      offset: number;
    }

    const particleItems: ParticleItem[] = [];

    for (let i = 0; i < particlesCount; i++) {
      const mat = i % 3 === 0 ? particleMatLime : (i % 3 === 1 ? particleMatDark : particleMatWhite);
      const pMesh = new THREE.Mesh(particleGeo, mat);

      // Distribute across the entire wide background space (-10 to 10 on X, -5 to 5 on Y, -3 to 3 on Z)
      const baseX = (Math.random() - 0.5) * 22;
      const baseY = (Math.random() - 0.5) * 11;
      const baseZ = (Math.random() - 0.5) * 7;
      const scale = 0.5 + Math.random() * 1.2;
      pMesh.scale.set(scale, scale, scale);
      pMesh.position.set(baseX, baseY, baseZ);

      fullScreenParticleGroup.add(pMesh);
      particleItems.push({
        mesh: pMesh,
        baseX,
        baseY,
        baseZ,
        speed: 0.4 + Math.random() * 0.8,
        offset: Math.random() * Math.PI * 2,
      });
    }

    // ── MOUSE INTERACTION & PHYSICS ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let dragStartX = 0;
    let dragRotY = 0;
    let targetDragRotY = 0;
    let bounceEnergy = 0;

    function onPointerMove(e: PointerEvent) {
      if (isDragging) {
        const deltaX = e.clientX - dragStartX;
        targetDragRotY = dragRotY + deltaX * 0.008;
        return;
      }
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.targetX = nx;
      mouse.targetY = ny;
    }

    function onPointerDown(e: PointerEvent) {
      // Only drag if on the right half or over mascot
      if (e.clientX > window.innerWidth * 0.45) {
        isDragging = true;
        dragStartX = e.clientX;
        dragRotY = targetDragRotY;
        bounceEnergy = 0.45;
      }
    }

    function onPointerUp() {
      isDragging = false;
      targetDragRotY = 0; // Graceful snapback
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    // Resize handling
    function onResize() {
      if (!container) return;
      const r = container.getBoundingClientRect();
      const w = r.width || window.innerWidth;
      const h = r.height || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      updateMascotPosition(w, h);
    }

    const ro = new ResizeObserver(onResize);
    ro.observe(container);
    window.addEventListener('resize', onResize);

    // ── ANIMATION LOOP ──
    let clock = new THREE.Clock();
    let blinkTimer = 0;
    let nextBlink = 3;

    function animate() {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth lerp mouse coordinates
      mouse.x = THREE.MathUtils.lerp(mouse.x, mouse.targetX, 0.08);
      mouse.y = THREE.MathUtils.lerp(mouse.y, mouse.targetY, 0.08);

      // Smooth drag rotation
      mascotGroup.rotation.y = THREE.MathUtils.lerp(mascotGroup.rotation.y, targetDragRotY, 0.08);

      // Floating Bobbing Motion
      const floatY = Math.sin(elapsed * 2.2) * 0.08;
      const floatRotZ = Math.sin(elapsed * 1.5) * 0.02;
      mascotGroup.position.y += (floatY - (mascotGroup.position.y - (-0.2))) * 0.05;
      mascotGroup.rotation.z = floatRotZ + mouse.x * 0.04;

      // ── HEAD & EYE TRACKING (Interactive Gaze) ──
      const headTargetY = mouse.x * 0.55;
      const headTargetX = -mouse.y * 0.35;
      headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, headTargetY, 0.1);
      headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, headTargetX, 0.1);

      // Pupil position inside visor
      eyesGroup.position.x = mouse.x * 0.08;
      eyesGroup.position.y = 0.05 + mouse.y * 0.06;

      // Halo bobbing & spin
      haloMesh.position.y = 1.45 + Math.sin(elapsed * 3) * 0.04;
      haloMesh.rotation.z = elapsed * 0.6;

      // Core emblem pulse inside chest ring
      const logoScale = 0.009 * (1 + Math.sin(elapsed * 4) * 0.1);
      coreEmblem.scale.set(logoScale, logoScale, logoScale);

      // Floating Hands Physics (Follow head & sway)
      const handWaveLeft = Math.sin(elapsed * 2.5 + 1) * 0.06;
      const handWaveRight = Math.cos(elapsed * 2.5) * 0.06;

      leftHandGroup.position.y = -0.35 + floatY + handWaveLeft - mouse.y * 0.1;
      leftHandGroup.position.x = -1.45 - mouse.x * 0.08;
      leftHandGroup.rotation.z = Math.sin(elapsed * 2) * 0.08;

      rightHandGroup.position.y = -0.35 + floatY + handWaveRight - mouse.y * 0.1;
      rightHandGroup.position.x = 1.45 - mouse.x * 0.08;
      rightHandGroup.rotation.z = -Math.sin(elapsed * 2) * 0.08;

      // Joyful click bounce decay
      if (bounceEnergy > 0.01) {
        headGroup.scale.setScalar(1 + Math.sin(elapsed * 20) * bounceEnergy * 0.15);
        bounceEnergy = THREE.MathUtils.lerp(bounceEnergy, 0, 0.05);
      } else {
        headGroup.scale.set(1, 1, 1);
      }

      // Blinking animation
      blinkTimer += delta;
      if (blinkTimer > nextBlink) {
        eyeLeft.scale.y = 0.1;
        eyeRight.scale.y = 0.1;
        if (blinkTimer > nextBlink + 0.12) {
          eyeLeft.scale.y = 1;
          eyeRight.scale.y = 1;
          blinkTimer = 0;
          nextBlink = 2.5 + Math.random() * 3;
        }
      }

      // Orbital Rings Rotation
      orbitRing1.rotation.z = elapsed * 0.25;
      orbitRing2.rotation.z = -elapsed * 0.18;
      orbitGroup.rotation.y = mouse.x * 0.2;

      // 3D Web4Go Logo Gem Orbit around Mascot
      floatingLogoMesh.position.x = Math.cos(elapsed * 0.9) * 2.2;
      floatingLogoMesh.position.z = Math.sin(elapsed * 0.9) * 2.2;
      floatingLogoMesh.position.y = 0.9 + Math.sin(elapsed * 1.8) * 0.35;
      floatingLogoMesh.rotation.y = elapsed * 1.6;
      floatingLogoMesh.rotation.x = elapsed * 0.9;

      // Full-screen Screen-Wide Particle Float with 3D Parallax
      particleItems.forEach((p) => {
        const floatDelta = Math.sin(elapsed * p.speed + p.offset) * 0.35;
        p.mesh.position.y = p.baseY + floatDelta;
        p.mesh.position.x = p.baseX + mouse.x * 0.4;
      });

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero__3d-full-scene">
      <div className="hero__3d-full-canvas" ref={containerRef} />
    </div>
  );
}
