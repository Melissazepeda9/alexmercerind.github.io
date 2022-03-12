---
id: flutter_native_view
title: flutter_native_view
description: Embedding native windows into Flutter window.
hide_title: true
---

import DocsHeader from "../src/components/DocsHeader";

# flutter_native_view

Embedding native windows into Flutter window.

<DocsHeader repository="alexmercerind/flutter_native_view" type="pub.dev" />

## Description

A Flutter plugin / C++ library to embed other native Windows (`HWND` on Windows, `GtkWidget*` on Linux etc.) into Flutter window.

Current API design allows to embed any arbitrary `HWND` completely from Dart as a `Widget`. This can be a good choice when client code wants to embed any arbitrary third-party window (which is already opened) into the Flutter window.
However, this is not ideal in most cases because there is almost no point of embedding a third-party window directly (which will lack programmatic control via some API).

On the other hand, a window created by the client code itself e.g. a webview instance window or a video-output window etc. (on which the client code has full programmatic control) will be an ideal window to embed, in that case:

- If client code decides to create an `HWND` through platform channel interface, they can use the setup present in [`core`](https://github.com/alexmercerind/flutter_native_view/tree/master/core) to embed a window.
- Since `dart:ffi` is very capable now, one can pass the `HWND` directly as `int` of the window they created using `dart:ffi` or [`win32`](https://github.com/timsneath/win32) through existing plugin API to embed it.

<video controls style={{width: "100%"}} src="https://user-images.githubusercontent.com/28951144/158033783-086d53c9-ed58-4465-9e3d-890d9e72d1a2.mp4" />

## Example

```dart
class _MyAppState extends State<MyApp> {
  // Create a [NativeViewController].
  final controller = NativeViewController(
    // Using [FindWindow] from `package:win32` to retrieve [HWND] as [int].
    windowHandle: FindWindow(nullptr, 'VLC Media Player'.toNativeUtf16()));

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
            child: Padding(
              padding: const EdgeInsets.all(24.0),
              child: Stack(
                children: [
                  LayoutBuilder(
                    builder: (context, constraints) => NativeView(
                      // Pass [NativeViewController] to render the window.
                      controller: controller,
                      width: constraints.maxWidth,
                      height: constraints.maxHeight,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: FloatingActionButton(
                      onPressed: () {},
                      child: const Icon(Icons.edit),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
```

## Motivation

https://github.com/flutter/flutter/issues/31713

Absence of official Platform View APIs in Flutter for Windows, Linux & macOS.

## Features

#### Currently Implemented

- Placement of other Flutter `Widget`s on top of the `NativeView`.
- Multiple instances of `NativeView`.
- window movement handling & `NativeView`s positioning.
- Windows 7 SP1 >= support.

#### Under Progress

- Finalized API.
- Correct window resizing & `NativeView` sizing.
- Interractions with the `NativeView` e.g. mouse clicks or keyboard presses.
- Lazy resizing of `NativeView` `Widget` after changing size of the underlying native window to avoid airspace.
- Removing Win32 specific types & `ifdef` magic.

## Limitations & Known Issues

This setup though performant & highly customizable has few limitations right now:

- Minimizing or maximizing the parent Flutter window isn't very pleasing to look at.
- Window snapping animations on Windows 11 causes the that new indicator to render on top of the child `HWND`s (z-order?).
- Resizing window causes `NativeView`s to lag behind (race? slow `flutter::MethodResultFunctions`?). Maybe notifying the global positions of the `NativeView` upon every `build` using `dart:ffi` will be better?

## Platforms

The plugin currently works on following platforms:

| Platform | State   |
| -------- | ------- |
| Windows  | Working |
| Linux    | Not Yet |
| macOS    | Not Yet |

## License

Currently licensing strictly.

GNU General Public License v3.0

Copyright (C) 2021, Hitesh Kumar Saini <<saini123hitesh@gmail.com>>
