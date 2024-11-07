class ApiError extends Error{
  constructor(
    statusCode,
    message = 'something went wrong',
    error = [],
    statck = ''
  )
  {
    super(message);
    this.statusCode = statusCode;
    this.error = this.error;
    this.data = null
    if(statck){
        this.stack = statck

    }
    Error.captureStackTrace(this, this.constructor);
  }
}

export {ApiError}
    
