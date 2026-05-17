# Conbi Fan Shadow Mod

A Cookie Clicker mod that adds a custom Shadow Achievement system with persistent tracking and visual enhancements.

This project is designed for browser-based Cookie Clicker and is distributed via GitHub Pages.

---

## What is this?

This mod extends Cookie Clicker by adding additional Shadow Achievements that track specific in-game behaviors over long-term play.

It does not modify the core game logic or replace existing content. It only adds new tracking, achievements, and visual presentation layers.

---

## Features

- Custom Shadow Achievement system  
- Persistent save system using browser storage  
- Lightweight and optimized for browser execution  
- Uses original Cookie Clicker asset style  
- Fully client-side (no installation or server required)  
- Compatible with standard Cookie Clicker web version  

---

## How to Use (GitHub Pages)

If hosted via GitHub Pages, load the mod using:

Game.LoadMod("https://conbifan.github.io/Conbi-Fan-Shadow-Mod/main.js");

Replace the URL with your actual repository path if different.

You can also paste the script directly into the browser console while running Cookie Clicker.

---

## Save System

This mod stores progress locally in your browser using localStorage.

Key: Conbi Fan Shadow Mod

Saved data includes achievement completion states, allowing progress to persist across sessions and reloads.

---

## Compatibility

- Works with official Cookie Clicker browser version  
- May not be compatible with heavily modified forks or external mod loaders  
- Requires JavaScript enabled  

---

## Technical Notes

- Hooks into Game.Achievement system  
- Uses Cookie Clicker official sprite assets for icon rendering  
- Applies lightweight canvas-based visual overlays  
- Tracks game state via Game objects (cookies per second, buildings, click counts)  
- No external API calls  
- No backend dependencies  

---

## Disclaimer

This is a fan-made mod and is not affiliated with or endorsed by Cookie Clicker or its developers.  
Use at your own discretion.

---

## Author

Conbi Fan
