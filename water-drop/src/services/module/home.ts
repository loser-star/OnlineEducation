import hyRequest from "..";

export function getHomeGoodPriceData(){
  return hyRequest.get({url:"/user"})
}