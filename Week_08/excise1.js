function find(string) {
    let flag = false;
    for (let i of string) {
        if (i == "a") {
            flag = true;
            return flag;
        } else {
            flag = false;
        }
    }
    return flag;
}

console.log(find("a hello to you"));