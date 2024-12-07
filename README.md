# Live View Project

## Project Summary
The Live View project is an accessible and flexible digital system built to display real-time updates for stock levels or any other data with the right setup. It keeps things simple by using a Raspberry Pi Zero 2 W for deployment and hosting on GitHub Pages, making it both cost-effective and easy to manage. In this example, it’s set up to display a coffee shop menu with baked goods that dynamically update based on stock changes. The menu is organized into two sections: static drink items and dynamic baked goods, with stock updates only happening when the versionNumber in the meta.json file is incremented. This ensures updates are deliberate and avoids unnecessary changes.

Technically, the system is built with structured HTML that uses unique IDs for baked goods, responsive CSS for a polished design, and JavaScript that fetches updates from the meta.json file every 5 seconds. The JavaScript updates the stock levels only when it detects a version change, which reduces unnecessary operations and keeps the experience streamlined. The page also auto-refreshes every 10 seconds to handle any potential caching issues, adding an extra layer of reliability.

This setup is great for small businesses or events that need real-time inventory tracking, but it’s flexible enough to scale for other industries or types of data. By modifying the meta.json file and pushing updates to GitHub, users can reflect the latest data in real-time on the live page. The simplicity and reliability of this project, combined with its ability to dynamically display accurate stock information, make it a practical and effective solution for live menu boards, inventory displays, or any system that depends on real-time updates.

## Installation Instructions
**Step 1:** Install most recent OS from Raspberry Pi Imager onto MicroSD card, and boot Raspberry Pi.

**Step 2:** On boot, connect to preferred Wi-Fi network prior to opening terminal shell.

**Step 3:** Installing Wayfire - run the following commands to install Wayfire on Raspberry Pi.
```
git clone https://github.com/WayfireWM/wf-install
cd wf-install

./install.sh --prefix /opt/wayfire --stream 0.8.x
```

**Step 4**: Ensure Raspberry Pi boots into desktop environment - open Raspberry Pi Software Configuration Tool with `sudo raspi-config`. Select System Options > Boot/Auto Login > Desktop Autologin: Desktop GUI. Press Enter, Finish, and reboot when prompted.

**Step 5:** Locate `wayfire.ini` in file directory, and copy all contents from the file. In terminal shell, run `sudo nano .config/wayfire.ini` to modify the behavior and appearance of Wayfire. When file opens in nano text editor, paste content into text editor.

**Step 6:** Locate the `[autostart]` section of pasted content. Append the following code below it (replace webpage link):
```
panel = wfrespawn wf-panel-pi
background = wfrespawn pcmanfm --desktop --profile LXDE-pi
xdg-autostart = lxsession-xdg-autostart
chromium = chromium-browser https://your-link.com --disable-infobars --no-first-run --ozone-platform=wayland --enable-features=OverlayScrollbar --start-maximized
screensaver = false
dpms = false
```
**Step 7:** Press Ctrl+X, then Y, then Enter to save the edited file. Reboot Raspberry Pi with `sudo reboot`.

## How to Use
To use this system, update the meta.json file with new stock numbers and increment the versionNumber to reflect changes. Save the file, commit, and push the updates to the GitHub repository. The live page will automatically fetch the latest data and update the stock levels when it detects the new versionNumber, displayed on the deployed page running on the Raspberry Pi.

## Statement of Need
Industries like digital advertising, public transit, retail, and restaurants all need reliable ways to display real-time data, but most existing solutions are too expensive or overly complicated, especially for smaller businesses. Whether it’s tracking inventory, updating digital menus, or showing transit arrival times, there’s a clear need for a simple, affordable system that can handle live updates effectively.

This project bridges that gap by using low-cost hardware like a Raspberry Pi and free hosting through GitHub Pages to deliver a scalable, real-time display solution. It’s flexible enough to work across industries and provides a practical, budget-friendly way to show live data without unnecessary complexity.

## Project Demos