export enum EUserActionType {
  SING_UP = 'SING_UP',
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
  LGG_SUCCESS = 'LGG_SUCCES'
}

export enum EProjectActionType {
  ADD_PROJECT = 'ADD_PROJECT',
  LIST_PROJECT = 'LIST_PROJECT',
  UPDATE_PROJECT = 'UPDATE_PROJECT',
  DEL_PROJECT = 'DEL_PROJECT'
}

export const EActionType = { ...EUserActionType, ...EProjectActionType }