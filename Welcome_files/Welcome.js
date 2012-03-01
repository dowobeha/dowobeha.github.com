// Created by iWeb 2.0.3 local-build-20080601

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Welcome_files/Creme_frame2_01.png'),IWCreateImage('Welcome_files/Creme_frame2_02.png'),IWCreateImage('Welcome_files/Creme_frame2_04.png'),IWCreateImage('Welcome_files/Creme_frame2_08.png'),IWCreateImage('Welcome_files/Creme_frame2_09.png'),IWCreateImage('Welcome_files/Creme_frame2_14.png'),IWCreateImage('Welcome_files/Creme_frame2_13.png'),IWCreateImage('Welcome_files/Creme_frame2_05.png')],null,0,1.000000,3.000000,3.000000,3.000000,3.000000,23.000000,23.000000,23.000000,23.000000,20.000000,19.000000,20.000000,19.000000,null,null,null,0.400000),stroke_1:new IWPhotoFrame([IWCreateImage('Welcome_files/Creme_sidebar_frame_01.png'),IWCreateImage('Welcome_files/Creme_sidebar_frame_02.png'),IWCreateImage('Welcome_files/Creme_sidebar_frame_03.png'),IWCreateImage('Welcome_files/Creme_sidebar_frame_06.png'),IWCreateImage('Welcome_files/Creme_sidebar_frame_09.png'),IWCreateImage('Welcome_files/Creme_sidebar_frame_08.png'),IWCreateImage('Welcome_files/Creme_sidebar_frame_07.png'),IWCreateImage('Welcome_files/Creme_sidebar_frame_04.png')],null,2,1.000000,0.000000,0.000000,0.000000,0.000000,10.000000,16.000000,10.000000,20.000000,523.000000,173.000000,523.000000,173.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
