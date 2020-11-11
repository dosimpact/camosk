// incoming confidence value
const RandomeIdx = (arr) => Math.floor(Math.random() * arr.length);
const GetTenUnit = (value) => Math.round(Number(value) / 10) * 10;
const keyList = [
    "AgeRange00",
    "AgeRange10",
    "AgeRange20",
    "AgeRange30",
    "AgeRange40",
    "AgeRange50",
    "AgeRange60",
    "AgeRange70",
    "AgeRange80",
    "Male",
    "Female",
    "Eyeglasses",
    "Mustache",
    "Smile",
    "Sunglasses",
    "ANGRY",
    "HAPPY",
    "SAD",
    "CALM",
]
/**
 {
    AgeRange00,
    AgeRange10,
    AgeRange20,
    AgeRange30,
    AgeRange40,
    AgeRange50,
    AgeRange60,
    AgeRange70,
    AgeRange80,
    Male,
    Female,
    Eyeglasses,
    Mustache,
    Smile,
    Sunglasses,
    ANGRY,
    HAPPY,
    SAD,
    CALM,
}
 */
const FilterData = (confidenceObject) => {
    console.log("FilterData confidenceObject", confidenceObject);
    const Frequency = [];
    // 해당 배열을 돌면서, 

    // 키이름으로 배열을 만든다음
    keyList.map((e, idx) => {
        const confiTenUnit = GetTenUnit(Number(confidenceObject[e]));
        console.log("keyList", e, "confiTenUnit", confiTenUnit);
        [...Array(confiTenUnit).keys()].forEach(c => {
            Frequency.push(e);
        })
    })
    console.log("Frequency", Frequency)
    return Frequency[RandomeIdx(Frequency)]
}

export default FilterData