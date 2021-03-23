---
title: Printer Operation
description: Printer Operation
---

## File types

This section describes the various file types that you will deal with when working with ST 520. STL files are intended to store 3D models. G-codes contain instructions for a Stereotech printer.

## Obtaining models for 5D printing

To start working with 5D printer STE 520 you need to obtain a 3D model in the STL format.
This can be done in three ways:

### 1. Download a pre-made model from external resources

For example, [thingiverse.com](https://thingiverse.com) has 1.5 million models ready for 5D printing. Models are often accompanied by a description of 5D printing settings that will allow you to get a positive result.

![work 1](/docs/ste320/work/thingiverse.jpg)

This method is well suited for new users and does not require special skills.

>**Attention!** 5D printer STE 520 is designed to print with thermoplastic polymers, the properties of which depend on many factors. Therefore, optimal results of 5D printing can be achieved experimentally.

### 2. Create a model using a computer-aided design (CAD) system

Creating a model in a CAD system requires appropriate design skills.
The following software products are best suited for this purpose:

- Special packages for 3D printing: 3D Builder (https:// Tinkercad (https://www.tinkercad.com/)
- Industrial design packages: Fusion360 (https://www.autodesk.com/products/fusion-360/)
- 3D visualization packages: SketchUp (www. Blender (https://www.blender.org/)

![work 2](/docs/ste320/work/fusion360.jpg)

For professional 5D printing, select the software package according to your needs. Different products contain specific tools that facilitate the design of specific tasks.

Instructions on how to use software products can be found on the manufacturers’ websites.

>**Attention!**BIM (building information modeling) design packages are not suitable for 5D printing, as STL models obtained in them are often not manifold.
Use only licensed software. All the above-listed software products have a free version.

Each computer-aided design system has its own format for describing the model geometry. However, any CAD system allows to export the STL model.

This method is well suited for advanced and professional users.

### 3. Create 3D model by scanning the object

To create a 3D model by scanning an object, you will need a 3D scanner and point cloud software. More information on the use of this method can be found on the websites of 3D scanner manufacturers.

This method is well suited for advanced and professional users.

## Preparing models for 5D printing

>**Attention!** this section assumes that you already have a model of the future product in the ".STL"format. If you don't have one, read the previous section "getting a model for 3D printing".

To 5D print the resulting model, you need to prepare instructions for the Stereotech Printer in a special slicer software.

The STE 520 5D printer is adapted to work with the Stereotech STE Slicer. Download STL models, configure print modes, and save GCODE instructions for the Stereotech 5D printer.
The slicer allows you to use different printing modes to get special product characteristics. For more information about STE Slicer, see the STE Slicer user guide.

## Loading/unloading material

You can install the spool with the material through the inspection window or by opening the side door. The side door opens from the printer’s working chamber by pressing its top. The door can be removed completely. To do this, slightly pull the door up when it is a bit open.

>**Attention!** ***Careful!*** The print block and work surface may remain hot for 10 minutes after you finish. Wait for the working elements of the Stereotech 5D printer to cool down completely.

The STE App control system has a function to help load/unload the material. To use this function, go to the window of the desired Stereotech 3D printer and click the ‘load/unload material’ button. Then follow the system instructions.

![work 6](/docs/ste320/work/steapp_change_material.jpg)

## Calibration of the additional axes module

The additional axes module is calibrated using the STE App control system. To prepare the printer for 5D printing, you need to run the following managers:

* 5D calibration
* Setting the zero point

![5D managers](/docs/ste520/work/5d_managers.jpg)

### 5D calibration Manager

The 5D calibration Manager is required for calibration of the rotational A axis. When using this Manager, you must use the calibration tool.

![5D Calibration](/docs/ste520/work/5d_calibration_1.jpg)

Install the calibration tool on the platform and follow the on-screen instructions.

![5D Calibration 2](/docs/ste520/work/5d_calibration_2.jpg)

### Calibration of the rotational axis A without using a calibration tool

In some cases, it is necessary to set the position of the A-axis without using a calibration tool. To do this, attach the print base to the platform and move the print head nozzle to the beginning of the base using the arrows on the control panel.

![Axis](/docs/ste520/work/axis.jpg)

![Start point](/docs/ste520/work/start_point.jpg)

Moving along the **Y** and **A** axes, set the base to a horizontal position (the gap between the nozzle and the base must be the same along the entire length of the base)

![End point](/docs/ste520/work/end_point.jpg)

Next, open the terminal on the control panel and enter the following commands:

1. **M114.2** - getting current coordinates including rotational coordinates. The printer's response will be a message like: **MCS: X:100 Y:100 Z:50 A:89.5 B:0 C:0**, where A:... will be the current coordinates of the printer on the A axis.
2. **M206** - getting the current values of the coordinate offset. The printer's response will be a message like: **X:0 Y:0 Z:0 A:3.536** where A:... will be the current offset of the printer on the A axis.
1. You must set the offset so that the horizontal position of the a coordinate Has the value 60. For example, if the current position = *A59.5* and the current offset is *A3.536*, the new offset will be **60 - 59.5 + 3.536 = 4.036**. Enter a new value in the terminal **M206 A4.036**
1. Save changes with the **M500** command

>**Attention!**You must Park the A axis in order for the changes to take effect

### Setting the zero position

The zero position setting Manager allows you to set the position from which the printer starts printing an object. Currently there are 2 modes available: *Classic* and *Spiral5D* mode.

**Classic** mode allows you to determine the starting position for printing in **Classic printing mode**

**Spiral5D** allows you to define the starting position for **Spiral5D printing mode**

>**Attention!**
For **Spiral5D Full mode**, you must perform calibration twice using the **Classic** and **Spiral5D** modes

![Spiral5D calibration](/docs/ste520/work/spiral_5d_calibration.jpg)

## The coordinate system of the printer

The Stereotech 520 operates in multiple coordinate systems, switching between them at the time of printing. The zero position of a particular coordinate system is set via the *zero position setting Manager*

The printer currently uses 3 coordinate systems:

- Basic coordinate system (**G54**). The zero position corresponds to the front left corner of the printer's print area
- The Coordinate system for the classic mode (**G55**). The zero position is located in the middle of the base on which the print is made when the *A* axis is rotated to the 0 position.
- Coordinate system for Spiral5D (**G56**) mode. The zero position is located in the middle of the base on which the print is made when the *A* axis is rotated to the 60 position.

## Managing 5D printing process

After preparing the instructions for the 5D Stereotech printer and performing required service operations, you need to create a job in the print management system STE App.

The main window of the STE App is STE Cluster, an independent print management panel. The panel shows the Stereotech 5D printers combined in a cluster, the temperature of each printer’s working platform and print blocks, printing progress and the sections ‘Storage’, ‘Queue’ and ‘Done Jobs’.

![work 9](/docs/ste320/work/steapp.jpg)

To add a new instruction, use the ‘Add GCODE’ button of the Storage section.

To add a new job, use the ‘Add job’ button of the ‘Queue’ section. In the window that opens, select the GCODE file with instructions, configure the number of copies required, and select Stereotech 5D printers that will be used to complete the job.

After clicking the ‘Add’ button, all the 5D Stereotech printers in the Idle state will **immediately** start working on the job.

Once printing is completed, the jobs will be moved from ‘Queue’ to ‘Done Jobs’. The section collects statistics on successful and canceled jobs, and allows you to repeat the job again (the job goes back to ‘Queue’).

After starting or completing printing, the 5D Stereotech printer will be in Maintenance mode. You must perform all service operations in this mode (loading/unloading the material, calibration of the working platform, applying adhesive, removing the finished part).

After performing the necessary maintenance operations, switch the 5D printer to Idle mode. In this mode, the 5D Stereotech printer will be ready to automatically accept jobs for completion.

>**Attention!** Make sure to visually check the chamber each time you turn on Idle mode. Make sure: that the working chamber contains no objects (tools, finished parts, etc.); spools with material are set correctly and not in the way of mobile nodes; the working surface is properly secured on the working platform; there are no other obstacles that could interfere with normal operation of Stereotech 5D printer; the inspection window is closed.