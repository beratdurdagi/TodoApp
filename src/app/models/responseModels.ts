import { ResponseData } from "./responseData";

export interface ResponseModels<T> extends ResponseData{

    data:T[]
}