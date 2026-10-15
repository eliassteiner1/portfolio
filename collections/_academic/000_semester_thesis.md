---
title: "Semester Thesis (2024)"
image: /assets/images/semester_thesis/cover.png 
link: "-"
order: 0
---

Traditionally, research in robotic handovers has mainly focused on optimizing technical aspects such as trajectory planning and controls. However, effective handovers also require consideration of human factors: for example, delivering objects in such a way, that it can be taken effortlessly and used right away by the human recipient. This so called "task-aware" grasping strategy was shown to significantly improve speed and quality of handovers.

This thesis aims to address those challenges by enhancing an existing pipeline developed to generate such task oriented grasps for a robotic end-effector. A crucial part of the pipeline is the segmentation of 3D shapes into two regions: one that is preferrably grasped by humans and another, complementing one, that is free to grab by a robot. The current neural network that performs this segmentation offers room for improvement. Firstly, the abilities of the network should be extended to be able to handle multiple classes of objects without training a separate instance for each class. Secondly, obtaining segmentation labels for 3D data is difficult since it is tedious to create these annotations manually and few datasets exist. To mitigate this problem, a self-supervised implementation is used in this thesis.