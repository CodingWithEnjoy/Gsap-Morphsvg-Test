const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  hamburger.classList.toggle("toggle");
});

var video = document.getElementById("myVideo");

var btn = document.getElementById("myBtn");

function heroSound() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// First star
var svg1TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip1 .clip__inner",
    scrub: 2,
    pin: true,
    pinSpacing: false,
    invalidateOnRefresh: true,
  },
});

svg1TL.fromTo("#svg1 video, #svg1 img", { y: "30%" }, { y: 0 }, 0);
svg1TL.to(
  "#svg__star",
  { morphSVG: { shape: "#svg__rec", origin: "50% 50%" }, ease: "none" },
  0
);
svg1TL.fromTo(
  "#svg1",
  {
    width: () => {
      if (window.innerWidth < 600) {
        return 70;
      } else {
        return 200;
      }
    },
  },
  {
    width: () => {
      if (window.innerWidth < window.innerHeight) {
        return "100vh";
      } else {
        return "100vw";
      }
    },
    ease: "none",
  },
  0
);

// Stars 2,3,4 could be in a function
// Second star
gsap.set("#svg2", { y: "100vh" });
gsap.to("#svg2", {
  y: 0,
  x: 0,
  scrollTrigger: {
    trigger: "body",
    scrub: true,
    start: () => window.innerHeight * 2 + " bottom",
    end: () => window.innerHeight * 3 + " bottom",
  },
  ease: "none",
});

var svg2TL = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: 2,
    start: () => window.innerHeight * 3 + " bottom",
    end: () => window.innerHeight * 4 + " bottom",
    invalidateOnRefresh: true,
  },
});

svg2TL.fromTo("#svg2 video, #svg2 img", { y: "30%" }, { y: 0 }, 0);
svg2TL.to(
  "#svg__star2",
  { morphSVG: { shape: "#svg__rec2", origin: "50% 50%" } },
  0
);
svg2TL.fromTo(
  "#svg2",
  {
    width: () => {
      if (window.innerWidth < 600) {
        return 70;
      } else {
        return 200;
      }
    },
  },
  {
    width: () => {
      if (window.innerWidth < window.innerHeight) {
        return "100vh";
      } else {
        return "100vw";
      }
    },
    ease: "none",
  },
  0
);

// Third star
gsap.set("#svg3", { y: "100vh" });
gsap.to("#svg3", {
  y: 0,
  x: 0,
  scrollTrigger: {
    trigger: "body",
    scrub: true,
    start: () => window.innerHeight * 4 + " bottom",
    end: () => window.innerHeight * 5 + " bottom",
    invalidateOnRefresh: true,
  },
  ease: "none",
});

var svg3TL = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: 2,
    start: () => window.innerHeight * 5 + " bottom",
    end: () => window.innerHeight * 6 + " bottom",
    invalidateOnRefresh: true,
  },
});

svg3TL.fromTo("#svg3 video, #svg3 img", { y: "30%" }, { y: 0 }, 0);
svg3TL.to(
  "#svg__star3",
  { morphSVG: { shape: "#svg__rec3", origin: "50% 50%" } },
  0
);
svg3TL.fromTo(
  "#svg3",
  {
    width: () => {
      if (window.innerWidth < 600) {
        return 70;
      } else {
        return 200;
      }
    },
  },
  {
    width: () => {
      if (window.innerWidth < window.innerHeight) {
        return "100vh";
      } else {
        return "100vw";
      }
    },
    ease: "none",
  },
  0
);

// Fourth star
gsap.set("#svg4", { y: () => window.innerHeight });
gsap.to("#svg4", {
  y: 0,
  x: 0,
  scrollTrigger: {
    trigger: "body",
    scrub: true,
    start: () => window.innerHeight * 6 + " bottom",
    end: () => window.innerHeight * 7 + " bottom",
  },
  ease: "none",
});

var svg4TL = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: 2,
    start: () => window.innerHeight * 7 + " bottom",
    end: () => window.innerHeight * 8 + " bottom",
  },
});

svg4TL.fromTo("#svg4 video, #svg4 img", { y: "30%" }, { y: 0 }, 0);
svg4TL.to(
  "#svg__star4",
  { morphSVG: { shape: "#svg__rec4", origin: "50% 50%" } },
  0
);
svg4TL.fromTo(
  "#svg4",
  {
    width: () => {
      if (window.innerWidth < 600) {
        return 70;
      } else {
        return 200;
      }
    },
  },
  {
    width: () => {
      if (window.innerWidth < window.innerHeight) {
        return "100vh";
      } else {
        return "100vw";
      }
    },
    ease: "none",
  },
  0
);

gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
  animation: scene1,
  trigger: ".scrollElement",
  start: "top top",
  end: "45% 100%",
  scrub: 3,
});

// hills animation
scene1.to(
  "#h1-1",
  { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" },
  0
);
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);

//animate text
scene1.to("#info", { y: 8 * speed }, 0);

/*   Bird   */
gsap.fromTo(
  "#bird",
  { opacity: 1 },
  {
    y: -250,
    x: 800,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".scrollElement",
      start: "15% top",
      end: "60% 100%",
      scrub: 4,
      onEnter: function () {
        gsap.to("#bird", { scaleX: 1, rotation: 0 });
      },
      onLeave: function () {
        gsap.to("#bird", { scaleX: -1, rotation: -15 });
      },
    },
  }
);

/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
  animation: clouds,
  trigger: ".scrollElement",
  start: "top top",
  end: "70% 100%",
  scrub: 1,
});

clouds.to("#cloud1", { x: 500 }, 0);
clouds.to("#cloud2", { x: 1000 }, 0);
clouds.to("#cloud3", { x: -1000 }, 0);
clouds.to("#cloud4", { x: -700, y: 25 }, 0);

/* Sun motion Animation  */
let sun = gsap.timeline();
ScrollTrigger.create({
  animation: sun,
  trigger: ".scrollElement",
  start: "top top",
  end: "2200 100%",
  scrub: 1,
});

//sun motion
sun.to("#bg_grad", { attr: { cy: "330" } }, 0.0);

//bg change
sun.to("#sun", { attr: { offset: "0.15" } }, 0.0);
sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0.0);
sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0.0);
sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0.0);
sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0.0);
sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

/*   SCENE 2  */
let scene2 = gsap.timeline();
ScrollTrigger.create({
  animation: scene2,
  trigger: ".scrollElement",
  start: "15% top",
  end: "40% 100%",
  scrub: 4,
});

scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

/* Bats */
gsap.fromTo(
  "#bats",
  { opacity: 1, y: 400, scale: 0 },
  {
    y: 120,
    scale: 0.8,
    transformOrigin: "50% 50%",
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".scrollElement",
      start: "40% top",
      end: "70% 100%",
      scrub: 3,
      onEnter: function () {
        gsap.utils.toArray("#bats path").forEach((item, i) => {
          gsap.to(item, {
            scaleX: 0.5,
            yoyo: true,
            repeat: 11,
            duration: 0.15,
            delay: 0.7 + i / 10,
            transformOrigin: "50% 50%",
          });
        });
        gsap.set("#bats", { opacity: 1 });
      },
      onLeave: function () {
        gsap.to("#bats", { opacity: 0, delay: 2 });
      },
    },
  }
);

/* Sun increase */
let sun2 = gsap.timeline();
ScrollTrigger.create({
  animation: sun2,
  trigger: ".scrollElement",
  start: "2200 top",
  end: "5000 100%",
  scrub: 1,
});

sun2.to("#sun", { attr: { offset: "0.6" } }, 0);
sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

/* Transition (from Scene2 to Scene3) */
gsap.set("#scene3", { y: 580, visibility: "visible" });
let sceneTransition = gsap.timeline();
ScrollTrigger.create({
  animation: sceneTransition,
  trigger: ".scrollElement",
  start: "70% top",
  end: "bottom 100%",
  scrub: 3,
});

sceneTransition.to(
  "#h2-1",
  { y: -680, scale: 1.5, transformOrigin: "50% 50%" },
  0
);
sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
sceneTransition.to("#bg2", { y: 0 }, 0);

/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
  animation: scene3,
  trigger: ".scrollElement",
  start: "80% 50%",
  end: "bottom 100%",
  scrub: 3,
});

//Hills motion
scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);

//stars
scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);

// Scroll Back text
scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);

//gradient value change
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

/*   falling star   */
gsap.to("#fstar", {
  x: -700,
  y: -250,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "4000 top",
    end: "6000 100%",
    scrub: 5,
    onEnter: function () {
      gsap.set("#fstar", { opacity: 1 });
    },
    onLeave: function () {
      gsap.set("#fstar", { opacity: 0 });
    },
  },
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.onload = init;

function init() {
  var root = new THREERoot({
    createCameraControls: false,
    fov: 10,
  });
  root.renderer.setClearColor(0xffffff);
  root.renderer.setPixelRatio(window.devicePixelRatio || 1);
  root.camera.position.set(0, 0, 1400);

  var textAnimation = createTextAnimation();
  root.scene.add(textAnimation);

  var tween = TweenMax.fromTo(
    textAnimation,
    4,
    { animationProgress: 0 },
    { animationProgress: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }
  );
  createTweenScrubber(tween);
}

function createTweenScrubber(tween, seekSpeed) {
  seekSpeed = seekSpeed || 0.001;

  function stop() {
    TweenMax.to(tween, 2, { timeScale: 0 });
  }

  function resume() {
    TweenMax.to(tween, 2, { timeScale: 1 });
  }

  function seek(dx) {
    var progress = tween.progress();
    var p = THREE.Math.clamp(progress + dx * seekSpeed, 0, 1);

    tween.progress(p);
  }

  var _cx = 0;

  // desktop
  var mouseDown = false;
  document.body.style.cursor = "pointer";

  window.addEventListener("mousedown", function (e) {
    mouseDown = true;
    document.body.style.cursor = "ew-resize";
    _cx = e.clientX;
    stop();
  });
  window.addEventListener("mouseup", function (e) {
    mouseDown = false;
    document.body.style.cursor = "pointer";
    resume();
  });
  window.addEventListener("mousemove", function (e) {
    if (mouseDown === true) {
      var cx = e.clientX;
      var dx = cx - _cx;
      _cx = cx;

      seek(dx);
    }
  });
  // mobile
  window.addEventListener("touchstart", function (e) {
    _cx = e.touches[0].clientX;
    stop();
    e.preventDefault();
  });
  window.addEventListener("touchend", function (e) {
    resume();
    e.preventDefault();
  });
  window.addEventListener("touchmove", function (e) {
    var cx = e.touches[0].clientX;
    var dx = cx - _cx;
    _cx = cx;

    seek(dx);
    e.preventDefault();
  });
}

function createTextAnimation() {
  var geometry = generateTextGeometry("METAVERSE SHOOTERS", {
    size: 14,
    height: 0,
    font: "droid sans",
    weight: "bold",
    style: "normal",
    bevelSize: 0.75,
    bevelThickness: 0.5,
    bevelEnabled: true,
    anchor: { x: 0.5, y: 0.5, z: 0.5 },
  });

  THREE.BAS.Utils.separateFaces(geometry);

  return new TextAnimation(geometry);
}

function generateTextGeometry(text, params) {
  var geometry = new THREE.TextGeometry(text, params);

  geometry.computeBoundingBox();

  geometry.userData = {};
  geometry.userData.size = {
    width: geometry.boundingBox.max.x - geometry.boundingBox.min.x,
    height: geometry.boundingBox.max.y - geometry.boundingBox.min.y,
    depth: geometry.boundingBox.max.z - geometry.boundingBox.min.z,
  };

  var anchorX = geometry.userData.size.width * -params.anchor.x;
  var anchorY = geometry.userData.size.height * -params.anchor.y;
  var anchorZ = geometry.userData.size.depth * -params.anchor.z;
  var matrix = new THREE.Matrix4().makeTranslation(anchorX, anchorY, anchorZ);

  geometry.applyMatrix(matrix);

  return geometry;
}

////////////////////
// CLASSES
////////////////////

function TextAnimation(textGeometry) {
  var bufferGeometry = new THREE.BAS.ModelBufferGeometry(textGeometry);

  var aAnimation = bufferGeometry.createAttribute("aAnimation", 2);
  var aControl0 = bufferGeometry.createAttribute("aControl0", 3);
  var aControl1 = bufferGeometry.createAttribute("aControl1", 3);
  var aEndPosition = bufferGeometry.createAttribute("aEndPosition", 3);

  var faceCount = bufferGeometry.faceCount;
  var i, i2, i3, i4, v;

  var size = textGeometry.userData.size;
  var length = new THREE.Vector3(size.width, size.height, size.depth)
    .multiplyScalar(0.5)
    .length();
  var maxDelay = length * 0.06;

  this.animationDuration = maxDelay + 4 + 1;
  this._animationProgress = 0;

  for (
    i = 0, i2 = 0, i3 = 0, i4 = 0;
    i < faceCount;
    i++, i2 += 6, i3 += 9, i4 += 12
  ) {
    var face = textGeometry.faces[i];
    var centroid = THREE.BAS.Utils.computeCentroid(textGeometry, face);
    var dirX = centroid.x > 0 ? 1 : -1;
    var dirY = centroid.y > 0 ? 1 : -1;

    // animation
    var delay = centroid.length() * THREE.Math.randFloat(0.03, 0.06);
    var duration = THREE.Math.randFloat(2, 4);

    for (v = 0; v < 6; v += 2) {
      aAnimation.array[i2 + v] = delay + Math.random();
      aAnimation.array[i2 + v + 1] = duration;
    }

    // ctrl
    var c0x = THREE.Math.randFloat(0, 30) * dirX;
    var c0y = THREE.Math.randFloat(60, 120) * dirY;
    var c0z = THREE.Math.randFloat(-20, 20);

    var c1x = THREE.Math.randFloat(30, 60) * dirX;
    var c1y = THREE.Math.randFloat(0, 60) * dirY;
    var c1z = THREE.Math.randFloat(-20, 20);

    for (v = 0; v < 9; v += 3) {
      aControl0.array[i3 + v] = c0x;
      aControl0.array[i3 + v + 1] = c0y;
      aControl0.array[i3 + v + 2] = c0z;

      aControl1.array[i3 + v] = c1x;
      aControl1.array[i3 + v + 1] = c1y;
      aControl1.array[i3 + v + 2] = c1z;
    }
  }

  var material = new THREE.BAS.BasicAnimationMaterial(
    {
      shading: THREE.FlatShading,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { type: "f", value: 0 },
      },
      shaderFunctions: [THREE.BAS.ShaderChunk["cubic_bezier"]],
      shaderParameters: [
        "uniform float uTime;",
        "attribute vec2 aAnimation;",
        "attribute vec3 aControl0;",
        "attribute vec3 aControl1;",
        "attribute vec3 aEndPosition;",
      ],
      shaderVertexInit: [
        "float tDelay = aAnimation.x;",
        "float tDuration = aAnimation.y;",
        "float tTime = clamp(uTime - tDelay, 0.0, tDuration);",
        "float tProgress = tTime / tDuration;",
      ],
      shaderTransformPosition: [
        "vec3 tPosition = transformed;",
        "tPosition *= 1.0 - tProgress;",
        "tPosition += cubicBezier(transformed, aControl0, aControl1, aEndPosition, tProgress);",
        "transformed = tPosition;",
      ],
    },
    {
      diffuse: 0x000000,
    }
  );

  THREE.Mesh.call(this, bufferGeometry, material);

  this.frustumCulled = false;
}
TextAnimation.prototype = Object.create(THREE.Mesh.prototype);
TextAnimation.prototype.constructor = TextAnimation;

Object.defineProperty(TextAnimation.prototype, "animationProgress", {
  get: function () {
    return this._animationProgress;
  },
  set: function (v) {
    this._animationProgress = v;
    this.material.uniforms["uTime"].value = this.animationDuration * v;
  },
});

function THREERoot(params) {
  params = utils.extend(
    {
      antialias: false,

      fov: 60,
      zNear: 1,
      zFar: 10000,

      createCameraControls: true,
    },
    params
  );

  this.renderer = new THREE.WebGLRenderer({
    antialias: params.antialias,
  });
  document
    .getElementById("three-container")
    .appendChild(this.renderer.domElement);

  this.camera = new THREE.PerspectiveCamera(
    params.fov,
    window.innerWidth / window.innerHeight,
    params.zNear,
    params.zfar
  );

  this.scene = new THREE.Scene();

  if (params.createCameraControls) {
    this.controls = new THREE.OrbitControls(
      this.camera,
      this.renderer.domElement
    );
  }

  this.resize = this.resize.bind(this);
  this.tick = this.tick.bind(this);

  this.resize();
  this.tick();

  window.addEventListener("resize", this.resize, false);
}
THREERoot.prototype = {
  tick: function () {
    this.update();
    this.render();
    requestAnimationFrame(this.tick);
  },
  update: function () {
    this.controls && this.controls.update();
  },
  render: function () {
    this.renderer.render(this.scene, this.camera);
  },
  resize: function () {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  },
};

////////////////////
// UTILS
////////////////////

var utils = {
  extend: function (dst, src) {
    for (var key in src) {
      dst[key] = src[key];
    }

    return dst;
  },
};
