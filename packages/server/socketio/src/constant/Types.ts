let TYPES = {
  Application: Symbol('Application'),
  SocketIO: Symbol('SocketIO.Server'),
  PreBuildInitializer: Symbol('PreBuildInitializer'),
  PostInstantiateInitializer: Symbol('PostInstantiateInitializer'),
  IEventManager: Symbol('IEventManager'),
  IEventListener: Symbol('IEventListener'),
  IEventManagerProvider: Symbol('IEventManagerProvider'),
  UserService: Symbol('UserService'),
  ProjectService: Symbol('ProjectService')
}

export { TYPES }
