import React, { useEffect } from 'react';
import keypress from 'keypress.js';

const KeyboardShortcut = ({ className, combo, callback, description, children, trackShortCutsInfo }) => {

  useEffect(() => {
    trackShortCutsInfo({ combo, description });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const listener = new keypress.Listener();
    listener.simple_combo(combo, callback);
  }, [combo, callback])

  return <div className={className}> {children} </div>
}

export default KeyboardShortcut;