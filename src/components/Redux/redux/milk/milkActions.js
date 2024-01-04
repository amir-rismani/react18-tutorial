import { BUY_MILK } from "./milkTypes";

export function buyMilk(milksNumber = 1) {
    return { type: BUY_MILK, payload: milksNumber }
}