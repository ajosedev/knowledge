# Create new window and follow Emacs

My regular flow involves invoking three commands:
1.  `SPC w H` to create a new window (vertically), but stay focused on the left window
2. `SPC w l` to move to the newly created window
3. `SPC SPC` to find a file in the new window

A better solution would be to create a new window and follow it, combining steps 1 and 2:
1. `SPC w V` to split the window (vertically) and follow the cursor the new window
2. `SPC SPC` to find a file in the new window

`SPC w S` splits the window horizontally.

Not sure if there's a way of opening from a new window when finding a file?

[[emacs]]