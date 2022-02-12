var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 74, window.innerWidth/window.innerHeight, 0.1, 3000 );
camera.position.z = 2200;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.maxDistance=  1500;
controls.minDistance = 1000;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/app/');
mtlLoader.setPath('/app/');
mtlLoader.load('app/r2-d2.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/');
    objLoader.load('app/resultx.obj', function (object) {

        scene.add(object);
        console.log("asdasdsad")
        object.position.y -= 1000;
        console.log("asd222asdsad")
        object.position.z = 30;

    });

});


var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();