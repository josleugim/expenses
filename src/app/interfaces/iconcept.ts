import {ICategory} from './icategory';

export interface IConcept {
  uuid: string;
  name: string;
  description: string;
  updateAtFormat: string;
  category: ICategory;
}
