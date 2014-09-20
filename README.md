<p align="center">
  <img src="http://www.bilderload.com/daten/senzatitolo2rdyP6NH9.jpg" alt="DonkeyGuard"/>
</p>
## What is DonkeyGuard?
DonkeyGuard is an app, similar to PDroid2.0, PDroid and other applications which are known at this sector. I developed DonkeyGuard from scratch with all my experience I've made with PDroid. DonkeyGuard allows you a fine-grained tuning of access to your private data. It currently supports 41 restrictions which can be applied for every application. Specifically, it is a Privacy service provider which implements a set of modifications to the Android Framework to allow you to interact with applications which are trying to access your private data.

## Supported Features
DonkeyGuard allows blocking access for any installed application on your phone to the following data separately:
* device_id
* phone_number
* sim_serial_number
* subscriber_id
* incoming_call_number
* outgoing_call_number
* gps_and_network_location
* impi_impu
* cell_info
* accounts
* accounts_credentials
* read_contacts
* read_call_log
* call_phone
* read_calendar
* receive_sms
* send_sms
* receive_mms
* send_mms - not implemented in alpha
* record_audio
* use_camera
* read_bookmarks
* wifi_info
* switch_mobile_network_state
* switch_wifi_state
* sim_info
* network_info
* android_id
* access_media
* read_external_storage - not implemented in alpha
* write_calendar
* write_call_log
* write_contacts
* write_bookmarks
* write_external_storage - not implemented in alpha
* account_authenticator
* read_sms
* write_sms
* read_mms
* write_mms
* network_state

## Installation Instructions
1. Download the application (category releases)
2. Install it
3. Activate the application inside the XPosedFramework
4. Reboot your device
5. Now you can use DonkeyGuard

## Translation
If you want to translate the application, please visit [GetLocalization](http://www.getlocalization.com/DonkeyGuard/). I will sync these files every release.

## How can I report Bugs or feature requests?
Simply use the features of github to report bugs or request new features.

## FAQ
### My device doesn't boot any more or stucks in bootloop, what can I do?
Deactivate the Xposed-Framework during the boot (press volume up/down several times; the device vibrates everytime the button gets touched). If that won't work for you, please flash the RescueDonkey.zip from this repo (branch rescue) or download it from [XDA](http://forum.xda-developers.com/showpost.php?p=54471912&postcount=1). The flashable RescueDonkey.zip will be copied at the first start of the application to your sdcard directory. Simply boot into the recovery mode and flash it. Please don't forget to take a snapshot of the logs (logcat) and post them on XDA.

### How can I provide logs during a bootloop?
First, you need to install ADB. If you don't know what it is, simply follow [this](http://lifehacker.com/the-easiest-way-to-install-androids-adb-and-fastboot-to-1586992378) great guide to install it (it is pretty simple; only ~1 minute of your time is required for the installation). If adb is installed, simply use the command (cmd-line/terminal): 

    adb logcat -d > log.txt

to dump the logs. Run this command during the bootloop (it should at least bootloop one time before you dump the logs) and send the log.txt to me or post an issue at my github.

### The internet restriction doesn't work, what can I do?
You need to install the [Cydia Substrate](http://www.cydiasubstrate.com) Framework for Android. Simply download the Application from the PlayStore (or website) and install it. Then do following:

* Open the Application
* Tap the button "Link Substrate Files"
* Restart your device

Please make sure that DonkeyGuard is activated inside the XposedFramework, otherwise it won't work.

### Some application(s) force close after installing DonkeyGuard, what can I do?
First make sure you're running the latest version of DonkeyGuard. If you're on the latest version and the application(s) doesn't stop to force close, please use the built-in feature "Report an error". If you're able to fetch logs (from logcat) by yourself, plase do not hesitate to send them to me with a little description about the possible bug.

### I can't delete my settings from DonkeyGuard, what can I do?
Until now, DonkeyGuard doesn't support to delete the settings you've made. You need to delete them manually by removing following files:

* /data/system/settings.db
* /data/system/settings.db-shm
* /data/system/settings.db-wal

Afterwards you need to reboot your device.

### How can I provide logs which may help you to fix the reported bug?
Since v0.5.53, a built-in error report exists. If you don't know how to fetch logs, please use this feature directly after your reported bug occurs. If you want to provide (possibly) more information, you can use the application [CatLog](https://play.google.com/store/apps/details?id=com.nolanlawson.logcat) to fetch logs. Afterwards please open an issue at my github or post them on XDA. Furthermore: please do not forget to describe your problem.

## Feature Descriptions
### Deny Modes
In the preferences you can find two options: 
* Softcoded Default Deny Mode
* Hardcoded Default Deny Mode

Both of the "settings" are melt together with the architecture of the application. The modes protect you against IPC failures or database error during the request of personal data from an application. To understand how it works, just take a look at the figure below (sequence diagram; This diagram is not designed for software architectures, it is as simple as possible).

![](http://www.bilderload.com/bild/349154/denymoderedcircleAJ3VY.png)

The diagram shows the sequence of the access to private data on your phone. The call of the method where the application normally gets the private data from will be forwarded to the **SettingsServer**. The server identifies the process with the assistance of the kernel and asks the **DatabaseManager** to get the user defined settings for the calling process. The Manager fetches the data (if needed) from the database and returns it to the **SettingsServer**. If something went wrong with the communication between the **SettingsServer**, **DatabaseManager** or **Database** (red circle on the right; e.g. due to a broken database), the **SettingsServer** doesn't know if the application is allowed to access your private data or not. For this reason the Softcoded Default Deny mode will trigger and decide whether the application will get:

* The real data (allow)
* Fake randomized data (random)
* Empty data (empty)

You can choose this behavior inside the preference fragment. If the Softcoded Default Deny mode or the IPC with the **SettingsServer** fails, the Hardcoded Default Deny Mode will trigger. This mode is "hardcoded" and can't be bypassed. It has the same behavior like the Softcoded Default Deny mode, but can not be modified by the user. In future I will provide 3 versions of the application where the Hardcoded Default Deny mode has following values:

* Real (allow)
* Random (randomized generated fake data)
* Empty (empty values)

So you have to decide which behavior you prefer and download the suitable version.

### Default Privacy Mode
The default privacy mode is a framework feature which gives you the possibility to decide what happens if an application tries to access your private data, but no settings for the requested application have been set. The feature supports following values: 

* Allow - The application will get access to the requested permission/data)
* Random - The application will get randomized generated fake data
* Empty - The application will get empty values

It is not recommended to use Random or Empty, because it could be that system applications won't work as expected anymore.


## Preview
![](http://www.bilderload.com/bild/348344/screenshot20140729093144UO8BJ.png)
![](http://www.bilderload.com/bild/348345/screenshot20140729093210D9G30.png)  ![](http://www.bilderload.com/bild/348346/screenshot20140729093216GY28T.png)  ![](http://www.bilderload.com/bild/348347/screenshot201407290932276TD10.png)   ![](http://www.bilderload.com/bild/348348/screenshot20140729093258VVWU5.png)  ![](http://www.bilderload.com/bild/348349/screenshot20140729093310VT431.png)  ![](http://www.bilderload.com/bild/348350/screenshot201407290933225VFFJ.png) 

