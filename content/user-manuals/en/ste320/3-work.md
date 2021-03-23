---
title: Printer Operation
description: Printer Operation
---

## File types

This section describes the various file types that you will deal with when working with Stereotech 320. STL files are intended to store 3D models. G-codes contain instructions for a Stereotech printer.

### STL

STL is a widely used type of 3D modeling files. It contains surfaces made up of triangles. Each triangle has an inner and outer side. The outer side is called the normal. In a well-formed STL model, all normals look outward, and the surface is continuous, i.e. it has no holes. If the model meets these standards, it is called a manifold model. Although some STL models with an inverted (turned inwards) normal can still be printed, the manifold model is considered a requirement for 3D printing.

STL files are compatible with many different 3D modeling programs, and this type of file has already become standard for 3D printing models.

### GCODE

GCode is a programming language for numerically controlled CNC machines, which include 3D printers. A special program breaks the 3D model into layers and creates a set of instructions for the Stereotech Printer, and these instructions are written in GCode. Instructions include commands that tell extruders how hot to get, where to move, and when to start extruding plastic; commands to control the bed platform, and commands to control peripheral components, including Stereotech light indicators.

## Obtaining models for 3D printing

To start working with 3D printer Stereotech 320 you need to obtain a 3D model in the STL format.
This can be done in three ways:

### 1. Download a pre-made model from external resources

For example, [thingiverse.com](https://thingiverse.com) has 1.5 million models ready for 3D printing. Models are often accompanied by a description of 3D printing settings that will allow you to get a positive result.

![work 1](/docs/ste320/work/thingiverse.jpg)

This method is well suited for new users and does not require special skills.

> **Attention!** 3D printer Stereotech 320 is designed to print with thermoplastic polymers, the properties of which depend on many factors. Therefore, optimal results of 3D printing can be achieved experimentally.

### 2. Create a model using a computer-aided design (CAD) system

Creating a model in a CAD system requires appropriate design skills.
The following software products are best suited for this purpose:

- Special packages for 3D printing: 3D Builder (https:// Tinkercad (https://www.tinkercad.com/)
- Industrial design packages: Fusion360 (https://www.autodesk.com/products/fusion-360/)
- 3D visualization packages: SketchUp (www. Blender (https://www.blender.org/)

![work 2](/docs/ste320/work/fusion360.jpg)

For professional 3D printing, select the software package according to your needs. Different products contain specific tools that facilitate the design of specific tasks.

Instructions on how to use software products can be found on the manufacturers’ websites.

> **Attention!** BIM (building information modeling) design packages are not suitable for 3D printing, as STL models obtained in them are often not manifold.
Use only licensed software.
All the above-listed software products have a free version.

Each computer-aided design system has its own format for describing the model geometry. However, any CAD system allows to export the STL model.

This method is well suited for advanced and professional users.

### 3. Create 3D model by scanning the object

To create a 3D model by scanning an object, you will need a 3D scanner and point cloud software. More information on the use of this method can be found on the websites of 3D scanner manufacturers.

This method is well suited for advanced and professional users.

## Preparing models for 3D printing

> **Attention!** this section assumes that you already have a model of the future product in the ".STL"format. If you don't have one, read the previous section "getting a model for 3D printing".

To 3D print the resulting model, you need to prepare instructions for the Stereotech Printer in a special slicer software.

The Stereotech 320 3D printer is adapted to work with the Ultimaker Cura slicer. Download STL models, configure print modes, and save GCODE instructions for the Stereotech 3D printer.

### Sequence of installation and initial configuration of Ultimaker Cura

1. Download Ultimaker Cura from the link: https://ultimaker.com/en/products/ultimaker-cura-software
Follow the installation instructions.

![work 3](/docs/ste320/work/cura.jpg)

2. On the first launch, on the add printer page, select **Add a non-networked printer -> Stereotech LLC -> Stereotech STE320 from the List**

![work 4](/docs/ste320/work/cura_add_printer.jpg)

When the setup is complete, the available print area of the Stereotech 320 3D printer and its platform will appear.

![work 5](/docs/ste320/work/cura_window.jpg)

3. Instructions for using Ultimaker Cura are available at: https://ultimaker.com/en/resources/52887-welcome-to-ultimaker-cura

## Loading/unloading material

You can install the spool with the material through the inspection window or by opening the side door. The side door opens from the printer’s working chamber by pressing its top. The door can be removed completely. To do this, slightly pull the door up when it is a bit open.

> **Attention!** ***Careful!*** The print block and work surface may remain hot for 10 minutes after you finish. Wait for the working elements of the Stereotech 3D printer to cool down completely.

The STE App control system has a function to help load/unload the material. To use this function, go to the window of the desired Stereotech 3D printer and click the ‘load/unload material’ button. Then follow the system instructions.

![work 6](/docs/ste320/work/steapp_change_material.jpg)

> **Attention!** make sure that the print block is selected correctly for the uploaded material. For information about what materials to use for the first and second printblocks, see the Chapter "printing materials".

## Calibration of the bed platform

Calibration of the bed surface should be performed if there is an increased or uneven gap between the nozzle and the work surface on the first layer.

The STE App control system has a function to help calibrate the bed platform. To start the function, go to the window of the desired Stereotech 3D printer and click the "calibrate bed platform" button. Then follow the system instructions.

![work 7](/docs/ste320/work/steapp_bed_leveling.jpg)

## The application of the adhesive

To ensure that the printed part is securely attached to the work surface, use the special **3D printing adhesive** supplied with the Stereotech 3D printer.

Glue must be applied to a lint-free cloth, and then wipe the work surface with it.

![work 8](/docs/ste320/work/ahesive.jpg)

> **Attention!** Do not use glue inside the working chamber of the Stereotech 3D printer. The glue components settle on the moving elements, which can cause damage to the 3D printer.

## Managing 3D printing process

After preparing the instructions for the Stereotech 3D printer and performing required service operations, you need to create a job in the print management system STE App.

The main window of the STE App is STE Cluster, an independent print management panel. The panel shows the Stereotech 3D printers combined in a cluster, the temperature of each printer’s working platform and print blocks, printing progress and the sections ‘Storage’, ‘Queue’ and ‘Done Jobs’.

![work 9](/docs/ste320/work/steapp.jpg)

To add a new instruction, use the ‘Add GCODE’ button of the Storage section.

To add a new job, use the ‘Add job’ button of the ‘Queue’ section. In the window that opens, select the GCODE file with instructions, configure the number of copies required, and select Stereotech 3D printers that will be used to complete the job.

After clicking the ‘Add’ button, all the 3D Stereotech printers in the Idle state will **immediately** start working on the job.

Once printing is completed, the jobs will be moved from ‘Queue’ to ‘Done Jobs’. The section collects statistics on successful and canceled jobs, and allows you to repeat the job again (the job goes back to ‘Queue’).

After starting or completing printing, the Stereotech 3D printer will be in Maintenance mode. You must perform all service operations in this mode (loading/unloading the material, calibration of the working platform, applying adhesive, removing the finished part).

After performing the necessary maintenance operations, switch the 3D printer to Idle mode. In this mode, the Stereotech 3D printer will be ready to automatically accept jobs for completion.

> **Attention!** Make sure to visually check the chamber each time you turn on Idle mode. Make sure: that the working chamber contains no objects (tools, finished parts, etc.); spools with material are set correctly and not in the way of mobile nodes; the working surface is properly secured on the working platform; there are no other obstacles that could interfere with normal operation of Stereotech 3D printer; the inspection window is closed.

