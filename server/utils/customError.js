class CustomizeError extends Error {
  constructor(status, msg) {
    super(msg);
    this.status = status;
    this.msg = msg;
  }
}

module.exports = CustomizeError;
