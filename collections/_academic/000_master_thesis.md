---
title: "Master Thesis (2025)"
image: /assets/images/master_thesis/cover.png
link: "-"
order: 0
---

This thesis explores the feasibility and precision of aerial manipulation using a fully actuated omnidirectional hexacopter platform developed at the Autonomous Systems Lab at ETH Zürich. A reactive peg insertion task serves as the central benchmark to evaluate the system's performance since it includes multiple different aspects that were found to be particularly challenging by related research groups: target identification without a priori knowledge, high end effector precision, and transitioning from free flight to contact with a rigid object. 

The final system integrates a vision-based object tracker with robust outlier rejection, a composite controller with policies for individual motion axes, and passively compliant end effectors to mitigate contact forces. During a test phase, the full system was able to successfully perform the peg insertion task. A hole with a diameter of 0.8 cm could reproducibly be hit with the end effector after a slow and supervised approach, and prolonged contact of more than 10 seconds is possible. However, the actual platform precision is estimated to be approximately 2-3 cm, as an area of this size could be struck with full certainty in all circumstances.

A key emphasis is placed on modularity: multiple variants of the visual detector and tracking modules were implemented and tested, and different compliant end effector attachments were evaluated. Both learned and classical detection algorithms achieved true positive rates of more than 70\% in good visibility conditions and at least 20\% in poor conditions. Subsequently, a target estimation accuracy as low as 1.1 cm for close-range scenarios is possible and exhibits proportional degradation as the distance from the target is increased.

These results highlight that centimeter-level manipulation tasks with prolonged contact to rigid surfaces are achievable using vision-only object tracking and fully actuated UAV control, without external motion capture.