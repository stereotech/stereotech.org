---
title: Dual Extrusion printing
description: Dual Extrusion printing
---
## Setting up a profile for dual-extrusion printing

1. Opening Ultimaker Cura. Expand the tab with profiles, add a new one.

![1.1](/docs/ste320/dualextrusion/1-1.jpg)

2. Choose Stereotech STE320, call it as Stereotech STE320 2 extr.

![1.2](/docs/ste320/dualextrusion/1-2.jpg)

3. Now open the Machine Settings window

![1.3](/docs/ste320/dualextrusion/1-3.jpg)

4. Check the parameters: number of extruders 2, offset for the first extruder 0 X and 0 Y , for the second 18 mm X and 0 Y

![1.4](/docs/ste320/dualextrusion/1-4.jpg)

5. For clarity, we switch the material of the second extruder to ABS

![1.5](/docs/ste320/dualextrusion/1-5.jpg) 

## PLA-PLA calibration and test printing

1. We weaken the second printblock, lower it below the first one. If there are plastic residues on any of the nozzles (in our case, on the first one), we warm it up.

![2.1](/docs/ste320/dualextrusion/2-1.jpg)

2. Raise the table to the position Z=0. Fixing the second printblock. After fixing, there should be no gap between the table and the nozzles.

![2.2](/docs/ste320/dualextrusion/2-2.jpg)

3. Prepare a test print. Opening Ultimaker Cura. Go to the Stereotech STE320 2 extr profile

![2.3](/docs/ste320/dualextrusion/2-3.jpg)

4. We configure each extruder separately, as shown in the drawing. The Quality tab is shared between two extruders. Important parameters for dual – extruder printing that need to be added are Standby Temperature and Nozzle Switch Retraction distance. The airflow for each extruder is set to 100% (for PLA).

![2.4](/docs/ste320/dualextrusion/2-4.jpg)

5. As a test model for printing, we add 2 bars of 10x20x10 mm and put them close together.

![2.5](/docs/ste320/dualextrusion/2-5.jpg)

6. Click the RMB on the right bar, and select Extruder 2. The color of the part changes because the “material” of the extruder is different.

![2.6](/docs/ste320/dualextrusion/2-6.jpg)

7. Print the part with these settings. It should look like the picture

![2.7](/docs/ste320/dualextrusion/2-7.jpg)

8. If the second bar is offset relative to the first one, you need to measure the value of this offset and add it with the **reverse sign** to the current offset in the Machine Settings window in the Extruder 2 tab. That is, if the offset is positive – along the axis – we subtract it, and Vice versa. Next, you need to cut the part with the new offset settings and reprint it. Repeat as long as the offset will not practically become zero.

> Tip: 
after changing the offset value in the Machine Settings window, you must close it and then open it again to make sure that the new values are saved.

![2.8](/docs/ste320/dualextrusion/2-8.jpg)
![2.9](/docs/ste320/dualextrusion/2-9.jpg)

## Setting up ABS printing with SBS support

**! Before printing, you must perform a calibration (instruction 2_calibration and test printing)**

1. In Ultimaker Cura, we load the part. The first extruder is configured for the main material – ABS. Printing Temperature 240, Standby Temperature 190 (it is important that the difference is not more than 50 degrees). You should also check the Nozzle Switch Retraction Distance (16 mm) setting.

![3.1](/docs/ste320/dualextrusion/3-1.jpg)

2. Next, set up support. This is also done in the tab of the first extruder. The main thing is to choose Support Extruder as Extruder 2.

![3.2](/docs/ste320/dualextrusion/3-2.jpg)

3. The second extruder is configured for the support material - SBS. The main thing is to set the Printing/Standby Temperature. Other print settings for both extruders are optional.

![3.3](/docs/ste320/dualextrusion/3-3.jpg)

4. We cut it and visualize it as a Material Color. You can see that the supports are printed by the second extruder.

![3.4](/docs/ste320/dualextrusion/3-4.jpg)

5. After printing, the item looks like this:

![3.5](/docs/ste320/dualextrusion/3-5.jpg)

6. Addition. You can set up support printing with the main material (ABS), and print only the Support Interface from the additional material (SBS). Settings and visualization below.

![3.6](/docs/ste320/dualextrusion/3-6.jpg)   