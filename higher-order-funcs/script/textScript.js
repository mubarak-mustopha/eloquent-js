const SCRIPTS = require("./scripts.js");

function characterScript(code){
    for (let script of SCRIPTS){
        if (script.ranges.some(([from, to]) => code >= from && code < to)){
           return script;
        }
    }
    return null;
}

function countBy(items, groupName){
    let counts = [];
    for (let item of items){
        name = groupName(item);
        known = counts.find(c => c.name == name);
        if (!known){
            counts.push({name, count: 1})
        } else {
            known.count++;
        }
    }
    return counts;
}

function textScripts(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    
    let total = scripts.reduce((n, {count}) => n + count, 0)
    if (total == 0) return "No scripts found.";
    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

// console.log(characterScript(72710))
console.log(countBy([1,2,3,4,5], n => n > 2));
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));