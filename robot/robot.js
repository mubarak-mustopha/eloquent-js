const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges){
    let graph =  Object.create(null);

    function addEdge(from, to){
        if (from in graph){
            graph[from].push(to);
        }else {
            graph[from] = [to];
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from,to);
        addEdge(to, from);
    }

    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    constructor (place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if (!roadGraph[this.place].includes(destination)){
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }

    }

}

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for (let i = 0;i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        }while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
}

// run robot

 function runRobot(state, robot, memory){
    for (let turn = 0;;turn++){
        if (state.parcels.length == 0){
            console.log(`Done in ${turn} turns`);
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
 }

// goal oriented robot
function findRoute(graph, from, to){
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length ; i++){
        let {at, route} = work[i];
        for (let place of graph[at]){
            if (place == to) return route.concat(place);
            if (! work.some(w => w.at == place)){
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route){
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place){
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

// route robot
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];    

function routeRobot(state, memory){
    if (memory.length == 0) memory = mailRoute;
    return {direction: memory[0], memory: memory.slice(1)};
}

//  random robot
 function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
 }

 function randomRobot(state){
    return {direction: randomPick(roadGraph[state.place])}
 }

//  compare robots
function compareRobot(robotX, memoryX, robotY, memoryY){
    let robotXTurns = [];
    let robotYTurns = [];
    for (let i = 0; i < 100 ;i++){
        let state = VillageState.random();
        robotXTurns.push(runRobot(state,robotX,memoryX));
        robotYTurns.push(runRobot(state, robotY, memoryY));
    }
    function average(array){
        return array.reduce((x,y) => x + y) / array.length;
    }
    console.log(`${robotX.name} finished 100 task taking an average of ${average(robotXTurns)} turns.`);
    console.log(`${robotY.name} finished 100 task taking an average of ${average(robotYTurns)} turns.`);
}


compareRobot(goalOrientedRobot, [], routeRobot, []);
// runRobot(VillageState.random(parcelCount=25), goalOrientedRobot, []);

// let first = new VillageState(
//     "Post Office",
//     [{place: "Post Office", address: "Alice's House"}]
// );

// let next = first.move("Alice's House");

// console.log(next.place);
// console.log(next.parcels);
// console.log(first.place);