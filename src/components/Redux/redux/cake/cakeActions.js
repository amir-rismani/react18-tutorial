import { BUY_CAKE } from "./cakeTypes";

export function buyCake(cakesNumber = 1) {
    return { type: BUY_CAKE, payload: cakesNumber }
}