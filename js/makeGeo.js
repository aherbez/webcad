
/**
 * Put your wild, weird, and wonderful code here!
 * 
 * Make sure that your makeGeo function:
 * 
 * - starts by creating a new THREE.BufferedGeometry()
 * - adds 3 or more vertices
 * - adds 1 or more faces (be sure to specify the verts in counter-clockwise order!)
 * - passes the vertex and index data into the geometry
 * - returns the geometry object
 * 
 * Note that there are also examples that use the older Geometry class.
 * That's easier to use, but should be considered deprecated.
 * 
 * I know that BufferedGeometry may seem more complex, but it has the benefit
 * of making it straightforward to pass in other types of per-vertex data like
 * UVs, vertex normals, and even custom user data.
 * 
 * Have fun!
 */

function makeGeo() {
    return makeGeoDynamicCubeBuffered();
}

/**
 * Make a simple box using built-in functionality
 */
function makeBoxGeo() {
    let geo = new THREE.BoxGeometry(10, 10, 10);
    return geo;
}

/**
 * Make a simple box from scratch
 */
function makeGeoStaticCube() {
    let g = new THREE.Geometry();

    // add vertices
    g.vertices.push(new THREE.Vector3(-1, -1,  1));
    g.vertices.push(new THREE.Vector3(-1, -1, -1));
    g.vertices.push(new THREE.Vector3( 1, -1, -1));
    g.vertices.push(new THREE.Vector3( 1, -1,  1));
    g.vertices.push(new THREE.Vector3(-1,  1,  1));
    g.vertices.push(new THREE.Vector3(-1,  1, -1));
    g.vertices.push(new THREE.Vector3( 1,  1, -1));
    g.vertices.push(new THREE.Vector3( 1,  1,  1));
    
    // front
    g.faces.push(new THREE.Face3(4, 0, 3));
    g.faces.push(new THREE.Face3(4, 3, 7));
    // left
    g.faces.push(new THREE.Face3(4, 1, 0));
    g.faces.push(new THREE.Face3(5, 1, 4));
    // back
    g.faces.push(new THREE.Face3(5, 2, 1));
    g.faces.push(new THREE.Face3(6, 2, 5));
    // right
    g.faces.push(new THREE.Face3(2, 7, 3));
    g.faces.push(new THREE.Face3(2, 6, 7));
    // top
    g.faces.push(new THREE.Face3(5, 4, 7));
    g.faces.push(new THREE.Face3(6, 5, 7));
    // bottom
    g.faces.push(new THREE.Face3(1, 3, 0));
    g.faces.push(new THREE.Face3(2, 3, 1));
    
    return g;
}

/**
 * Make a box from scratch, with inputs
 */
function makeGeoDynamicCube() {

    let g = new THREE.Geometry();

    let w = parseFloat(document.getElementById("width").value) / 2;
    let h = parseFloat(document.getElementById("height").value) / 2;
    let d = parseFloat(document.getElementById("depth").value) / 2;

    // add vertices
    g.vertices.push(new THREE.Vector3(-w, -h,  d));
    g.vertices.push(new THREE.Vector3(-w, -h, -d));
    g.vertices.push(new THREE.Vector3( w, -h, -d));
    g.vertices.push(new THREE.Vector3( w, -h,  d));
    g.vertices.push(new THREE.Vector3(-w,  h,  d));
    g.vertices.push(new THREE.Vector3(-w,  h, -d));
    g.vertices.push(new THREE.Vector3( w,  h, -d));
    g.vertices.push(new THREE.Vector3( w,  h,  d));
    
    // front
    g.faces.push(new THREE.Face3(4, 0, 3));
    g.faces.push(new THREE.Face3(4, 3, 7));
    // left
    g.faces.push(new THREE.Face3(4, 1, 0));
    g.faces.push(new THREE.Face3(5, 1, 4));
    // back
    g.faces.push(new THREE.Face3(5, 2, 1));
    g.faces.push(new THREE.Face3(6, 2, 5));
    // right
    g.faces.push(new THREE.Face3(2, 7, 3));
    g.faces.push(new THREE.Face3(2, 6, 7));
    // top
    g.faces.push(new THREE.Face3(5, 4, 7));
    g.faces.push(new THREE.Face3(6, 5, 7));
    // bottom
    g.faces.push(new THREE.Face3(1, 3, 0));
    g.faces.push(new THREE.Face3(2, 3, 1));
    
    return g;
}

/**
 *  This creates a simple 2-unit cube, using buffered geometry
 *  
 * @returns A THREE.BufferedGeometry instance
 */
function makeGeoStaticCubeBuffered() {

    // add vertices
    const vertices = [];
    vertices.push(-1, -1,  1);
    vertices.push(-1, -1, -1);
    vertices.push( 1, -1, -1);
    vertices.push( 1, -1,  1);
    vertices.push( -1,  1,  1);
    vertices.push( -1,  1, -1);
    vertices.push( 1,  1, -1);
    vertices.push( 1,  1,  1);

    const indices = [];
    // front
    indices.push(4, 0, 3);
    indices.push(4, 3, 7);
    // left
    indices.push(4, 1, 0);
    indices.push(5, 1, 4);
    // back
    indices.push(5, 2, 1);
    indices.push(6, 2, 5);
    // right
    indices.push(2, 7, 3);
    indices.push(2, 6, 7);
    // top
    indices.push(5, 4, 7);
    indices.push(6, 5, 7);
    // bottom
    indices.push(1, 3, 0);
    indices.push(2, 3, 1);

    const geometry = new THREE.BufferGeometry();
    const vertData = new Float32Array(vertices);
    const vertAttrib = new THREE.BufferAttribute(
        vertData,   // data to pass, in a typed array
        3           // number of components per vertex
    );
    geometry.setAttribute(
        'position', // name of the
        vertAttrib
    );

    const indexData = new Uint16Array(indices);
    const indexAttrib = new THREE.BufferAttribute(
        indexData,  // data to pass, integers this time
        1           // number of components per vertex
    );
    geometry.setIndex(indexAttrib);

    return geometry;
}

/**
 * Creates a box based on the dimensions in the interface
 * 
 * @returns A THREE.BufferedGeometry instance
 */
function makeGeoDynamicCubeBuffered() {

    let g = new THREE.Geometry();

    let w = parseFloat(document.getElementById("width").value) / 2;
    let h = parseFloat(document.getElementById("height").value) / 2;
    let d = parseFloat(document.getElementById("depth").value) / 2;

    // add vertices
    const vertices = [];
    vertices.push(-w, -h,  d);
    vertices.push(-w, -h, -d);
    vertices.push( w, -h, -d);
    vertices.push( w, -h,  d);
    vertices.push(-w,  h,  d);
    vertices.push(-w,  h, -d);
    vertices.push( w,  h, -d);
    vertices.push( w,  h,  d);
    
    const indices = [];
    // front
    indices.push(4, 0, 3);
    indices.push(4, 3, 7);
    // left
    indices.push(4, 1, 0);
    indices.push(5, 1, 4);
    // back
    indices.push(5, 2, 1);
    indices.push(6, 2, 5);
    // right
    indices.push(2, 7, 3);
    indices.push(2, 6, 7);
    // top
    indices.push(5, 4, 7);
    indices.push(6, 5, 7);
    // bottom
    indices.push(1, 3, 0);
    indices.push(2, 3, 1);
    
    const geometry = new THREE.BufferGeometry();
    const vertData = new Float32Array(vertices);
    const vertAttrib = new THREE.BufferAttribute(
        vertData,   // data to pass, in a typed array
        3           // number of components per vertex
    );
    geometry.setAttribute(
        'position', // name of the
        vertAttrib
    );

    const indexData = new Uint16Array(indices);
    const indexAttrib = new THREE.BufferAttribute(
        indexData,  // data to pass, integers this time
        1           // number of components per vertex
    );
    geometry.setIndex(indexAttrib);

    return geometry;

}




