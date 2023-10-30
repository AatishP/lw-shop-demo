# Minimalist Online Markdown Editor

This is the **simplest** and **slickest** online Markdown editor.  
Just write Markdown and see what it looks like as you type. And convert it to HTML in one click.

## Getting started

### How?

Just start typing in the left panel.

### Buttons you might want to use

- **Quick Reference**: that's a reminder of the most basic rules of Markdown
- **HTML | Preview**: _HTML_ to see the markup generated from your Markdown text, _Preview_ to see how it looks like

### Privacy

- No data is sent to any server – everything you type stays inside your browser
- The editor automatically saves what you write locally for future use.  
  If using a public computer, either empty the left panel before leaving the editor or use your browser's privacy mode

# Simple Shop - A Demo App

This App was created using React Native over the course of about a day to fulfil the following brief for a basic shopping App:

Screens:

- Splash screen
- Home Screen
- Product screen
- Cart page
- Checkout process through confirmation page

Product must have:

- 2 images
- Description
- Price
- Variations with different features and prices
- Can only buy one of each variation per cart

Extra notes:

- It is allowed to have one product only as long as there are variations following the instructions above.
- Don’t expect a fully fleshed UI/UX, happy to have grey scale UI and things to simplify the work, at least make sure that the user journey flows

## Getting started

Note that this project was created on a device with a Apple Silicon, running macOS 14.0, Node 18.12.1, Xcode 15.0 and Android Studio 2022.3.1. It's been tested on a simulated iOS device running iOS 17.0, an emulated Android device running Android 13.0, and a real iPhone 15 Pro Max running iOS 17.0.3. It'll probably work with different configurations, but no guarantees!

**All of the instructions below assume you're running the above configuration.**

To get started, you'll want to follow the **React Native CLI quickstart** guide (not Expo) [here](https://reactnative.dev/docs/environment-setup) for both iOS and Android, excluding the 'Creating a new application' step. Please take note of the following additions/modifications:

1. I recommend downloading Xcode directly from [Apple Developer](https://developer.apple.com/download/applications/) if you have a developer account. It's much easier to work with in respect to updating/managing separate versions
2. If you want to test this on a real iOS device, you'll want to run `brew install ios-deploy`
3. Install the Android Command-line tools from within the SDK Tools section of the Android Studio SDK Manager, and add `export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin` to your preferred environment configuration file (e.g. `~/.zshrc`)
4. Add `export JAVA_HOME="/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home"` to your preferred environment configuration file (e.g. `~/.zshrc`) (this is assuming you installed the JDK recommended in the quickstart guide above - adjust this as necessary)
5. While all of those instructions should result in a reproducible outcome, there's almost always things that go wrong due to slightly different setups on different devices. `npx react-native doctor` can help point the way if things aren't working quite right. For Android, opening Android Studio and running a gradle sync can also help.
6. This project was configured with `yarn` - it will _probably_ work with npm, just substitute any instructions that mention `yarn` with `npm` (it'll mess with the lockfile, though)

After all the project requirements have been set up, including Xcode installed and signed in, and Android Studio set up with an emulator, you can navigate to the root project directory and run the following commands to start the App and the Metro bundler:

### iOS

1. `yarn` (`npm install` if using npm)
2. `cd ios`
3. `pod install`
4. `cd ..`
5. `yarn ios` (this is configured in `package.json` to run on an iPhone 15 simulator - adjust or pass in your own arguments if necessary)

### Android

1. `yarn` (`npm install` if using npm)
2. `yarn android` (this should launch an existing emulator, or connect to a running one. Your terminal window can appear unresponsive for a bit after running it, so give it a minute or two to finish running background tasks)

You can also run the project directly from Xcode or Android Studio if you wish.

## Extra notes

### Image Credits:

I modified all of the product images to remove most identifying marks, but here's where I found the originals:

https://lekkerbikes.com.au/products/amsterdam-commuter-bike

https://www.bicycling.com/bikes-gear/a26066137/best-race-bikes/

https://www.colombos.net.au/store/Coca-Cola-Can-p186465082

https://www.istockphoto.com/photos/soda-bottle-on-white

https://fjallraven.com.au/products/f-ovik-knit-sweater-m?variant=40782106984644
