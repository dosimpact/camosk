import {
    AgeRange00,
    AgeRange10,
    AgeRange20,
    AgeRange30,
    AgeRange40,
    AgeRange50,
    AgeRange60,
    AgeRange70,
    AgeRange80,
    CALM,
    Eyeglasses,
    Female,
    ANGRY,
    HAPPY,
    Male,
    Mustache,
    SAD,
    Smile,
    Sunglasses
} from "./Data"
// 10 



const RandomeIdx = (arr) => Math.floor(Math.random() * arr.length);

const getRandomeAgeRange00 = () => { return AgeRange00[RandomeIdx[AgeRange00]]; }
const getRandomeAgeRange10 = () => { return AgeRange10[RandomeIdx[AgeRange10]]; }
const getRandomeAgeRange20 = () => { return AgeRange20[RandomeIdx[AgeRange20]]; }
const getRandomeAgeRange30 = () => { return AgeRange30[RandomeIdx[AgeRange30]]; }
const getRandomeAgeRange40 = () => { return AgeRange40[RandomeIdx[AgeRange40]]; }
const getRandomeAgeRange50 = () => { return AgeRange50[RandomeIdx[AgeRange50]]; }
const getRandomeAgeRange60 = () => { return AgeRange60[RandomeIdx[AgeRange60]]; }
const getRandomeAgeRange70 = () => { return AgeRange70[RandomeIdx[AgeRange70]]; }
const getRandomeAgeRange80 = () => { return AgeRange80[RandomeIdx[AgeRange80]]; }

const getRandomeMale = () => { return CALM[RandomeIdx[CALM]]; }
const getRandomeFemale = () => { return Eyeglasses[RandomeIdx[Eyeglasses]]; }

const getRandomeEyeglasses = () => { return Female[RandomeIdx[Female]]; }
const getRandomeMustache = () => { return ANGRY[RandomeIdx[ANGRY]]; }

const getRandomeSmile = () => { return HAPPY[RandomeIdx[HAPPY]]; }
const getRandomeSunglasses = () => { return Male[RandomeIdx[Male]]; }
const getRandomeANGRY = () => { return Mustache[RandomeIdx[Mustache]]; }
const getRandomeHAPPY = () => { return SAD[RandomeIdx[SAD]]; }
const getRandomeSAD = () => { return Smile[RandomeIdx[Smile]]; }
const getRandomeCALM = () => { return Sunglasses[RandomeIdx[Sunglasses]]; }


const getByKey = (key) => {
    let v = null;
    switch (key) {
        case "AgeRange00":
            v = getRandomeAgeRange00();
            break;
        case "AgeRange10":
            v = getRandomeAgeRange10();
            break;
        case "AgeRange20":
            v = getRandomeAgeRange20();
            break;
        case "AgeRange30":
            v = getRandomeAgeRange30();
            break;
        case "AgeRange40":
            v = getRandomeAgeRange40();
            break;
        case "AgeRange50":
            v = getRandomeAgeRange50();
            break;
        case "AgeRange60":
            v = getRandomeAgeRange60();
            break;
        case "AgeRange70":
            v = getRandomeAgeRange70();
            break;
        case "AgeRange80":
            v = getRandomeAgeRange80();
            break;
        case "CALM":
            v = getRandomeCALM();
            break;
        case "Eyeglasses":
            v = getRandomeEyeglasses();
            break;
        case "Female":
            v = getRandomeFemale();
            break;
        case "ANGRY":
            v = getRandomeANGRY();
            break;
        case "HAPPY":
            v = getRandomeHAPPY();
            break;
        case "Male":
            v = getRandomeMale();
            break;
        case "Mustache":
            v = getRandomeMustache();
            break;
        case "SAD":
            v = getRandomeSAD();
            break;
        case "Smile":
            v = getRandomeSmile();
            break;
        case "Sunglasses":
            v = getRandomeSunglasses();
            break;
        default:
            break;
    }
    return v;
}

export const Getter = {
    getByKey,
    getRandomeAgeRange00,
    getRandomeAgeRange10,
    getRandomeAgeRange20,
    getRandomeAgeRange30,
    getRandomeAgeRange40,
    getRandomeAgeRange50,
    getRandomeAgeRange60,
    getRandomeAgeRange70,
    getRandomeAgeRange80,
    getRandomeMale,
    getRandomeFemale,
    getRandomeEyeglasses,
    getRandomeMustache,
    getRandomeSmile,
    getRandomeSunglasses,
    getRandomeANGRY,
    getRandomeHAPPY,
    getRandomeSAD,
    getRandomeCALM,
}