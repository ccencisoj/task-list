import React from 'react';
import clsx from 'clsx';
import styles from './Textarea.module.scss';

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

  const styles_field = clsx({
    [styles.field]: true,
    [styles.focused]: focused
  });

  return (
    <div className={styles_field}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.row}>
        <input 
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