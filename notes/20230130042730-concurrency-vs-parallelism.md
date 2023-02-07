# Concurrency vs parallelism

Concurrency is when the execution of two or more pieces of code **act** as if they run at the same time. Parallelism is when they **do** run at the same time.

To have concurrency, you need to run code in an environment that can switch execution between different parts of your code when it is running - fibers, threads, processes, etc.
To have parallelism, you need hardware that can do two things at once - CPU cores, etc.

Building on top of coupling is the idea of temporal coupling. Where your code relies on a sequence or order. Try to avoid this if possible. An activity diagram is a useful tool for identifying what can happen concurrently, and what must happen in order.

Building for concurrency helps you take advantage of parallelism when you have the hardware for it. Keep things independent when you can, and then make them parallel when you can.

Concurrency in a shared resource is difficult. [[20230130042755-concurrency-shared-state]]

[[concepts]]