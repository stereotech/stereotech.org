---
title: 5D printing
description: 5D printing in Stereotech STE Slicer
---

## Introduction

The main difference of Stereotech STE Slicer from other programs for preparing models for printing is the ability to slice models not only into flat, but also curved layers. This opens up additional opportunities for the manufacture of products, increasing their strength and reducing production time.

![benefits](/docs/steslicer/fivedprinting/benefits.jpg)

To start work, you need to add a 5D printer profile. Once added, an additional setting for ‘Printing mode’ will appear in the ‘Print settings’ section on the ‘Recommended’ and ‘Custom’ tabs. It allows you to choose a method to produce a part on a 5D printer.

![printing_mode](/docs/steslicer/fivedprinting/printing_mode.jpg)

Available printing modes:

- Classic — classic printing mode in flat layers
- Spiral5D — cylindrical layer printing mode that allows to strengthen the product by applying material in three-dimensional layers
- Spiral5D Full - printing mode with cylindrical layers, which allows you to strengthen the product by applying material in three-dimensional layers, the base for the part is made by the printer itself, and then cylindrical layers are applied to this base.

## Manage layer structure

STE Slicer allows you to experiment with different printing modes, allowing you to make products with the layer structure that you need. By changing the printing modes and using additional equipment for 5D printing, you can achieve the necessary characteristics of Your product.

If the model center coincides with the rotation axis, the layers evenly diverge from the center.

![centre_model](/docs/steslicer/fivedprinting/centre_model.JPG)
![centre_layers](/docs/steslicer/fivedprinting/centre_layers.JPG)

Shifting the model center away from the rotation axis will reduce the number of supports.

![offset_axis](/docs/steslicer/fivedprinting/offset_axis.JPG)
![supports](/docs/steslicer/fivedprinting/supports.JPG)

It will also allow to change the layer structure.

![layers_structure](/docs/steslicer/fivedprinting/layers_structure.JPG)