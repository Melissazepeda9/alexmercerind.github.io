"use strict";(self.webpackChunkalexmercerind_github_io=self.webpackChunkalexmercerind_github_io||[]).push([[482],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,w=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(w,o(o({ref:t},d),{},{components:n})):a.createElement(w,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8445:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"flutter_acrylic",title:"flutter_acrylic",image:"https://github.com/alexmercerind/flutter_acrylic/blob/assets/mug8J4efWu.gif?raw=true",description:"Window acrylic, mica & transparency effects for Flutter on Windows, macOS & Linux.",hide_title:!0},s="flutter_acrylic",u={unversionedId:"flutter_acrylic",id:"flutter_acrylic",title:"flutter_acrylic",description:"Window acrylic, mica & transparency effects for Flutter on Windows, macOS & Linux.",source:"@site/docs/flutter_acrylic.md",sourceDirName:".",slug:"/flutter_acrylic",permalink:"/docs/flutter_acrylic",tags:[],version:"current",frontMatter:{id:"flutter_acrylic",title:"flutter_acrylic",image:"https://github.com/alexmercerind/flutter_acrylic/blob/assets/mug8J4efWu.gif?raw=true",description:"Window acrylic, mica & transparency effects for Flutter on Windows, macOS & Linux.",hide_title:!0},sidebar:"main",previous:{title:"dart_vlc",permalink:"/docs/dart_vlc"},next:{title:"windows_taskbar",permalink:"/docs/windows_taskbar"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Initialize the plugin",id:"initialize-the-plugin",level:3},{value:"Apply effect to your window",id:"apply-effect-to-your-window",level:3},{value:"Available effects",id:"available-effects",level:3},{value:"Enter fullscreen",id:"enter-fullscreen",level:3},{value:"Exit fullscreen",id:"exit-fullscreen",level:3},{value:"Hide controls",id:"hide-controls",level:3},{value:"Show controls",id:"show-controls",level:3},{value:"Other macOS only utility features",id:"other-macos-only-utility-features",level:3},{value:"Notes",id:"notes",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Platforms",id:"platforms",level:2},{value:"License",id:"license",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flutter_acrylic"},"flutter_acrylic"),(0,l.kt)("p",null,"Window acrylic, mica & transparency effects for Flutter on Windows, macOS & Linux."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Mention in your ",(0,l.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  ...\n  flutter_acrylic: ^1.0.0\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Windows 10 versions higher than 1803 & all Windows 11 versions are supported by the plugin, although not all effects might be available to a particular Windows version. See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/alexmercerind/flutter_acrylic/issues"},"pinned issues")," if you encounter some problem or feel free to file one yourself."))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/alexmercerind/flutter_acrylic/blob/assets/mug8J4efWu.gif?raw=true",alt:null})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'Example app running on Microsoft Windows 11 (pre-compiled release mode x64 executable available to test in the "Releases" tab).')),(0,l.kt)("h2",{id:"tutorial"},"Tutorial"),(0,l.kt)("h3",{id:"initialize-the-plugin"},"Initialize the plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  await Window.initialize();\n  runApp(MyApp());\n}\n")),(0,l.kt)("h3",{id:"apply-effect-to-your-window"},"Apply effect to your window"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"await Window.setEffect(\n  effect: WindowEffect.acrylic,\n  color: Color(0xCC222222),\n);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"await Window.setEffect(\n  effect: WindowEffect.mica,\n  dark: true,\n);\n")),(0,l.kt)("h3",{id:"available-effects"},"Available effects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"/// Available effects for the Flutter window.\nenum WindowEffect {\n  /// Default window background.\n  /// Works on Windows & Linux.\n  disabled,\n\n\n  /// Solid colored window background.\n  /// Works on Windows & Linux.\n  solid,\n\n\n  /// Transparent window background.\n  /// Works on Windows & Linux.\n  transparent,\n\n\n  /// Aero glass effect.\n  /// Windows Vista & Windows 7 like glossy blur effect.\n  /// Works only on Windows.\n  aero,\n\n\n  /// Acrylic is a type of brush that creates a translucent texture. You can apply acrylic to app surfaces to add depth and help establish a visual hierarchy.\n  /// Works only on Windows 10 version 1803 or higher.\n  acrylic,\n\n\n  /// Mica is an opaque, dynamic material that incorporates theme and desktop wallpaper to paint the background of long-lived windows.\n  /// Works only on Windows 11 or greater.\n  mica,\n\n\n  /// Tabbed is a Mica like material that incorporates theme and desktop wallpaper, but having more transparency.\n  /// Works only on later Windows 11 versions (builds higher than 22523).\n  tabbed,\n\n\n  /// The material for a window\u2019s titlebar.\n  /// Works only on macOS.\n  titlebar,\n\n\n  /// The material used to indicate a selection.\n  /// Works only on macOS.\n  selection,\n\n\n  /// The material for menus.\n  /// Works only on macOS.\n  menu,\n\n\n  /// The material for the background of popover windows.\n  /// Works only on macOS.\n  popover,\n\n\n  /// The material for the background of window sidebars.\n  /// Works only on macOS.\n  sidebar,\n\n\n  /// The material for in-line header or footer views.\n  /// Works only on macOS.\n  headerView,\n\n\n  /// The material for the background of sheet windows.\n  /// Works only on macOS.\n  sheet,\n\n\n  /// The material for the background of opaque windows.\n  /// Works only on macOS.\n  windowBackground,\n\n\n  /// The material for the background of heads-up display (HUD) windows.\n  /// Works only on macOS.\n  hudWindow,\n\n\n  /// The material for the background of a full-screen modal interface.\n  /// Works only on macOS.\n  fullScreenUI,\n\n\n  /// The material for the background of a tool tip.\n  /// Works only on macOS.\n  toolTip,\n\n\n  /// The material for the background of opaque content.\n  /// Works only on macOS.\n  contentBackground,\n\n\n  /// The material to show under a window's background.\n  /// Works only on macOS.\n  underWindowBackground,\n\n\n  /// The material for the area behind the pages of a document.\n  /// Works only on macOS.\n  underPageBackground,\n}\n")),(0,l.kt)("h3",{id:"enter-fullscreen"},"Enter fullscreen"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.enterFullscreen();\n")),(0,l.kt)("h3",{id:"exit-fullscreen"},"Exit fullscreen"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.exitFullscreen();\n")),(0,l.kt)("h3",{id:"hide-controls"},"Hide controls"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.hideWindowControls();\n")),(0,l.kt)("h3",{id:"show-controls"},"Show controls"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.showWindowControls();\n")),(0,l.kt)("h3",{id:"other-macos-only-utility-features"},"Other macOS only utility features"),(0,l.kt)("p",null,"Get the height of the titlebar when the full-size content view is enabled."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final titlebarHeight = Window.getTitlebarHeight();\n")),(0,l.kt)("p",null,"Set the document to be edited."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.setDocumentEdited();\n")),(0,l.kt)("p",null,"Set the document to be unedited."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.setDocumentUnedited();\n")),(0,l.kt)("p",null,"Set the represented file of the window."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.setRepresentedFilename('path/to/file.txt');\n")),(0,l.kt)("p",null,"Set the represented URL of the window."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.setRepresentedUrl('https://flutter.dev');\n")),(0,l.kt)("p",null,"Hide the titlebar of the window."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.hideTitle();\n")),(0,l.kt)("p",null,"Show the titlebar of the window."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.showTitle();\n")),(0,l.kt)("p",null,"Make the window's titlebar transparent."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.makeTitlebarTransparent();\n")),(0,l.kt)("p",null,"Make the window's titlebar opaque."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.makeTitlebarOpaque();\n")),(0,l.kt)("p",null,"Enable the window's full-size content view.\nIt is recommended to enable the full-size content view when making\nthe titlebar transparent."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.enableFullSizeContentView();\n")),(0,l.kt)("p",null,"Disable the window's full-size content view."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.disableFullSizeContentView();\n")),(0,l.kt)("p",null,"Zoom the window."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.zoomWindow();\n")),(0,l.kt)("p",null,"Unzoom the window."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.unzoomWindow();\n")),(0,l.kt)("p",null,"Get if the window is zoomed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final isWindowZoomed = Window.isWindowZoomed();\n")),(0,l.kt)("p",null,"Get if the window is fullscreened."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final isWindowFullscreened = Window.isWindowFullscreened();\n")),(0,l.kt)("p",null,"Hide/Show the window's zoom button."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.hideZoomButton();\nWindow.showZoomButton();\n")),(0,l.kt)("p",null,"Hide/Show the window's miniaturize button."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.hideMiniaturizeButton();\nWindow.showMiniaturizeButton();\n")),(0,l.kt)("p",null,"Hides/Show the window's close button."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.hideCloseButton();\nWindow.showCloseButton();\n")),(0,l.kt)("p",null,"Enable/Disable the window's zoom button."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.enableZoomButton();\nWindow.disableZoomButton();\n")),(0,l.kt)("p",null,"Enable/Disable the window's miniaturize button."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.enableMiniaturizeButton();\nWindow.disableMiniaturizeButton();\n")),(0,l.kt)("p",null,"Enable/Disable the window's close button."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.enableCloseButton();\nWindow.disableCloseButton();\n")),(0,l.kt)("p",null,"Get whether the window is currently being resized by the user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final isWindowInLiveResize = Window.isWindowInLiveResize();\n")),(0,l.kt)("p",null,"Set the window's alpha value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.setWindowAlphaValue(0.75);\n")),(0,l.kt)("p",null,"Get if the window is visible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final isWindowVisible = Window.isWindowVisible();\n")),(0,l.kt)("p",null,"Set the window's titlebar to the default (opaque) color."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.setWindowBackgroundColorToDefaultColor()\n")),(0,l.kt)("p",null,"Make the window's titlebar clear."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.setWindowBackgroundColorToClear()\n")),(0,l.kt)("p",null,"Set the window's blur view state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.setBlurViewState(MacOSBlurViewState.active);\nWindow.setBlurViewState(MacOSBlurViewState.inactive);\nWindow.setBlurViewState(MacOSBlurViewState.followsWindowActiveState);\n")),(0,l.kt)("p",null,"More features coming soon."),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"No additional setup is required.")),(0,l.kt)("p",null,"On Windows 11 versions higher than or equal to 22523, ",(0,l.kt)("inlineCode",{parentName:"p"},"DwmSetWindowAttribute")," API is used for ",(0,l.kt)("inlineCode",{parentName:"p"},"WindowEffect.acrylic"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"WindowEffect.mica")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"WindowEffect.tabbed")," effects."),(0,l.kt)("p",null,"This plugin uses the undocumented ",(0,l.kt)("inlineCode",{parentName:"p"},"SetWindowCompositionAttribute")," API from ",(0,l.kt)("inlineCode",{parentName:"p"},"user32.dll")," on Windows 10 & early Windows 11 versions to achieve the acrylic effect.\nLearn more at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/riverar"},"Rafael Rivera"),"'s amazing blog post about this ",(0,l.kt)("a",{parentName:"p",href:"https://withinrafael.com/2015/07/08/adding-the-aero-glass-blur-to-your-windows-10-apps"},"here"),"."),(0,l.kt)("p",null,"[ONLY on Windows 10]"," In most cases, you might wanna render custom window frame because the blur effect might leak outside the window boundary.\nYou can use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitsdojo/bitsdojo_window"},"bitsdojo_window")," to make a custom window for your Flutter application."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WindowEffect.acrylic"),' causes lag on window drag in Windows 10, this issue is fixed by Microsoft in Windows 11. This issue can be prevented by a "hack", however nothing has been done within the plugin to circumvent this on Windows 10.'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WindowEffect.mica")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"WindowEffect.tabbed")," only works on Windows 11."),(0,l.kt)("p",null,"You can see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/alexmercerind/flutter_acrylic/blob/master/example/lib/main.dart"},"example")," application for further details."),(0,l.kt)("h3",{id:"macos"},"macOS"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Additional setup for macOS:")),(0,l.kt)("p",null,"Open the ",(0,l.kt)("inlineCode",{parentName:"p"},"macos/Runner.xcworkspace")," folder of your project using Xcode, press \u21e7 + \u2318 + O and search for ",(0,l.kt)("inlineCode",{parentName:"p"},"MainFlutterWindow.swift"),"."),(0,l.kt)("p",null,"Insert ",(0,l.kt)("inlineCode",{parentName:"p"},"import flutter_acrylic")," at the top of the file.\nThen, replace the code above the ",(0,l.kt)("inlineCode",{parentName:"p"},"super.awakeFromNib()"),"-line with the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let windowFrame = self.frame\nlet blurryContainerViewController = BlurryContainerViewController()\nself.contentViewController = blurryContainerViewController\nself.setFrame(windowFrame, display: true)\n\n/* Initialize the flutter_acrylic plugin */\nMainFlutterWindowManipulator.start(mainFlutterWindow: self)\n\nRegisterGeneratedPlugins(registry: blurryContainerViewController.flutterViewController)\n")),(0,l.kt)("p",null,"Assuming you're starting with the default configuration, the finished code should look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"import Cocoa\nimport FlutterMacOS\n+import flutter_acrylic\n\nclass MainFlutterWindow: NSWindow {\n  override func awakeFromNib() {\n-   let flutterViewController = FlutterViewController.init()\n-   let windowFrame = self.frame\n-   self.contentViewController = flutterViewController\n-   self.setFrame(windowFrame, display: true)\n\n-   RegisterGeneratedPlugins(registry: flutterViewController)\n\n+   let windowFrame = self.frame\n+   let blurryContainerViewController = BlurryContainerViewController()\n+   self.contentViewController = blurryContainerViewController\n+   self.setFrame(windowFrame, display: true)\n\n+   /* Initialize the flutter_acrylic plugin */\n+   MainFlutterWindowManipulator.start(mainFlutterWindow: self)\n\n+   RegisterGeneratedPlugins(registry: blurryContainerViewController.flutterViewController)\n\n    super.awakeFromNib()\n  }\n}\n")),(0,l.kt)("p",null,"Now press \u21e7 + \u2318 + O once more and search for ",(0,l.kt)("inlineCode",{parentName:"p"},"Runner.xcodeproj"),". Go to ",(0,l.kt)("inlineCode",{parentName:"p"},"info")," > ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment Target")," and set the ",(0,l.kt)("inlineCode",{parentName:"p"},"macOS Deployment Target")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"10.11")," or above."),(0,l.kt)("p",null,"Depending on your use case, you may want to extend the area of the window that Flutter can draw to to the entire window, such that you are able to draw onto the window's title bar as well (for example when you're only trying to make the sidebar transparent while the rest of the window is meant to stay opaque)."),(0,l.kt)("p",null,"To do so, enable the full-size content view with the following Dart code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Window.makeTitlebarTransparent();\nWindow.enableFullSizeContentView();\n")),(0,l.kt)("p",null,"When you decide to do this, it is recommended to wrap your application (or parts of it) in a ",(0,l.kt)("inlineCode",{parentName:"p"},"TitlebarSafeArea")," widget as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"TitlebarSafeArea(\n  child: YourApp(),\n)\n")),(0,l.kt)("p",null,"This ensures that your app is not covered by the window's title bar."),(0,l.kt)("h3",{id:"linux"},"Linux"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Additional setup for Linux:")),(0,l.kt)("p",null,"Find ",(0,l.kt)("inlineCode",{parentName:"p"},"my_application.cc")," inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"linux")," directory of your Flutter project & remove following lines from it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"gtk_widget_show(GTK_WIDGET(window));\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"gtk_widget_show(GTK_WIDGET(view));\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Adding blur to the Window.")),(0,l.kt)("p",null,"Since current Flutter embedder on Linux uses GTK 3.0, so there is no official API available for backdrop blur of the window."),(0,l.kt)("p",null,"However, some desktop environments like KDE Plasma (with KWin compositor) have some third party scripts like ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/esjeon/kwin-forceblur"},"kwin-forceblur")," from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/esjeon"},"Eon S. Jeon"),", which allow to add blur to GTK 3.0 windows aswell (when the window is transparent, which you can certainly achieve using the plugin). Thus, this setup can be used to obtain result as shown in the picture."),(0,l.kt)("p",null,"Blur on Linux is more dependent on the compositor, some compositors like compiz or wayfire also seem to support blur effects."),(0,l.kt)("h2",{id:"platforms"},"Platforms"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Platform"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Maintainer"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Windows"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexmercerind"},"Hitesh Kumar Saini"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"macOS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Adrian-Samoticha"},"Adrian Samoticha"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Linux"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexmercerind"},"Hitesh Kumar Saini"))))),(0,l.kt)("h2",{id:"license"},"License"),(0,l.kt)("p",null,"MIT License. Contributions welcomed."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/alexmercerind/flutter_acrylic/blob/assets/aero.jpg?raw=true",alt:null})),(0,l.kt)("p",null,"Aero blur effect."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/alexmercerind/flutter_acrylic/blob/assets/linux_blur.png?raw=true",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/alexmercerind/flutter_acrylic/blob/assets/transparent.jpg?raw=true",alt:null})),(0,l.kt)("p",null,"Transparent Flutter window."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86920182/139502224-a1a25c9d-a945-4685-be3b-715d83ce52ae.png",alt:"image"})),(0,l.kt)("p",null,"Transparent Flutter window on macOS Monterey with dark mode enabled."))}m.isMDXComponent=!0}}]);