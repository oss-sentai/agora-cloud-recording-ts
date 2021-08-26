import Axios, { AxiosInstance, AxiosPromise } from 'axios';
import CloudrecodingClientInterface, { AcquireResponse, StopResponse, UpdateResponse, UpdateLayoutResponse, StartResponse, AcquirePrams } from "./clientInterface";

interface RecordingParams {
  plainCredentials: string,
  appid: string,
  baseUrl?: string,
  mode: 'individual' | 'mix' | 'web',
}

class CloudrecodingClient implements CloudrecodingClientInterface {
  private recordingParams: RecordingParams = {
    plainCredentials: '',
    appid: '',
    baseUrl: 'https://api.agora.io/v1/apps',
    mode: 'individual',
  }
  axiosClient: AxiosInstance;

  constructor(recordingParams: RecordingParams) {
    this.setUpAxiosClient(recordingParams);
    this.recordingParams
  }
  async acquire(acquirePrams: AcquirePrams): Promise<AcquireResponse> {
    try {
      const agoraRes = await this.axiosClient.post('/cloud_recording/acquire', acquirePrams);
    } catch (e) {
      return
    }
  }

  private setUpAxiosClient(recordingParams: RecordingParams) {
    const buffer = Buffer.from(recordingParams.plainCredentials);
    const authorizationHeader = {
      'Content-Type': 'application/json',
      Authorization: `Basic ${buffer.toString('base64')}`,
    }

    this.axiosClient = Axios.create({
      headers: authorizationHeader,
      baseURL: `${this.recordingParams.baseUrl}/${this.recordingParams.appid}`
    })
  }

  start(): Promise<StartResponse> {
    throw new Error("Method not implemented.");
  }
  update(): Promise<UpdateResponse> {
    throw new Error("Method not implemented.");
  }
  updateLayout(): Promise<UpdateLayoutResponse> {
    throw new Error("Method not implemented.");
  }
  stop(): Promise<StopResponse> {
    throw new Error("Method not implemented.");
  }
}