class ExpositoError extends Error {

    code: ErrorCode

    constructor(code: ErrorCode, message?: string) {
        super(message != null ? message : defaultErrorMessages.get(code))

        this.code = code
    }
}


enum ErrorCode {
    UNKNOWN = 0,
}

const defaultErrorMessages = new Map<ErrorCode, string>([
    [ErrorCode.UNKNOWN, 'Unknown error']
])

export { ExpositoError, ErrorCode }