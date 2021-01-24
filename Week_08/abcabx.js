function match(string) {
    var state = start;
    for (let i of string) {
        state = state(i);
    }
    return state === end;
}

function start(i) {
    if (i === 'a') {
        return foundA;
    } else {
        return start;
    }
}

function foundA(i) {
    if (i == "b")
        return foundB;
    else
        return start(i);
}

function foundB(i) {
    if (i == "c")
        return foundC;
    else
        return start(i);
}

function foundC(i) {
    if (i == "a")
        return foundA2;
    else
        return start(i);
}

function foundA2(i) {
    if (i == "b")
        return foundB2;
    else
        return start(i);
}

function foundB2(i) {
    if (i == "x")
        return end;
    else
        return foundB(i); //处理重复字符串，判断是否为c，为c则可以作为下一部分的开始abc
}

function end(string) {
    return end;
}


console.log(match("abcabcabx"))