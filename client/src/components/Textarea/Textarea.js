import React from 'react';
import clsx from 'clsx';
import styles from './Textarea.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { useViewport } from 'src/hooks/ViewportContext';

const Textarea = ({
  name,
  label,
  type,
  placeholder,
  value,
  defaultValue,
  error,
  onChange,
  onFocus,
  onBlur,
  onEnter,
  onBackspace,
  onkeydown,
  actions
})=> {
  const [focused, setFocused] = React.useState(false);
  const { isTabletWindow } = useViewport();

  const handleKeyDown = (ev)=> {
    if(typeof onkeydown === "function") onkeydown(ev);
    if(ev.key === "Enter" && typeof onEnter === "function") onEnter(ev);
    if(ev.key === "Backspace" && typeof onBackspace === "function") onBackspace(ev);
  }

  const handleFocus = (ev)=> {
    setFocused(true);
    if(typeof onFocus === "function") onFocus(ev);
  }

  const handleBlur = (ev)=> {
    setFocused(false);
    if(typeof onBlur === "function") onBlur(ev);
  }

  const styles_textarea = clsx({
    [styles.textarea]: true,
    [styles.focused]: focused,
    [styles.tablet]: isTabletWindow
  });

  return (
    <div className={styles_textarea}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.row}>
        <TextareaAutosize
          type={type || "text"}
          name={name}
          className={styles.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}/>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export default Textarea;