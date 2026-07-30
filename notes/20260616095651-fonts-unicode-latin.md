# Fonts, unicode, latin

Unicode is a standardized character encoding system that assigns a unique number to every character in most written languages. Instead of different regions having different character sets, Unicode provides one global standard.
- Each character has a code point (a number like U+0041 for "A")
- Unicode is organized into blocks — groups of related characters (Latin, Greek, Cyrillic, CJK, emoji, etc.)

Specific Unicode blocks are named different, and have a different range. For example:

| Range           | Name                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------- |
| U+0000 - U+007F | [C0 Controls and Basic Latin (Basic Latin)](https://unicode-explorer.com/b/0000)               |
| U+0080 - U+00FF | [C1 Controls and Latin-1 Supplement (Latin-1 Supplement)](https://unicode-explorer.com/b/0080) |
| U+0100 - U+017F | [Latin Extended-A](https://unicode-explorer.com/b/0100)                                        |
| U+0180 - U+024F | [Latin Extended-B](https://unicode-explorer.com/b/0180)                                        |

https://unicode-explorer.com/ is helpful for figuring out what character belongs to what unicode block. Latin is the main one for English-like languages (hence, latin), but there are other blocks like Cyrillic, Hebrew, Arabic, etc. 

Fonts are often split up between these unicode blocks, which is called subsetting.

[[design]]
[[fonts]]
[[typography]]
[[web]]