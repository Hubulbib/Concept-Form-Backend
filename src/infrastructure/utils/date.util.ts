export const tsUnix = (): number => Math.round(Date.now() / 1000)

export const tsUnixMs = (): number => Math.round(new Date().getTime())
