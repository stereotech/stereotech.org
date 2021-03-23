---
title: Working with Stereotech STE Slicer
description: Working with Stereotech STE Slicer
---

## Adjustment tools

Stereotech STE Slicer offers different tools to adjust the model before printing. This allows you to easily position models on the platform in the most efficient way. All adjustment tools are described below.

### Move tool

The move tool allows the model to be moved on X, Y and Z axes. This way, you can position the model to the desired location.

> Models are automatically kept apart and dropped to the build platform by default. You can change these preferences in the app settings.

- Select the model (3) on the build platform
- The move tool (1) opens by default
- Use the input field to set a specific coordinate (2)
- Drag the model (3) to move it freely, or drag the arrows (4) to move it locked on one axis

![move_tool](/docs/steslicer/using/move_tool.jpg)

### Scale tool

The scale tool allows the model to be scaled, both uniform and non-uniform. The model can be scaled in three different ways; in millimeters, as a percentage and with the handles in the 3D viewer.

- Select the scale tool (1)
- Set a specific size in millimeters (2)
- Scale the model to a percentage (3)
- Drag the handlebar (4) in the 3D viewer to scale the model
- Reset (5) the model to its original scale
- Enable/disable snap scaling (6)
- Enable/disable uniform scaling (7)

![scale_tool](/docs/steslicer/using/scale_tool.jpg)

### Rotate tool

The rotate tool allows the model to be rotated on all 3 axes.

- Select the rotate tool (1)
- Reset (2) the model to its original orientation
- Lay the model flat (3) on the build platform.
*Tip: Help STE Slicer determine what face to put flat by rotating it close to the build platform*

- Drag the hoops (4) to rotate the model at 15° intervals.
- Snap rotation (5) is enabled by default. Disable it here or hold ‘shift’ while dragging

![rotate_tool](/docs/steslicer/using/rotate_tool.jpg)

### Mirror tool

The mirror tool allows the model to be rotated on all 3 axes. It is easy to use, with just one way to use it.

- Select the mirror tool (1)
- Click the arrowheads (2) indicated by the axes colors to mirror the model on that axis

![mirror_tool](/docs/steslicer/using/mirror_tool.jpg)

### Per model settings

Per model settings provide the ability to have multiple models in Stereotech STE Slicer with a different printing strategy. This allows printing batches easily with models for different purposes.

- Select the model (2) you wish to modify.
- Select per model parameters (1)
- ‘Select settings’ (5) opens a pop-up list with available settings
- Locate the setting and enable the checkbox (3)
- Use the filter (4) to quickly find your settings
- Use the input field (6) to change the setting value
- Use the ‘-’ (7) button to remove the custom setting from the list

![per_model](/docs/steslicer/using/per_model.jpg)

### Select extruder

You also have the ability to assign an extruder to specific models.

- Select the desired model (3) on the build platform.
*The last used adjustment tool opens *

- Select the extruder (2) you want to print the model with.
- The extruder selector has a colored circle (1) to indicate what material this model will be printed with. It corresponds with the loaded material in the printer settings and the model on the build platform

![select_extruder](/docs/steslicer/using/select_extruder.jpg)

## Merging and grouping models

Stereotech STE Slicer has the ability to merge or group multiple models uploaded on the build platform. Merging and grouping are useful when there are more than one model on the build platform.

### Grouping models

Grouping models allows to configure models simultaneously to reduce the number of necessary actions and reduce the number of possible errors made during configuration.

1. Select two or more models on the build platform using **‘shift + left clicking’** each model

1. Selected models are indicated by a blue outline
1. **‘Right-click’ ** one of the selected models and select **‘group models’**. Or hit **Ctrl + G**

![group_models](/docs/steslicer/using/group_models.jpg)

> Tip: Ungrouping is done with the same workflow, but in step 3 choose Ungroup models

Grouping models has the following effect:

1. The models keep the same position on the build platform
2. The models keep the same orientation and position to each other
3. Models can be scaled, rotated and mirrored simultaneously

### Merging models

This function is useful in work with two-material models. Merging allows the models to be combined in the easiest way possible. Follow these steps to **merge models**:


1. Select two or more models on the build platform using **‘shift + left clicking’** each model

1. Selected models are indicated by a blue outline
1. **‘Right-click’ ** one of the selected models and select **‘merge models’**. Or hit **Ctrl + Alt + G**

![merge_models](/docs/steslicer/using/merge_models.jpg)

Merging models has the following effect:

1. The models are aligned to the position of both models’ origin
2. Models can be scaled, rotated and mirrored simultaneously

## View modes

STE Slicer offers several ways to view the model. The different views allow checking the model on specific details. There are three different view modes available.

### Solid view

The solid view is selected by default and represents the model as it was digitally created. This way, you can check if the desired model is loaded and whether it is loaded correctly.

- Model (1) is shown corresponding to the view mode selected
- The view mode button (3) is located on the top upper corner of the 3D viewer.
- Click it and ensure ‘Solid view’ is selected (2).
- When a model is located in a non-printable area (5), it is displayed with stripes (4).
- Non-printable areas(5) are dark grey areas on the build platform.

![solid_view](/docs/steslicer/using/solid_view.jpg)

### X-ray view

The X-Ray view allows looking through the model, making it easy to detect missing and superfluous internal geometry. The detected errors in the model are displayed in red. Not all types of errors are displayed, so this is not a guarantee that the model is correct.

> Although some models are ‘broken’ when loaded, mesh fixes allow the model to be printed (seemingly) correct.

- Model (1) is shown corresponding to the view mode selected
- The view mode button (3) is located on the top upper corner of the 3D viewer.
- Click it and ensure ‘X-ray view’ is selected (2).
- Broken model parts are indicated by red areas (4)

![xray_view](/docs/steslicer/using/xray_view.jpg)


### Layers view

The layers view represents the print moves of the nozzle(s). This way, the result of all input from the settings panel is visualized, ideal for determining your printing strategy.

- Model (1) is shown corresponding to the view mode selected
- The view mode button (4) is located on the top upper corner of the 3D viewer. Click it and ensure that ‘Layer view’ is selected (2).
- Visualization of the extruders (2) can be toggled to ease viewing of individual parts.
- The colors of the lines can be set to line type (3) or material color
- Different parts of the lines (5) can be disabled to get a closer view of certain model parts
- The layer (6) box shows the current layer viewed. It can be used to enter values to directly jump to
- The layer slider has three parts: top (7), middle (8 ) and bottom (9). These parts can be dragged separately to examine the layer view

![layer_view](/docs/steslicer/using/layer_view.jpg)


## Project saving

Stereotech STE Slicer contains a lot of information about the printer, models, printing profiles, materials and all configurations. All this information can be saved separately to share or use later. Sometimes it might be useful to save all the information visible in Stereotech STE Slicer at once, to open a project later on and easily make some adjustments. That is what the ‘Project Saving’ function is for.

### Open and Save projects

- Select ‘Open file(s)’... (1) to open a project file
- Select ‘Save project’ (2) to save a project file
- Open the project by clicking ‘Open as project’ (3) in the pop-up window
- If you wish to only upload embedded model files, select ‘Import models’ (4)

![open_save_project](/docs/steslicer/using/open_save_project.jpg)


### Save project: Summary

When saving a project Stereotech STE Slicer will show a summary of all settings that are going to be saved. The models on the build platform are saved as well complete with their transformations. That means the project will load exactly as it was saved at the time.

![save_project_summary](/docs/steslicer/using/save_project_summary.jpg)

- Models on the build platform
- Printer settings
- Profile settings
- Setting visibility

### Open project

When opening a project file which contains equally named settings, Stereotech STE Slicer cannot know which information is most recent. Therefore, when loading a project you might get the option whether to update the existing (1) setting or create a new (2) one to keep your local settings saved as well.

![open_project_summary](/docs/steslicer/using/open_project_summary.jpg)


1. Update existing: Will update your local settings and therefore not create new setting entries
2. Create new: Will create the settings as new to prevent your local settings from being adjusted.

## Hotkeys and mouse controls

### Mouse control

STE Slicer has a built-in 3D viewer, which is controllable by a keyboard, mouse, or a touchpad.

![mouse_control](/docs/steslicer/using/mouse_control.jpg)


### Keys

Global

- Undo:          **CTRL + Z**

- Redo:          **CTRL + SHIFT + Z**

- Move tool:          **Q**

- Scale tool:          **A**

- Rotate tool:          **Z**


3D viewer controls

- Rotate the camera in the 3D viewer: **Arrow keys **

- Zoom the camera in the 3D viewer: **+ and — **


Model selection

- Select multiple objects in the 3D viewer: **Hold Shift + left-click**

- Select an object in a group:          **Hold CTRL + left-click**

- Clear all objects from the build platform:          **CTRL + D**

- Delete selected object:          **DELETE**

- Open file(s):          **CTRL + O**


Setting tools

- Enable/disable snap rotation/scaling:          **Hold Shift**

- Enable/disable uniform scaling:          **Hold CTRL**


## Custom mode

In Stereotech STE Slicer there are two modes available in the settings panel: recommended and custom. The recommended mode is perfect for beginners, while the custom mode offers more settings for experienced users. In the above sections we explained how slicing in the simple mode works; on this page we explain how to use the advanced mode.

### Profile

Depending on your machine and material setup, a variety of profiles are available to print out of the box. These profiles are a perfect start point to base your own custom profiles on. These profiles are somewhere between ‘extra fine’ and ‘sprint’ and ensure variable layer height, print speed and many other settings.

Based on the selected printer, nozzle size and material Stereotech STE Slicer will automatically update each profile with the right settings.

### Search bar

The custom mode features a search bar to easily access new settings or to filter the currently visible settings to your needs:

- This input field (1) can be used at all times to filter and search for settings
- Dark settings (2) are visible, even without the filter
- Light settings (3) are visible now, but only because it is currently filtered on.
- Ensure the ‘custom’ mode (4) is active.
- Choose a base profile (5) to customize here
- Click the ‘x’ (6) to clear the filer
- ‘Right click’ a setting (7) to have four options; Copy value to all extruders, Copy all changed values to all extruders, hide/show the setting or go to the settings preferences

![custom_search](/docs/steslicer/using/custom_search.jpg)


### Adjusted, hidden and calculated settings

The settings in Stereotech STE Slicer sometimes show indicator items. The meaning of these icons are explained here:

- The reset icon (1) indicates that this setting has been adjusted manually, and does no longer correspond to the profile setting. Click the icon to set the value back to the profile setting
- The calculated setting icon (2) indicates that the value was calculated by STE Slicer, but is now overwritten by an absolute value. Click the icon to change the value back to the calculated value
- The chain icon (3) indicates that the value set here is synchronized for all extruders.
- If an input is greyed out (4), it means that the value is overwritten by values in its child settings
- The settings icon (5) can be used to configure setting visibility settings
- The info icon (6) indicates a user-customized setting is hidden. Click the icon to unhide it
- The category arrow (7) can be used to view or hide all category settings

![custom_values](/docs/steslicer/using/custom_values.jpg)


### Settings

The settings in the side panel are divided in categories, so you can easily navigate through it. These are the available categories:

- Printer: Printer related settings
- Printing mode: Print mode on 5D printer
- Quality: Settings that define the (visual) quality of the print
- Shell: Settings related to the outside of the print
- Infill: All settings that have to do with the inside of the print
- Material: Material related settings
- Speed: Speeds at which the printing head moves while printing
- Travel: How the printing head behaves during travel moves
- Cooling: Settings that define how the plastic is cooled
- Support: Options for printing with supports
- Adhesion: Defines the adhesion of your model to the build platform
- Mesh fixes: Options for fixing faults in models
- Special modes: Features that influence the way of printing
- Experimental: Experimental new features

All categories can be (un)folded by clicking on the arrow icon at the right side, which reveals the available settings. Stereotech STE Slicer shows a selection of most common settings by default, but it’s possible to adjust the visibility of settings to your own preferences. To change the settings visibility take the following steps:

1. Go to Parameters > Settings or click on the gear icon of one of the categories
1. Select or deselect the settings you want to have displayed in the sidebar

Furthermore, all settings have tooltips, providing a short description of each setting’s functionality.

## Managing printers

When you run Stereotech STE Slicer for the first time, the ‘printer wizard’ will pop up. Choose your Stereotech printer from the list to add it to Stereotech STE Slicer. If you wish to set a printer or to add new printers to Stereotech STE Slicer, go to ‘Settings’ > ‘Printer’> ‘Manage printers...". The printer manager will open.

- This (1) is the printers section in the preferences panel
- Click activate (2) to activate the selected printer in the list below
- Click activate (3) to activate the selected printer in the list below STE Slicer
- Click remove (4) to remove the currently selected printer in the list.
- Click rename (5) to give the current printer a custom name
- Machine settings (6) can be changed depending on the active machine.
- This button (8) can be used to connect a printer over the network.

![manage_printers](/docs/steslicer/using/manage_printers.jpg)


### Connecting network printer

Please make sure that your printer is properly connected to the network, and read the printer’s manual to learn how to do this.

- Available printers are displayed in the printer list(1)
- If the printer is not listed, you can add it manually by clicking the ‘Add’ button (2).
- Printers can be edited (3) and removed (4)
- The ‘Refresh’ button (5) updates the list by searching for devices on the network.
- Click the ‘Connect’ button (6) to connect to the selected device

> If the printer is not listed for any reason, click ‘Add’ (2).A pop-up window will appear asking for the printer’s IP address, which can be found on the printer: Settings — > Network state.

![network_printer](/docs/steslicer/using/network_printer.jpg)


### Remove printers

You can always remove printers that you have added to Stereotech STE Slicer. You can do this in the following way:

1. Go to ‘Printer’ in the menu bar or in the settings panel and select ‘Manage printers’.
1. Select the printer you want to remove and then click the ‘Remove’ button. Confirm by selecting ‘yes’ in the pop-up window

### Rename a printer

Especially when you’re using multiple printers it can be useful to name them. You can already give a printer a custom name while adding a new printer, but it’s also possible to rename printers after they have been added. To do so, take these steps:

1. Go to ‘Printer’ in the menu bar or in the settings panel and select ‘Manage printers’.
1. Select the printer you want to rename and then click the ‘Rename’ button
1. Enter the preferred name and click ‘ok’ to confirm

## Manage Profiles

Stereotech STE Slicer provides the ability to save, share and manage your printing profiles. Managing printing profiles is one of the best ways to work efficiently. On this page we explain how to manage printing profiles to make the most of 3D printing.

### Quick menu

The easiest way to quickly create, update and save a profile is through the quick menu. It is also the easiest way to access the profile manager.

- Access the quick menu by clicking the profile (1)
- The currently active profile is indicated (2)
- Create (3) a new profile with the current settings
- Update (4) an already saved profile with the current adjustments
- Discard (5) the current adjustments and revert to the saved profile.
- Open the profile manager (6)

![quick_menu](/docs/steslicer/using/quick_menu.jpg)


### Profile manager

When you click on the ‘Profile Manager’ button, it will open in a new screen, with all options available as displayed below.

- The ‘Profiles’ tab (1) is located on the left side of the preferences panel.
- Select a profile and click ‘Activate’ (2) to enable it
- Select a profile and click ‘Duplicate’ (3) to make a copy
- Select a profile and click ‘Remove’ (4) to delete the profile
- Select a profile and click ‘Rename’ (5) to change its name
- Import (6) and Export (7) profiles to share it with others
- The setting list (8) contains all custom settings of the profile

![profile_manager](/docs/steslicer/using/profile_manager.jpg)


### Add a new profile

In Stereotech STE Slicer you can add new printing profiles based on existing profiles. To add a profile, take the following steps:

1. Click on ‘Profile’ in the menu bar or in the settings panel and select ‘Add profile’
1. A new screen will show up; select ‘Add’
1. STE Slicer has now automatically added a new profile, which is visible in the list of profiles as a customized version of the profile that was selected

### Change settings of a profile

It is also possible to change existing profiles in STE Slicer. For this, you simply select the profile and exit the profile manager. Use the setting sidebar in the main window to adjust your settings. When you now switch to another profile STE Slicer will ask you whether you want to update the profile or not, or if you want to create a completely new profile.

### Import or export profiles

STE Slicer allows you to share profiles with the import and export feature.

Take the following steps to import a profile:

1. Click on ‘Profile’ in the menu bar or in the settings panel and select ‘Manage profiles’
1. Select ‘Import’ and choose the profile or G-code you want to load

Exporting a profile can also be done in a few simple steps:

1. Click on ‘Profile’ in the menu bar or in the settings panel and select ‘Manage profiles’
1. Select the profile you want to export and click on Export.
1. Enter a name and save the profile on your computer

## Manage materials

Stereotech STE Slicer comes preloaded with Filamentarno! materials to make it easy for you to start printing. When printing with other materials, you can add them yourself. This way the material settings are conveniently stored, so you can print with your materials every time. To go to the material settings go to File > Preferences.

1. Click the ‘Materials’ tab (1) to open the material management window
1. To use the selected material, click ‘Activate’ (2)
1. To create an editable material from the current settings, click ‘Create’ (3)
1. To remove a custom material, select it and click ‘Remove’ (4)
1. Import (5) custom materials from others
1. Export (6) your custom material
1. The information tab (7) shows generic material information. This information is not accessible in this case as the profile is protected
1. The ‘Print settings’ tab (8) contains material settings that will be used during printing.

![material_manager](/docs/steslicer/using/material_manager.jpg)


### Add a custom material

To add a custom material, duplicate a material which physical properties come closest to the new material.

The material settings you have to provide is often easily accessible from the packaging of the filament or the website of the manufacturer.

1. Choose a display name (1) to easily recognize the material.
1. Enter the brand name here (2). This also categorizes all filaments from the same brand in the list on the left.
1. Specify the material type (3) here
1. Choose a color (4) by clicking on the color box. A color picker pops up to choose a color, which will be represented in the 3D viewer
1. Enter all the material properties (5). This is important for the weight and price estimate provided by STE Slicer
1. The filament length and cost per meter (6) are calculated by Ste Slicer Stereotech
1. Enter a description (7) for the filament.
1. Enter adhesion information (8) to remember which adhesive is better to use
1. Switch to the ‘Print settings’ tab (9) to view material specific settings
1. Enter the material settings here (10). These settings will be used by STE Slicer to ensure the material is printed with at the right temperatures

![add_material](/docs/steslicer/using/add_material.jpg)
