---
title: Introduction
description: Introduction to STE Slicer
---

## Installation

To start installation of Stereotech STE Slicer first [download it from](http://stereotech.org/software). After downloading, open the installation program and run the wizard to perform the installation. To make sure that Stereotech STE Slicer can operate on your computer, we recommend checking the system requirements described below.

Operating system
- Windows Vista or higher, 64 bit
System requirements
- OpenGL 2 compatible graphics card, OpenGL 4.1 for viewing 3D layers
- Intel Core 2, AMD Athlon 64 or newer
- 205 MB of free space on hard drive
- 4 GB RAM

> As these are the minimal requirements, we recommend using more efficient devices to install Stereotech STE Slicer for work with heavy models.

## First use

### Select printer

When you open Stereotech STE Slicer for the first time, you will be offered to select the 3D printer you have.

Where necessary, you can assign a specific name to the printer.

![add_printer](/docs/steslicer/getstarted/add_printer.jpg)

### Open 3D files

Click on the ‘Open file’ button in the upper-left corner of the screen. Select the model you want to prepare for printing and open it. Now the model will be uploaded and shown in 3D form.

![open_file](/docs/steslicer/getstarted/open_file.jpg)

### Printer and material configuration

The selected printer will be located in the right upper corner of the screen. Directly below it, you will find the available configuration parameters.

![printer_config](/docs/steslicer/getstarted/printer_config.jpg)

### Print settings

By default STE Slicer opens in a recommended mode. This mode is ideal for fast printing with optimized printing profiles. There are several parameters that you can set:

1. Printing mode: Choosing how to lay layers on a 5D printer
1. Layer height: select the desired layer height. Available parameters depend on the material configuration
2. Print speed: the print speed depends on the selected layer height
3. Completion: Select the fill percentage by dragging the slider
4. Enable gradual fill: Reduces the amount of fill in your print by gradually increasing the density.
5. Generating supports: This setting creates a support structure under the overhanging parts of the model to prevent the model from sagging or printing in the air.
6. Adhesion to the platform: Adds a border or raft around the base of the model to ensure that the model does not detach from the platform during printing

![print_setup](/docs/steslicer/getstarted/print_setup.jpg)

### Preview

To view the slicing result, click on the ‘Solid view’ button in the upper-right corner of the 3D viewer and change it to ‘Layer view’. This mode is ideal to see how your model will look inside and how it will be printed. Use the slider to check important parts of your 3D model. Change the print parameters until you have achieved the required result.

![layer_view](/docs/steslicer/getstarted/layer_view.jpg)

### Save the file

When STE Slicer completes slicing your model, it will be ready for printing.

You can then save the file to your computer or to a removable disk, or print it directly over the network using STE App.

![save_file](/docs/steslicer/getstarted/save_file.jpg)

You will also find information about printing in the lower-left corner. STE Slicer ensures time and material assessment of the print.

## Stereotech STE Slicer Interface Overview

The figure below shows the main STE Slicer interface with the most important functions.

![interface_overview](/docs/steslicer/getstarted/interface_overview.jpg)

1. Open file
2. Adjustment tools
3. Non-printable areas
4. 3D model
5. View mode
6. Printer and material configuration
7. Print setup, recommended mode
8. Print job information; printing time and material consumption
9. Prepare, save to file, USB or print over network
10. Model information

## Frequently asked questions

*Which operating systems does Stereotech STE Slicer support?*

Stereotech STE Slicer supports the most common Windows versions.

*What are the system requirements for running Stereotech STE Slicer?*

The minimal system requirements can be found [here](#установка).

*Does Stereotech STE Slicer support multi core slicing?*

Yes.

*How do I update for Stereotech STE Slicer?*

Stereotech STE Slicer informs the user when a new version is available via a pop-up notification at the bottom of the screen. Click the download link in the pop up window or download the latest version manually [here](http://stereotech.org/software).

*What file formats does Stereotech STE Slicer support?*

Stereotech STE Slicer supports the following 3D file formats: 3MF, OBJ, and STL. The following types of 2D image files are supported: BMP, GIF, JPG, and PNG.

*Which third-party printers are supported by Stereotech STE Slicer?*

At the moment, it supports only Stereotech printers.

*How do I update Strereotech printer firmware?*

You can find information on how to update the firmware [here](https://stereotech.org/manuals/steapp/5-settings#обновление-системы).

*Why can’t I use special characters such as !,@, & in my GCODE filename?*

The operating system prevents the user from using special characters because they are used in system files.

*Why is my platform showing a grey border where I cannot place my model?*

Gray borders on the platform edges represent a visualization of non-printable areas, such as glass clips and printable structures to increase adhesion.

*How do I change the slicing settings on a certain height?*

Slicing settings can be changed per height using post-processing plugins. Those plugins can be found in the ‘Extensions’ menu.

*Why does my profile change when I change the printer type?*

The profiles are printer-specific.
