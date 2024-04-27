let journal = [];

function addEntry(events, squirrel){
    journal.push({events,squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
"beer"], true);

function tableFor(event, journal){
    let table = [0,0,0,0];
    for (let record of journal){
        let index = 0;
        if (record.events.includes(event)) index +=1;
        if (record.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}