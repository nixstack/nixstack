declare module 'http-proxy-rules' {
  // namespace HttpProxyRules {}

  class HttpProxyRules {
    constructor(args: any)
    match(req: any): string | undefined | null
  }

  export = HttpProxyRules
}

declare module 'body'

declare module 'forwarded-for'
