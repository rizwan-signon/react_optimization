import React, { useState, useEffect, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

/**
 * Global Virtual Keyboard Component
 * - Works with all input & textarea fields
 * - Appears when a text field is focused
 * - Hides automatically when focus is lost
 * - Syncs value both ways (keyboard <-> input)
 */
const VirtualKeyboard = () => {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");
  const [activeInput, setActiveInput] = useState(null);
  const keyboardRef = useRef();

  useEffect(() => {
    const handleFocus = (e) => {
      const tag = e.target.tagName;
      const type = e.target.type;

      if (tag === "INPUT" || tag === "TEXTAREA") {
        setActiveInput(e.target);
        setInput(e.target.value || "");
        setVisible(true);

        // Detect numeric fields and change layout
        if (type === "number" && keyboardRef.current) {
          keyboardRef.current.setOptions({
            layoutName: "numeric",
          });
        } else if (keyboardRef.current) {
          keyboardRef.current.setOptions({
            layoutName: "default",
          });
        }
      }
    };

    const handleBlur = () => {
      // Delay so keyboard clicks aren't immediately dismissed
      setTimeout(() => {
        if (
          !document.activeElement.classList.contains("hg-button") &&
          !document.activeElement.closest(".simple-keyboard")
        ) {
          setVisible(false);
          setActiveInput(null);
        }
      }, 150);
    };

    document.addEventListener("focusin", handleFocus);
    document.addEventListener("focusout", handleBlur);

    return () => {
      document.removeEventListener("focusin", handleFocus);
      document.removeEventListener("focusout", handleBlur);
    };
  }, []);

  const onChange = (text) => {
    setInput(text);
    if (activeInput) {
      activeInput.value = text;
      // Sync with React controlled inputs
      activeInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  const onKeyPress = (key) => {
    if (key === "{enter}") {
      activeInput?.blur();
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#f9f9f9",
        borderTop: "1px solid #ddd",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.15)",
        zIndex: 9999,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Keyboard
        keyboardRef={(r) => (keyboardRef.current = r)}
        onChange={onChange}
        onKeyPress={onKeyPress}
        inputName="globalInput"
        theme="hg-theme-default hg-layout-default"
        layout={{
          default: [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "q w e r t y u i o p [ ] \\",
            "a s d f g h j k l ; ' {enter}",
            "z x c v b n m , . / {space}",
          ],
          numeric: ["1 2 3", "4 5 6", "7 8 9", "0 {bksp} {enter}"],
        }}
        display={{
          "{bksp}": "⌫",
          "{enter}": "⏎",
          "{space}": "Space",
        }}
      />
    </div>
  );
};

export default VirtualKeyboard;
