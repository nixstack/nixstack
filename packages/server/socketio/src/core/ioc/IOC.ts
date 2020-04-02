import 'reflect-metadata'
import { Container, inject, interfaces, multiInject, named } from 'inversify'
import {
  autoProvide,
  buildProviderModule,
  fluentProvide,
  provide
} from 'inversify-binding-decorators'
import {
  makeLoggerMiddleware,
  textSerializer
} from 'inversify-logger-middleware'
import getDecorators from 'inversify-inject-decorators'

const container: interfaces.Container = new Container()

if (process.env.NODE_ENV === 'development') {
  let logger = makeLoggerMiddleware(undefined, out =>
    console.log(textSerializer(out))
  )
  container.applyMiddleware(logger)
}

const provideThrowable = function(identifier: any, isThrowable: boolean) {
  return fluentProvide(identifier)
    .whenTargetTagged('throwable', isThrowable)
    .done()
}

const provideNamed = function(identifier: any, name: string) {
  return fluentProvide(identifier)
    .whenTargetNamed(name)
    .done()
}
const provideSingleton = function(identifier: any) {
  return fluentProvide(identifier)
    .inSingletonScope()
    .done()
}

const provideNamedSingleton = function(identifier: any, name: string) {
  return fluentProvide(identifier)
    .inSingletonScope()
    .whenTargetNamed(name)
    .done()
}

const provideTaggedSingleton = function(
  identifier: any,
  tag: string,
  value: any
) {
  return fluentProvide(identifier)
    .inSingletonScope()
    .whenTargetTagged(tag, value)
    .done()
}

let { lazyInject, lazyMultiInject } = getDecorators(container)

export {
  container,
  autoProvide,
  provide,
  provideThrowable,
  provideNamed,
  inject,
  multiInject,
  lazyInject,
  lazyMultiInject,
  named,
  provideSingleton,
  provideNamedSingleton,
  provideTaggedSingleton,
  buildProviderModule
}
