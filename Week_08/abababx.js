function match(string) {
    let state = start;
    for (let i of string) {
        state = state(i);
    }
    return state === end;
}

function start(i) {
    if (i === "a") {
        return foundA;
    } else {
        return start;
    }
}

function foundA(i) {
    if (i === "b") {
        return foundB
    } else {
        return start(i);
    }
}

function foundB(i) {
    if (i === "a") {
        return foundA2;
    } else {
        return start(i);
    }
}

function foundA2(i) {
    if (i === "b") {
        return foundB2;
    } else {
        return start(i);
    }
}

function foundB2(i) {
    if (i === "a") {
        return foundA3;
    } else {
        return start(i);
    }
}

function foundA3(i) {
    if (i === "b") {
        return foundB3;
    } else {
        return start(i);
    }
}

function foundB3(i) {
    if (i === "x") {
        return end;
    } else {
        return foundB2(i);
    }
}

function end(i) {
    return end;
}
console.log(match("ababcabababx"));