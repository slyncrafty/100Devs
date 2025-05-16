/*
** https://eloquentjavascript.net/07_robot.html
*/

// import { runRobotAnimation } from './animatevillage.js';

const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
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

let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office

let object = Object.freeze({value: 5});
object.value = 10;
console.log(object.value);

function runRobot(state, robot, memory) {
    for(let turn = 0;; turn++)
    {
        if(state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

runRobot(VillageState.random(), randomRobot);
console.log('\n\n');


const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if(memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1)};
}

runRobot(VillageState.random(), routeRobot, []);
console.log('\n\n');

// BFS
function findRoute(graph, from, to) {
  let work = [ {at: from, route: []} ];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for(let place of graph[at]) {
      if(place == to) return route.concat(place);
      if(!work.some(w => w.at == place)){
        work.push( {at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route){
  if(route.length == 0) {
    let parcel = parcels[0];
    if(parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1)};
}
runRobot(VillageState.random(), goalOrientedRobot, []);


// Exercises
// Measuring A Robot
/*
It’s hard to objectively compare robots by just letting them solve a few scenarios. Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.

Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let both of the robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.
*/

function runRobotSteps (state, robot, memory) {
  let route = [];
  for(let turn = 0;; turn++)
    {
        if(state.parcels.length == 0) {
            console.log(`${robot.name} Done in ${turn} turns \n${route.join('-->')}`);
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        route.push(`${action.direction}`)
        // console.log(`Moved to ${action.direction}`);
    }
}

function compareRobots(robot1, memory1, robot2, memory2){
  let avgStepsRobot1 = 0, avgStepsRobot2 = 0;
  const n = 5;
  for (let i = 0; i < n; i++) {
    const state = VillageState.random();
    avgStepsRobot1 += runRobotSteps(state, robot1, memory1);
    avgStepsRobot2 += runRobotSteps(state, robot2, memory2);
  }
  console.log( `Avg Steps ${robot1.name} took : ${avgStepsRobot1/n} \nAvg Steps ${robot2.name} took : ${avgStepsRobot2/n} \n`);
}

// compareRobots(routeRobot, [], goalOrientedRobot, [])

// Robot Efficiency
/*
Can you write a robot that finishes the delivery task faster than goalOrientedRobot? If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?

If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.
*/
// The limitation of goalOrientedRobot is that it can go back and forth because it just follows parcels one parcel at a time
// for each parcel, if it isn't yet picked up plan a route to the parcel
// if it is already picked up, plan a route to deliver it

function fasterRobot({place, parcels}, route) {
  if (route.length === 0) {
    let routes = parcels.map(parcel => {
      if(parcel.place !== place) {
        return {
          route: findRoute(roadGraph, place, parcel.place), pickup: true
        };
      }else {
        return { 
          route: findRoute(roadGraph, place, parcel.address), pickup: false
        };
      }
    });

    function score( {route, pickup} ) {
      return (pickup ? 0.5 : 0) - route.length;
    };
    route = routes.reduce((a,b) => (score(a) > score(b) ? a : b)).route;
  }
  return { direction: route[0], memory: route.slice(1) };
}

console.log("faster robot======================")
runRobot(VillageState.random(), fasterRobot, []);

