/**
 * Simple web-based CAD tool
 * 
 * author: Adrian Herbez
 * adrianherbez.net
 * zanzastoys.com
 * aherbez@gmail.com
 * 
 * This isn't necessarily the best code, nor does it comply with JS best practices in 2020.
 * However, it is the simplest and most straightforward boilerplate that I could manage
 * to provide a way for people to get into making custom geometry and saving it to STL
 * as easily as possible.
 * 
 * Please use it in any way you see fit, and have fun!
 * 
 */

const WIDTH = 800;
const HEIGHT = 600;

let renderer, scene, camera, controls;
let material = null;
let exporter = null;
let downloadLink = null;
let object = null;

function init()
{
    exporter = new THREE.STLExporter();
    downloadLink = document.createElement('a');
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    let canvas = document.getElementById("editor");
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(800, 600);

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    camera.position.set(0, 20, 100);
    controls.update();

    // using a MeshNormalMaterial makes it easy to see the shape
    material = new THREE.MeshNormalMaterial();

    updateGeo();
    render();
}

function updateGeo()
{
    if (object)
    {
        scene.remove(object);
        object = null;
    }

    let geo = makeGeo();
    finalizeGeo(geo);
 
    object = new THREE.Mesh(geo, material);

    scene.add(object);
}

function finalizeGeo(g) {
    g.verticesNeedUpdate = true;
    g.elementsNeedUpdate = true;
    g.computeFaceNormals();
}

function render()
{
    object.rotateY(0.01);

    renderer.render(scene, camera);

    controls.update();
    requestAnimationFrame(render);
}

function exportSTL()
{
    let resultSTL = exporter.parse(object);
    downloadLink.href = URL.createObjectURL(new Blob([resultSTL], {type: 'text/plain'}));
    downloadLink.download = 'object.stl';
    downloadLink.click();
    
}

window.onload = init;
