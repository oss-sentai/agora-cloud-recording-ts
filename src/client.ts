import Axios, { AxiosInstance } from 'axios';
import CloudrecodingClientInterface, { AcquireResponse, StopResponse, UpdateResponse, UpdateLayoutResponse, StartResponse, AcquirePrams } from "./clientInterface";

interface RecordingParams {
  plainCredentials: string,
  appid: string,
  baseUrl?: string,
}

type Mode = 'individual' | 'mix' | 'web'

class CloudrecodingClient implements CloudrecodingClientInterface {
  private apiClient: AxiosInstance;

  constructor(recordingParams: RecordingParams) {
    this.setupAxiosClient(recordingParams);
  }

  private setupAxiosClient(params: RecordingParams) {
    const buffer = Buffer.from(params.plainCredentials);
    const authorizationHeader = {
      'Content-Type': 'application/json',
      Authorization: `Basic ${buffer.toString('base64')}`,
    }

    this.apiClient = Axios.create({
      headers: authorizationHeader,
      baseURL: `${params.baseUrl ?? 'https://api.agora.io/v1/apps'}/${params.appid}`
    })
  }

  async acquire(acquirePrams: AcquirePrams): Promise<AcquireResponse> {
    try {
      const agoraRes = await this.apiClient.post('/cloud_recording/acquire', acquirePrams);
      // TODO: create response
    } catch (e) {
      return
    }
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