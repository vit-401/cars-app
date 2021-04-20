import {appReduser, sortAC, StateType} from "../app/app-reduser";

const initialState: StateType = {
    "cars": [

        {
            "id": 825,
            "carNumber": "jj",
            "model": "Juke",
            "brand": "Juke01",
            "engineType": "FUEL"
        },
        {
            "id": 822,
            "carNumber": "jj",
            "model": "Jimny",
            "brand": "Jimny09",
            "engineType": "FUEL"
        },
        {
            "id": 826,
            "carNumber": "jj",
            "model": "Juke",
            "brand": "Juke02",
            "engineType": "FUEL"
        },
        {
            "id": 827,
            "carNumber": "jj",
            "model": "Juke",
            "brand": "Juke45",
            "engineType": "FUEL"
        },
        {
            "id": 823,
            "carNumber": "jj",
            "model": "Juke",
            "brand": "Juke",
            "engineType": "GAS"
        },
        {
            "id": 816,
            "carNumber": "jjoo",
            "model": "Camry",
            "brand": "Camry",
            "engineType": "FUEL"
        },
        {
            "id": 829,
            "carNumber": "112233",
            "model": "Leaf",
            "brand": "Nissan",
            "engineType": "GAS"
        },
        {
            "id": 828,
            "carNumber": "78SD78BJNL0-L",
            "model": "Juke",
            "brand": "some",
            "engineType": "FUEL"
        },
        {
            "id": 821,
            "carNumber": "jj",
            "model": "Jimny",
            "brand": "Jimny2",
            "engineType": "FUEL"
        },


    ],
    currentCar: null
}
test('sort by id', () => {
    const startState = initialState
    const endState = appReduser(startState, sortAC("id"))

    expect(endState["cars"].length).toBe(9);
    expect(endState["cars"][0].id).toBe(816);
    expect(endState["cars"][1].id).toBe(821);
    expect(endState["cars"][2].id).toBe(822);
    expect(endState["cars"][3].id).toBe(823);
    expect(endState["cars"][4].id).toBe(825);
    expect(endState["cars"][5].id).toBe(826);

});
test('sort by brand', () => {
    const startState = initialState
    const endState = appReduser(startState, sortAC("brand"))
    expect(endState["cars"][0].brand).toBe("Camry");
    expect(endState["cars"][1].brand).toBe("Jimny09");
    expect(endState["cars"][2].brand).toBe("Jimny2");
    expect(endState["cars"][3].brand).toBe("Juke");
    expect(endState["cars"][4].brand).toBe("Juke01");
    expect(endState["cars"][5].brand).toBe("Juke02");
});

test('is mutating state', () => {
    const startState = initialState
    const endState = appReduser(startState, sortAC("brand"))
    expect(endState !== startState).toBe(true);
    expect(endState["cars"] !== startState["cars"]).toBe(true);
    expect(endState["cars"][0] !== startState["cars"][0]).toBe(true);

});
