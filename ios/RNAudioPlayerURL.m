//React Native Audio Player logic(no UI)

#import "RNAudioPlayerURL.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
@import MediaPlayer;

@implementation RNAudioPlayerURL

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(initWithURL:(NSString *)url){
  if(!([url length]>0)) return;
  NSURL *soundUrl = [[NSURL alloc] initWithString:url];
  self.audioItem = [AVPlayerItem playerItemWithURL:soundUrl];
  self.audioPlayer = [AVPlayer playerWithPlayerItem:self.audioItem];
  [[NSNotificationCenter defaultCenter]
  	addObserver:self selector:@selector(playerItemDidReachEnd:) name:AVPlayerItemDidPlayToEndTimeNotification object:self.audioItem];
}

- (void)playerItemDidReachEnd:(NSNotification *)notification{
	[self.audioItem seekToTime:kCMTimeZero];
	[self.bridge.eventDispatcher sendAppEventWithName:@"AudioEnded" body:@{@"event": @"finished"}];
}

RCT_EXPORT_METHOD(getDuration:(RCTResponseSenderBlock)callback){
  while(self.audioItem.status != AVPlayerItemStatusReadyToPlay){
  }  //this is kind of crude but it will prevent the app from crashing due to a "NAN" return(this allows the getDuration method to be executed in the componentDidMount function of the React class without the app crashing
  float duration = CMTimeGetSeconds(self.audioItem.duration);
  callback(@[[[NSNumber alloc] initWithFloat:duration]]);
}

RCT_EXPORT_METHOD(enable:(BOOL)enabled) {
  AVAudioSession *session = [AVAudioSession sharedInstance];
  [session setCategory: AVAudioSessionCategoryAmbient error: nil];
  [session setActive: enabled error: nil];
}

RCT_EXPORT_METHOD(setCategory:(nonnull NSNumber*)key withValue:(NSString*)categoryName) {
  AVAudioSession *session = [AVAudioSession sharedInstance];
  if ([categoryName isEqual: @"Ambient"]) {
    [session setCategory: AVAudioSessionCategoryAmbient error: nil];
  } else if ([categoryName isEqual: @"SoloAmbient"]) {
    [session setCategory: AVAudioSessionCategorySoloAmbient error: nil];
  } else if ([categoryName isEqual: @"Playback"]) {
    [session setCategory: AVAudioSessionCategoryPlayback error: nil];
  } else if ([categoryName isEqual: @"Record"]) {
    [session setCategory: AVAudioSessionCategoryRecord error: nil];
  } else if ([categoryName isEqual: @"PlayAndRecord"]) {
    [session setCategory: AVAudioSessionCategoryPlayAndRecord error: nil];
  } else if ([categoryName isEqual: @"AudioProcessing"]) {
    [session setCategory: AVAudioSessionCategoryAudioProcessing error: nil];
  } else if ([categoryName isEqual: @"MultiRoute"]) {
    [session setCategory: AVAudioSessionCategoryMultiRoute error: nil];
  }
}

RCT_EXPORT_METHOD(iosControll:(RCTResponseSenderBlock)callback){
  MPRemoteCommandCenter *commandCenter = [MPRemoteCommandCenter sharedCommandCenter];
  [commandCenter.togglePlayPauseCommand addTargetWithHandler:^MPRemoteCommandHandlerStatus(MPRemoteCommandEvent * _Nonnull event) {
    return MPRemoteCommandHandlerStatusSuccess;
  }];
}

RCT_EXPORT_METHOD(play){
  [self.audioPlayer play];
}

RCT_EXPORT_METHOD(pause){
  [self.audioPlayer pause];
}

RCT_EXPORT_METHOD(seekToTime:(nonnull NSNumber *)toTime){
	[self.audioPlayer seekToTime: CMTimeMakeWithSeconds([toTime floatValue], NSEC_PER_SEC)];
}

RCT_EXPORT_METHOD(setPlayingInfo: (NSDictionary *)songDescription) {
//  UIImage *albumImage = [UIImage imageWithData:[NSData dataWithContentsOfURL:[NSURL URLWithString:songDescription[@"cover"]]]];
//  MPMediaItemArtwork *artwork = [[MPMediaItemArtwork alloc]initWithImage:albumImage];
  MPNowPlayingInfoCenter *playingInfo = [MPNowPlayingInfoCenter defaultCenter];
  playingInfo.nowPlayingInfo = @{
                                MPMediaItemPropertyTitle: songDescription[@"title"],
                                MPMediaItemPropertyArtist: songDescription[@"artist"]
                              };
  
}

@end
