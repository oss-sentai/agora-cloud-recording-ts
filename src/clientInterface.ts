type BaseResponse = { sid: string, resourceId: string }
// Doc: https://docs.agora.io/en/cloud-recording/cloud_recording_api_rest?platform=RESTful#a-response-example-of-start
export type StartResponse = BaseResponse
// Doc: https://docs.agora.io/en/cloud-recording/cloud_recording_api_rest?platform=RESTful#a-response-example-of-update
export type UpdateResponse = BaseResponse
// Doc: https://docs.agora.io/en/cloud-recording/cloud_recording_api_rest?platform=RESTful#a-response-example-of-updatelayout
export type UpdateLayoutResponse = BaseResponse
// Doc: https://docs.agora.io/en/cloud-recording/cloud_recording_api_rest?platform=RESTful#a-response-example-of-acquire
export type AcquireResponse = Omit<BaseResponse, "sid">
// Doc: https://docs.agora.io/en/cloud-recording/cloud_recording_api_rest?platform=RESTful#a-response-example-of-stop
export type StopResponse = {
  fileListMode: "json" | string,
  fileList: {
    fileName: string,
    trackType: "audio_and_video",
    uid: string,
    mixedAllUser: boolean,
    isPlayable: boolean,
    sliceStartTime: number
  }[]
} & BaseResponse

export interface AcquirePrams {
  /**
   * - In web page recording mode, use `cname` to distinguish between recording sessions. 
   * `cname` should not exceed 128 bytes. 
   * You can use a set of appid, `cname`, and uid to identify one session. 
   * 
   * - In other recording modes, use `cname` to set the name of the channel to be recorded.
   * @type {string}
   * @memberof AcquirePrams
   */
  cname: string,
  uid: string,
  /**
   * `region`: (Optional) String
   * which is used to specify the region for connection. 
   * If you specify a region, the cloud recording server connects only to the Agora servers within that region. 
   * The following region settings are supported: 
   * "CN" (Mainland China), "AP" (Asia, excluding Mainland China), "EU" (Europe), or "NA" (North America).
   *
   * `resourceExpiredHour`: (Optional) Number.
   * Sets the time limit (in hours) for Cloud Recording RESTful API calls. 
   * Time starts counting when you successfully start a cloud recording and get an sid (the recording ID).
   * 
   * `scene`: (Optional) Number. 
   * Sets the recording options.
   * `0`(default) indicates allocating resources for video and audio recording in a channel. 
   * `1` indicates allocating resources for web page recording.
   * @type {({
   *     region?: "CN" | "AP" | "EU" | "NA"
   *     resourceExpiredHour: 24,
   *   })}
   * @memberof AcquirePrams
   */
  clientRequest: {
    region?: "CN" | "AP" | "EU" | "NA"
    resourceExpiredHour: number,
    scene: 0 | 1
  },
}

/**
 * Cloud Recording Nodejs SDK provides a Nodejs API for Agora Cloud Recording Clients.  
 * [Offical Documentation](https://docs.agora.io/en/cloud-recording/cloud_recording_api_rest?platform=RESTful#acquire-get-a-resource-id)
 * @interface CloudrecodingClientInterface
 */
interface CloudrecodingClientInterface {
  /**
   * `acquire`: Get a resource ID  
   * Before starting a cloud recording, you need to get a resource ID.
   * @returns {Promise<AcquireResponse>}
   * @memberof Cl oudrecodingClientInterface
   */
  acquire(acquirePrams: AcquirePrams): Promise<AcquireResponse>;
  start(): Promise<StartResponse>;
  update(): Promise<UpdateResponse>;
  updateLayout(): Promise<UpdateLayoutResponse>;
  stop(): Promise<StopResponse>
}

export default CloudrecodingClientInterface