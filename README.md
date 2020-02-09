
# Gol React Native Test

### Running the app on your phone
Download Expo Client from:

[AppStore](https://apps.apple.com/br/app/expo-client/id982107779)

[Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)

Click Scan QR Code:

![Image description](https://i.imgur.com/UhQPnRE.jpg)

Use your camera to read this QR Code and the app will open:

![Image description](https://i.imgur.com/1bw1ToS.png)

### Run locally 

```
git clone https://github.com/felri/felipe_avaliacao_gol
cd felipe_avaliacao_gol
yarn
yarn start
```
Follow the steps above and read the QR Code on your terminal 

or

Click A to open the app on a android simulator, I to open on a iphone simulator

### Run unit tests

```
yarn test --verbose
```

_______

### Infos

For some reason the metaweather api does not find all cities in Brazil, in Goias for example it only finds Brasilia, but the app works normally.

I've used Expo to make sure that this app will run on iOS, I don't have a mac or iphone at home so I can't test it on iOS. But I'm really familiar with android studio and xcode, and I use it daily for deployments and debugging.

I've used a non safe and non optimal env system, normally I would have used something like react-native-config but Expo does not allow linking libs. But I think it's fine for a test.


