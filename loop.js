// Node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    // Check 1: Any pending setTimeout, setInterval, setImmediate?
    // Check 2: Any pending OS tasks? (Like server listenint to port)
    // Check 3: Any pending long running operations? (Like fs module)
    return pendingTimers.length || pendingOperations.length || pendingOperations.length
}

// Entire body executes in one "tick"
while(shouldContinue()) {

}

// Exit back to terminal
