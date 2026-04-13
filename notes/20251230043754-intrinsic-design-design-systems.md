# Intrinsic layout and design system

You can (and should) make your design system components content-first. Make them adapt to whatever container they're in, allow them to be filled with any content, don't tie them to specific breakpoints, etc.

The tricky part is making a design system API that allows pages to be laid out in a content-specific or content-first way. Since it's so reliant on the content, it's inherently at odds with making something that's generic and versatitle.

The best way I've thought of combat this is to add semantics which inform the system of the content. That way a sweeping decision can be made that is still appropriate for the content.

Using a global design grid or similar does the opposite, and I wouldn't recommend it.

[[20251030063907-intrinsic-design]]

[[design]]
[[designsystem]]
[[designsystemapi]]
[[intrinsicdesign]]
[[layout]]