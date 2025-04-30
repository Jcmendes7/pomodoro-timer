import styles from "./styles.module.css";
type DefaultInputProps = {
  id: string;
  labeltext: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labeltext,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor="task"> {labeltext} </label>
      <input
        className={styles.input}
        type={type}
        name="task"
        id={id}
        {...rest}
      />
    </>
  );
}
