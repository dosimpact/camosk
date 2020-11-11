
/**
 * main recommand
 * 
 * confidenceObject 를 받습니다.
 * FilterData(confidenceObject); 를 통해서, 하나의 항목으로 추려냅니다.
 * 해당 항목으로 getVideoV () 동영상 )를 얻습니다.
 */
import FilterData from "./FilterData"
import { Getter } from './DataGetters'

const DefaultV = "3MSPHzlRXQQ";

const getVideoV = (confidenceObject) => {
    const resultV = Getter.getByKey(FilterData(confidenceObject));
    return resultV ? resultV : DefaultV

}

export default getVideoV