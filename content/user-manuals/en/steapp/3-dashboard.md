---
title: 3D printing
description: 3D printing using the STE App
---

## Dashboard page

To go to the ‘Dashboard’ page click the icon

![icon](/docs/steapp/dashboard/icon.jpg)

This page consists of several section cards containing various information necessary for printing on Stereotech printers

![overview](/docs/steapp/dashboard/overview.jpg)

## Print state panel

The first panel is a printer state panel. You can use this panel to track the state of a printer (one or more), change the printer state between two modes (*Idle* and *Maintenance*), monitor the temperature of the extruders and the platform, and pause or stop printing. All possible states are shown in the figure below.

![state](/docs/steapp/dashboard/state.jpg)

From some states, you can switch the printer to 2 main operating modes - *Standby* and *Maintenance*. When the printer is idle, it can accept jobs from the print queue; when the printer is in the maintenance state, it does not accept new print jobs. This mode is necessary to carry out maintenance operations on the printer.

![select state](/docs/steapp/dashboard/select_state.jpg)

During a print, the panel displays controls that allow to pause, resume, or stop printing.

![play pause](/docs/steapp/dashboard/play_pause_stop.jpg)

## Print job panels

Below the printer state panel are print job panels.

![print jobs](/docs/steapp/dashboard/print_jobs.jpg)

The *Done Jobs* panel displays the print history. The *Queue* panel displays the current queue of print jobs. To add a new job, click **+** on the panel.

![add job](/docs/steapp/dashboard/add_job.jpg)

In the window that opens, select a Gcode file for printing. The remaining fields are optional; they allow to rename jobs, assign printers to complete the job, make multiple copies for batch printing, and add a description to it.

A new job will be added to the bottom of the queue. Jobs are sent for printing from the top of the queue. The queue workflow is shown below.

![queue](/docs/steapp/dashboard/queue.jpg)

### File panels

Below are the panels for managing GCode files. First comes the panel with the contents of the local file storage. Using the file upload field, you can add new GCode files to the storage.

![storage](/docs/steapp/dashboard/storage.jpg)

Then there are panels with the contents of USB drives connected to the printers. If you have multiple printers and USB storages connected to them, you will have access to, and the ability to create a job with, these files for any of the printers in the cluster.
