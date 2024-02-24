import { forwardRef, useImperativeHandle, useRef } from "react";

// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});

// const MyInput = forwardRef((props, ref) => {
//   return <input {...props} ref={ref} />;
// });

export default MyInput;
