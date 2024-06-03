import { Injectable } from '@angular/core';
import { typeTranslations, abilityTranslations  } from '../utils/translation-utils';



@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  instant(arg0: string): string {
    throw new Error('Method not implemented.');
  }

  constructor() { }


  translateTypeName(typeName: string): string {
    return typeTranslations[typeName.toLowerCase()] || typeName;
  }


  translateAbilityName(abilityName: string): string {
    return abilityTranslations[abilityName.toLowerCase()] || abilityName;
  }
}
