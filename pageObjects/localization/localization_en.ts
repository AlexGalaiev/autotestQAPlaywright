
export class ProjectLocalizationEN {
  private localEn: {[key: string]: string};

  getValue(key: string): string {
    return this.localEn[key];
}
  
  constructor(){
    this.localEn = {
      "successPopupHeader" : "Account created!",
      "successPopupText" : "Complete the process of registration to start trading",
      "successPopupContinieBTN": "Continue",
      "successPopupGoToPlatform": "Go to platform"
    }
  } 
}
