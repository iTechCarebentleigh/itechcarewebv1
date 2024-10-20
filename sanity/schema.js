import { product } from "./products"
import { shopimages } from "./shopimages"
import { faqs } from "./faqs"
import { repairs } from "./repairs"
import { repairItem } from './repairItem';
import { repairCategory } from "./repaircategories";


export const schema = {
  types: [product,shopimages,faqs,repairs,repairItem,repairCategory],
}
