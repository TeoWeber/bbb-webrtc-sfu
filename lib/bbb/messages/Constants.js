"use strict";

const config = require('config');
/**
 * @classdesc
 * Message constants for the communication with BigBlueButton
 * @constructor
 */
  function Constants () {
    return {
        // Media elements
        WebRTC: "WebRtcEndpoint",
        RTP: "RtpEndpoint",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO",
        ALL: "ALL",

        // SFU app types
        SCREENSHARE_APP:  'screenshare',
        VIDEO_APP: 'video',
        AUDIO_APP: 'audio',

        // SFU requisition roles
        SEND_ROLE: 'send',
        RECV_ROLE: 'recv',
        SEND_RECV_ROLE: 'sendrecv',

        // Redis channels
        FROM_BBB_TRANSCODE_SYSTEM_CHAN : "bigbluebutton:from-bbb-transcode:system",
        FROM_VOICE_CONF_SYSTEM_CHAN: "bigbluebutton:from-voice-conf:system",
        FROM_VOICE_CONF_SYSTEM_CHAN_2x: "from-voice-conf-redis-channel",
        TO_BBB_TRANSCODE_SYSTEM_CHAN: "bigbluebutton:to-bbb-transcode:system",
        TO_BBB_MEETING_CHAN: "bigbluebutton:to-bbb-apps:meeting",
        FROM_BBB_MEETING_CHAN: "bigbluebutton:from-bbb-apps:meeting",
        FROM_BBB_APPS_USERS_CHAN: "bigbluebutton:from-bbb-apps:users",
        TO_AKKA_APPS_CHAN_2x: "to-akka-apps-redis-channel",
        FROM_SCREENSHARE: config.get('from-screenshare'),
        TO_SCREENSHARE: config.get('to-screenshare'),
        FROM_VIDEO: config.get('from-video'),
        TO_VIDEO: config.get('to-video'),
        FROM_AUDIO: config.get('from-audio'),
        TO_AUDIO: config.get('to-audio'),
        TO_AKKA_APPS: config.get('to-akka'),

        // RedisWrapper events
        REDIS_MESSAGE : "redis_message",
        WEBSOCKET_MESAGE: "ws_message",
        GATEWAY_MESSAGE: "gateway_message",

        // Errors
        MEDIA_ERROR: "MEDIA_ERROR",

        // Message version
        COMMON_MESSAGE_VERSION : config.get('common-message-version'),

        // Message identifiers 1x
        START_TRANSCODER_REQUEST: "start_transcoder_request_message",
        START_TRANSCODER_REPLY: "start_transcoder_reply_message",
        STOP_TRANSCODER_REQUEST: "stop_transcoder_request_message",
        STOP_TRANSCODER_REPLY: "stop_transcoder_reply_message",
        DESKSHARE_RTMP_BROADCAST_STARTED: "deskshare_rtmp_broadcast_started_message",
        DESKSHARE_RTMP_BROADCAST_STOPPED: "deskshare_rtmp_broadcast_stopped_message",
        GLOBAL_AUDIO_CONNECTED: "user_connected_to_global_audio",
        GLOBAL_AUDIO_DISCONNECTED: "user_disconnected_from_global_audio",
        DICONNECT_ALL_USERS: "disconnect_all_users_message",

        //Message identifiers 2x
        SCREENSHARE_RTMP_BROADCAST_STARTED_2x: "ScreenshareRtmpBroadcastStartedVoiceConfEvtMsg",
        SCREENSHARE_RTMP_BROADCAST_STOPPED_2x: "ScreenshareRtmpBroadcastStoppedVoiceConfEvtMsg",
        START_TRANSCODER_REQ_2x: "StartTranscoderSysReqMsg",
        START_TRANSCODER_RESP_2x: "StartTranscoderSysRespMsg",
        STOP_TRANSCODER_REQ_2x: "StopTranscoderSysReqMsg",
        STOP_TRANSCODER_RESP_2x: "StopTranscoderSysRespMsg",
        GLOBAL_AUDIO_CONNECTED_2x: "UserConnectedToGlobalAudioMsg",
        GLOBAL_AUDIO_DISCONNECTED_2x: "UserDisconnectedFromGlobalAudioMsg",
        // TODO: Check if this is the correct message in BBB 2.x
        DICONNECT_ALL_USERS_2x: "DisconnectAllClientsSysMsg",

        USER_CAM_BROADCAST_STARTED_2x: "UserBroadcastCamStartMsg",
        USER_CAM_BROADCAST_STOPPED_2x: "UserBroadcastCamStopMsg",
        PRESENTER_ASSIGNED_MESSAGE: "presenter_assigned_message",

        STREAM_IS_RECORDED: "StreamIsRecordedMsg",

        START_WEBCAM_SHARE: "StartWebRTCShareEvent",
        STOP_WEBCAM_SHARE: "StopWebRTCShareEvent",

        // Redis messages fields
        //  Transcoder 1x
        USER_ID : "user_id",
        OPTIONS: "options",
        VOICE_CONF_ID : "voice_conf_id",
        TRANSCODER_ID : "transcoder_id",

        // Screenshare 1x
        CONFERENCE_NAME: "conference_name",
        STREAM_URL: "streamname",
        TIMESTAMP: "timestamp",
        VIDEO_WIDTH: "vw",
        VIDEO_HEIGHT: "vh",

        // Transcoder 2x
        USER_ID_2x : "userId",
        TRANSCODER_ID_2x : "transcoderId",
        MEETING_ID_2x: "meetingId",

        //  Screenshare 2x
        CONFERENCE_NAME_2x: "voiceConf",
        SCREENSHARE_CONF_2x: "screenshareConf",
        STREAM_URL_2x: "stream",
        TIMESTAMP_2x: "timestamp",
        VIDEO_WIDTH_2x: "vidWidth",
        VIDEO_HEIGHT_2x: "vidHeight",

        // Audio
        NAME: "name",
        USERID: "userid",

        // RTP params
        MEETING_ID : "meeting_id",
        VOICE_CONF : "voice_conf",
        KURENTO_ENDPOINT_ID : "kurento_endpoint_id",
        PARAMS : "params",
        MEDIA_DESCRIPTION: "media_description",
        LOCAL_IP_ADDRESS: "local_ip_address",
        LOCAL_VIDEO_PORT: "local_video_port",
        DESTINATION_IP_ADDRESS : "destination_ip_address",
        DESTINATION_VIDEO_PORT : "destination_video_port",
        REMOTE_VIDEO_PORT : "remote_video_port",
        CODEC_NAME: "codec_name",
        CODEC_ID: "codec_id",
        CODEC_RATE: "codec_rate",
        RTP_PROFILE: "rtp_profile",
        SEND_RECEIVE: "send_receive",
        FRAME_RATE: "frame_rate",
        INPUT: "input",
        KURENTO_TOKEN : "kurento_token",
        SCREENSHARE: "deskShare",
        STREAM_TYPE: "stream_type",
        STREAM_TYPE_SCREENSHARE: "stream_type_deskshare",
        STREAM_TYPE_VIDEO: "stream_type_video",
        RTP_TO_RTMP: "transcode_rtp_to_rtmp",
        TRANSCODER_CODEC: "codec",
        TRANSCODER_TYPE: "transcoder_type",
        CALLERNAME: "callername",

        EVENT_NAME: 'eventName',

        TIMESTAMP: 'timestamp',
        TIMESTAMP_UTC: 'timestampUTC',

        MODULE: 'module',
        MODULE_WEBCAM: 'bbb-webrtc-sfu',

        FILENAME: 'filename',

        // Log prefixes
        BASE_PROCESS_PREFIX: '[BaseProcess]',
        BASE_MANAGER_PREFIX: '[BaseManager]',
        BASE_PROVIDER_PREFIX: '[BaseProvider]',
        SCREENSHARE_PROCESS_PREFIX: '[ScreenshareProcess]',
        SCREENSHARE_MANAGER_PREFIX: '[ScreenshareManager]',
        SCREENSHARE_PROVIDER_PREFIX: '[ScreenshareProvider]',
        VIDEO_PROCESS_PREFIX: '[VideoProcess]',
        VIDEO_MANAGER_PREFIX: '[VideoManager]',
        VIDEO_PROVIDER_PREFIX: '[VideoProvider]',
        AUDIO_PROCESS_PREFIX: '[AudioProcess]',
        AUDIO_MANAGER_PREFIX: '[AudioManager]',
        AUDIO_PROVIDER_PREFIX: '[AudioProvider]',

        // MCS error codes
        MEDIA_SERVER_OFFLINE: "1000",

        // Media states'
        MEDIA_FLOWING_IN: 'MEDIA_FLOWING_IN',
        MEDIA_FLOWING_OUT: 'MEDIA_FLOWING_OUT',
        MEDIA_NOT_FLOWING_IN: 'MEDIA_NOT_FLOWING_IN',
        MEDIA_NOT_FLOWING_OUT: 'MEDIA_NOT_FLOWING_OUT',
        MEDIA_CONNECTED: 'MEDIA_CONNECTED',
        MEDIA_DISCONNECTED: 'MEDIA_DISCONNECTED',
        ON_ICE_CANDIDATE: 'ON_ICE_CANDIDATE',

        MEDIA_STARTED: 'MEDIA_STARTED',
        MEDIA_STOPPED: 'MEDIA_STOPPED',
        MEDIA_STARTING: 'MEDIA_STARTING',
        MEDIA_PAUSED: 'MEDIA_PAUSE'
    }
}

module.exports = Constants();
