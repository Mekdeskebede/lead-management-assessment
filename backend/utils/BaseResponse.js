class BaseResponse {
  constructor(success, data = null, message = '', error = null) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.error = error;
  }

  static success(data, message = 'Operation successful') {
    return new BaseResponse(true, data, message, null);
  }

  static error(message = 'Operation failed', error = null) {
    return new BaseResponse(false, null, message, error);
  }
}

module.exports = BaseResponse; 