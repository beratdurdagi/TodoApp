import { ResponseData } from "./responseData";

export interface SingleResponseModel<T> extends ResponseData{

    data:T
}