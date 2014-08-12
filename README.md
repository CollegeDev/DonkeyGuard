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
1. Download the application [(for now at xda)](http://forum.xda-developers.com/xposed/modules/app-donkeyguard-security-management-t2831556)
2. Install it
3. Activate the application inside the XPosedFramework
4. Reboot your device
5. Now you can use DonkeyGuard

## How can I report Bugs or feature requests?
Simply use the features of github to report bugs or request new features.

## Feature Descriptions
### Deny Modes
In the preferences you can find two options: 
* Softcoded Default Deny Mode
* Hardcoded Default Deny Mode

Both of the "settings" are melt together with the architecture of the application. The modes protect you against IPC failures or database error during the request of personal data from an application. To understand how it works, just take a look at the figure below (sequence diagram; This diagram is not designed for software architectures, it is as simple as possible).

![](http://www.bilderload.com/bild/349154/denymoderedcircleAJ3VY.png)

The diagram shows you the sequence of the access to private data on your phone. The call of the method where the application normally gets the private data from will be forwarded to the **SettingsServer**. The server identifies the process with the assistance of the kernel and asks the **DatabaseManager** to get the user defined settings for the calling process. The Manager fetches the data (if needed) from the database and returns it to the **SettingsServer**. If anything went wrong with the communication between the SettingsServer, DatabaseManager or Database (red circle on the right; e.g. due to a broken database), the SettingsServer doesn't know if the application is allowed to access your private data or not. For this reason the Softcoded Default Deny mode will trigger and decide whether the application will get:

* The real data (allow)
* Fake randomized data (random)
* Empty data (empty)



## Preview
![](http://www.bilderload.com/bild/348344/screenshot20140729093144UO8BJ.png)
![](http://www.bilderload.com/bild/348345/screenshot20140729093210D9G30.png)  ![](http://www.bilderload.com/bild/348346/screenshot20140729093216GY28T.png)  ![](http://www.bilderload.com/bild/348347/screenshot201407290932276TD10.png)   ![](http://www.bilderload.com/bild/348348/screenshot20140729093258VVWU5.png)  ![](http://www.bilderload.com/bild/348349/screenshot20140729093310VT431.png)  ![](http://www.bilderload.com/bild/348350/screenshot201407290933225VFFJ.png) 

