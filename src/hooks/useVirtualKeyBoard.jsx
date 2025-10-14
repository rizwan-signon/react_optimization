// src/hooks/useVirtualKeyboard.js
import { useState, useRef, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function useVirtualKeyboard() {
  const keyboardRef = useRef(null);
  const [activeField, setActiveField] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isPiScreen, setIsPiScreen] = useState(false);

  // ✅ Detect Pi / small touchscreen
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsPiScreen(isTouch && width <= 811 && height <= 401);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // ✅ Update value from virtual keyboard
  const onChange = (value) => {
    if (activeField && activeField.onChange) {
      activeField.onChange({
        target: { name: activeField.name, value },
      });
    }
  };

  // ✅ Show keyboard (pass both field + handler)
  const showKeyboard = (name, value, onChangeHandler) => {
    if (!isPiScreen) return;
    setActiveField({ name, value, onChange: onChangeHandler });
    setVisible(true);
    if (keyboardRef.current) keyboardRef.current.setInput(value || "");
  };

  const hideKeyboard = () => setVisible(false);

  const KeyboardUI =
    visible && isPiScreen ? (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "50%",
          background: "#fafafa",
          zIndex: 9999,
          boxShadow: "0 -2px 10px rgba(0,0,0,0.25)",
        }}
      >
        <Keyboard
          keyboardRef={(r) => (keyboardRef.current = r)}
          onChange={onChange}
          onKeyPress={(button) => {
            if (button === "{enter}") hideKeyboard();
          }}
        />
      </div>
    ) : null;

  return { isPiScreen, showKeyboard, hideKeyboard, KeyboardUI };
}
