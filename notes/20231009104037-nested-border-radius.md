# Matching border radiuses for nested corners

If you nest two elements with the same corner radius, you will land up with an optical effect that is unnatural and doesn’t look pleasing to the eye.

If you nest two elements with the same border radius, you'll get a strange effect where the corners don't match. This is because the inner border radius of an element is not the same as the outer border radius.

The solution to this is to give the nested element a lower border radius. The exact calculation for this is `nested radius = outer border radius + diameter of border/padding/etc`. The diameter could come from border, padding, or any other space. It refers to the space between the two radiuses.

![[Nested border radius.png]]

Keywords: rounded corners

[[css]]