const SCRIPTS = require("../script/scripts.js");

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

function dominant_dir(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return (script != null) ? script.direction : "none";
    }).filter(s => s.name != "none");
    return scripts;                            

}

console.log(dominant_dir('英国的狗说"woof",أنا عبد الله俄罗斯的狗说"тяв"'));