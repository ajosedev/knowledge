# useImperativeHandle

`useImperativeHandle` lets you customise what is exposed as a `ref`. Ideally this is only used for imperative behaviours that can't be expressed as a prop. [[20220829123647-imperative-vs-declarative-react]]

Rather than passing the ref directly to the element, the `ref` is passed to the hook. Then functions can be written on this new exposed ref. This allows you to create a subset of the default functions on the element, or create your own methods.

```jsx
const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);
  
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
      // Do something custom
	  scrollAndFocusAddComment() {
        commentsRef.current.scrollToBottom();
        addCommentRef.current.focus();
      }
    };
  }, []);
  
  return <input {...props} ref={inputRef} />;
})
```

A new internal ref should be used for the real element ref. In this case, `inputRef` is used.

[[react]]