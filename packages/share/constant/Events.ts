export enum EVENT_TYPES {
  API = 'API.EVENT',
  SOCKET = 'SOCKET.EVENT'
}

export enum EUserEvent {
  SING_UP = 'SING_UP',
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
  LOG_SUCCESS = 'LOG_SUCCES'
}

export enum EProjectEvent {
  ADD_PROJECT = 'ADD_PROJECT',
  LIST_PROJECT = 'LIST_PROJECT',
  UPDATE_PROJECT = 'UPDATE_PROJECT',
  DEL_PROJECT = 'DEL_PROJECT'
}

export const EVENTS = { ...EUserEvent, ...EProjectEvent }
