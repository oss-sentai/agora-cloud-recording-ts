export const STATUS_CODE = {
  SUCCESS: 200, // The request is successful.
  ALREADY_RUNNING: 201, // The recording is already running. Do not repeat the start request with the same resource ID.
  NOT_SEND_STREAM: 206, // No user in the channel sent a stream during the recording process, or some of the recorded files are uploaded to the Agora Cloud Backup instead of the third-party cloud storage.
  BAD_REQUEST: 400, // The server cannot process the request due to malformed request syntax, or the cloud recording service is not enabled.
  UNAUTHORIZED: 401, // Unauthorized (incorrect Customer ID/Customer Secret).
  NOT_FOUND: 404, // The requested resource could not be found.
  INTERNAL_SERVER_ERROR: 500, // Internal server error.
  GATEWAY_TIMEOUT: 504, // The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
}


