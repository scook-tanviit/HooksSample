import { errorFlagList } from '../App/System/Context';

export interface ErrorHandlerStruct {

}

export interface ErrorContextStruct{

}

export interface BaseDominStruct{
  errors: [],
  [key:string]: any,
}

export interface DomainHookStruct{
  name: string,
  domain: BaseDominStruct,
  dispatcher: Function,
}

export enum ErrorFlags{
  NetworkError, 
  SystemError,
  anotherSteveBug,
}

export interface ErrorDomainStruct extends BaseDominStruct{
  errorFlags: ErrorFlags[],

}

export interface ErrorDomainHookStruct extends DomainHookStruct{
  name: 'error',
  domain: ErrorDomainStruct,
  dispatcher: Function
}


export interface HookContextStruct{
  [key: string]: DomainHookStruct,
  error: ErrorDomainHookStruct,

}
