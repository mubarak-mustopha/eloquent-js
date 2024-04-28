function addEntry(events, squirrel){
    journal.push({events,squirrel});
}

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

function journalEvents(journal){
    let events = [];
    for (let record of journal){
        for (let event of record.events){
            if (!events.includes(event)) events.push(event);
        }
    }
    return events;
}